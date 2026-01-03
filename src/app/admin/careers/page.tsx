"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, Trash } from "lucide-react";
import DataTable from "@/app/admin/DataTable";
import AdminLayout from "@/app/admin/AdminLayout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const CareerSubmissions = () => {
  const router = useRouter();

  // 🔒 Auth protection
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      router.replace("/admin/login");
    }
  }, [router]);

  const [contacts, setCotacts] = useState([]);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const FetchCareers = async () => {
    try {
      const response = await fetch("/api/careers");
      const data = await response.json();
      setCotacts(data?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchCareers();
  }, []);

  const handleDownloadResume = (resumeUrl: string, name: string) => {
    toast.warning("Downloading Resume", {
      description: `Downloading ${name}'s resume.`,
    });

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = `${name}-resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenResume = (data: any) => {
    window.open(data?.resume, "_blank");
  };

  const handleDeleteConfirm = async () => {
    if (selectedRow) {
      try {
        const response = await fetch(`/api/careers/${selectedRow?._id}`, {
          method: "DELETE",
        });
        const data = await response.json();

        if (data?.data?.success) {
          const filtering = contacts.filter(
            (res: any) => res?._id !== selectedRow?._id
          );
          setCotacts(filtering);
        }
      } catch (error) {
        console.error(error);
      }

      setOpen(false);
      toast("Deleted", {
        description: `${selectedRow.name}'s submission has been deleted.`,
      });
    }
  };

  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "phoneNumber", label: "Mobile", sortable: false },
    { key: "department", label: "Department", sortable: true },
    {
      key: "createdAt",
      label: "Date",
      sortable: true,
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: "actions",
      label: "Actions",
      sortable: false,
      render: (_: any, row: any) => (
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDownloadResume(row.resume, row.name)}
          >
            <Download className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleOpenResume(row)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedRow(row);
              setOpen(true);
            }}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Career Submissions
          </h2>
          <p className="text-muted-foreground">
            Manage and review job applications submitted through your career
            portal.
          </p>
        </div>

        <DataTable
          data={contacts}
          columns={columns}
          searchPlaceholder="Search by name, email, department..."
          pageSize={10}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              <b>{selectedRow?.name}</b>'s submission.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default CareerSubmissions;
