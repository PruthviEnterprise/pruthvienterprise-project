"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { User, Mail, Phone, Upload, ListOrdered } from "lucide-react";

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { uploadResume } from "@/hooks/uploadimage";
import { toast } from "sonner";

// ✅ Department options
const departments = [
 "Design",
  "Product",
  "Marketing",
  "Sales",
  "Peon",
  "Data Entry Operator",
  "Driver",
  "Clerk",
  "IT",
  "Non IT",
];

// ✅ Zod schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
  department: z.string().min(1, "Department is required"),
});

export const CareerForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileData, setFileData] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      department: "",
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    console.log("📂 Selected File:", selectedFile);

    // form.setValue("resume", JSON.stringify(selectedFile), { shouldValidate: true });
    setFileData(selectedFile);

    // try {
    //   const result = await uploadResume(selectedFile); // pass FormData, not Object URL
    //   console.log("✅ Upload success:", result);
    // } catch (err) {
    //   console.error("❌ Upload failed:", err);
    // }
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = await uploadResume(fileData); // pass FormData, not Object URL

      const formBody = {
        ...values,
        resume: result?.url,
      };

      const response = await fetch("/api/careers", {
        method: "POST",
        body: JSON.stringify(formBody),
      });

      const responseData = await response.json();

      if (!response.ok)
        throw new Error(responseData.message || "Failed to submit");

      toast.success("Success", {
        description: "Your application has been submitted!",
      });

      setFileData(null);

      form.reset();
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error); // Debug log
      toast.warning("Error", {
        description: "Something went wrong. Try again.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Your name"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mobile */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Mobile number"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Department */}
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <div className="relative">
                    <ListOrdered className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground z-10" />
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        console.log("Selected department:", value); // Debug log
                        form.setValue("department", value);
                      }}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* File Upload */}
          <div className="space-y-2">
            <FormLabel>Resume / CV</FormLabel>
            <div
              className="border-2 border-dashed p-6 rounded-lg text-center cursor-pointer"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload className="mx-auto h-6 w-6 text-muted-foreground" />
              <p className="text-sm mt-2">
                {fileData ? fileData.name : "Click to upload (PDF, DOC, DOCX)"}
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                id="file-upload"
                className="hidden"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};
