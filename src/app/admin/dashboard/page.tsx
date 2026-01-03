"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users, Mail, FileText, TrendingUp } from "lucide-react"
import AdminLayout from "../AdminLayout"

const AdminDashboard = () => {
  const router = useRouter()

  // 🔒 Auth protection
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn")
    if (!isLoggedIn) {
      router.replace("/admin/login")
    }
  }, [router])

  const stats = [
    {
      title: "Total Career Applications",
      value: "142",
      description: "+12% from last month",
      icon: Users,
      trend: "up",
    },
    {
      title: "Contact Submissions",
      value: "89",
      description: "+5% from last month",
      icon: Mail,
      trend: "up",
    },
    {
      title: "Active Job Postings",
      value: "24",
      description: "8 new this week",
      icon: FileText,
      trend: "neutral",
    },
    {
      title: "Response Rate",
      value: "94%",
      description: "+2% from last month",
      icon: TrendingUp,
      trend: "up",
    },
  ]

  const recentApplications = [
    { name: "John Doe", position: "Software Engineer", date: "2024-01-15", status: "New" },
    { name: "Jane Smith", position: "HR Manager", date: "2024-01-14", status: "Reviewed" },
    { name: "Mike Johnson", position: "Marketing Specialist", date: "2024-01-14", status: "Interview" },
    { name: "Sarah Wilson", position: "Data Analyst", date: "2024-01-13", status: "New" },
    { name: "Tom Brown", position: "Project Manager", date: "2024-01-13", status: "Reviewed" },
  ]

  const recentContacts = [
    { name: "Alice Cooper", subject: "Partnership Inquiry", date: "2024-01-15", status: "Pending" },
    { name: "Bob Martinez", subject: "Service Question", date: "2024-01-14", status: "Responded" },
    { name: "Carol Davis", subject: "Quote Request", date: "2024-01-14", status: "Pending" },
    { name: "David Lee", subject: "Technical Support", date: "2024-01-13", status: "Resolved" },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
      case "responded":
        return "bg-blue-100 text-blue-800"
      case "interview":
        return "bg-purple-100 text-purple-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Career Applications</CardTitle>
              <CardDescription>Latest job applications submitted</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{app.name}</p>
                      <p className="text-sm text-muted-foreground">{app.position}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex px-2 py-1 text-xs rounded-full ${getStatusColor(
                          app.status
                        )}`}
                      >
                        {app.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Contact Submissions</CardTitle>
              <CardDescription>Latest contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.subject}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex px-2 py-1 text-xs rounded-full ${getStatusColor(
                          contact.status
                        )}`}
                      >
                        {contact.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{contact.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Review Applications</h3>
                <p className="text-sm text-muted-foreground">Check new career submissions</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <Mail className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Respond to Contacts</h3>
                <p className="text-sm text-muted-foreground">Reply to customer inquiries</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <FileText className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Generate Reports</h3>
                <p className="text-sm text-muted-foreground">Create monthly summaries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
