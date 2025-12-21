import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

// ... rest of the code remains the same ...

const openPositions = [
  {
    title: "Product Executive",
    department: "Product",
    location: "On-site",
  },
  {
    title: "Company Driver",
    department: "Driver",
    location: "On-site",
  },
  {
    title: "Office Clerk",
    department: "Clerk",
    location: "Office",
  },
  {
    title: "IT Support Executive",
    department: "IT",
    location: "Office / On-site",
  },
  {
    title: "Helper / Technician",
    department: "Non IT",
    location: "On-site",
  },
];


export const JobOpenings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Open Positions</h2>
        <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium">
          {openPositions.length} Openings
        </div>
      </div>

      <div className="space-y-4">
        {openPositions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-lg bg-card hover:bg-accent transition-colors group"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {position.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {position.department} · {position.location}
                </p>
              </div>
              <Briefcase className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <Button
              variant="ghost"
              className="w-full mt-2 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
            >
              View Details
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}