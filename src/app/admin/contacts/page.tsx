"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Trash } from "lucide-react";
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

const ContactSubmissions = () => {
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

  const FetchContact = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setCotacts(data?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchContact();
  }, []);

  const handleDeleteConfirm = async () => {
    if (selectedRow) {
      try {
        const response = await fetch(`/api/contact/${selectedRow?._id}`, {
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
      toast.warning("Deleted", {
        description: `${selectedRow.name}'s submission has been deleted.`,
      });
    }
  };

  const handleViewMessage = (name: string, message: string) => {
    toast.success(`Message from ${name}`, {
      description:
        message.length > 100 ? `${message.substring(0, 100)}...` : message,
    });
  };

  const handleSendEmail = (email: string, name: string) => {
    toast.success("Email Sent", {
      description: `Email sent to ${name} at ${email}`,
    });
  };

  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    {
      key: "subject",
      label: "Subject",
      sortable: true,
      render: (value: string) => (
        <div className="max-w-[200px] truncate" title={value}>
          {value}
        </div>
      ),
    },
    {
      key: "message",
      label: "Message",
      sortable: false,
      render: (value: string) => (
        <div className="max-w-[300px] truncate" title={value}>
          {value}
        </div>
      ),
    },
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
            onClick={() => handleViewMessage(row.name, row.message)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleSendEmail(row.email, row.name)}
          >
            <Mail className="h-4 w-4" />
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
            Contact Submissions
          </h2>
          <p className="text-muted-foreground">
            Manage and respond to customer inquiries submitted through your
            contact form.
          </p>
        </div>

        <DataTable
          data={contacts}
          columns={columns}
          searchPlaceholder="Search by name, email, subject..."
          pageSize={10}
        />
      </div>

      {/* Delete Confirmation */}
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

export default ContactSubmissions;
