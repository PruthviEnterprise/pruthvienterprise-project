import mongoose from 'mongoose'

const CareerSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  mobile: { 
    type: String, 
    required: true 
  },
  department: { 
    type: String, 
    required: true,
    enum: [
     "Design",
  "Product",
  "Marketing",
  "Sales",
  "Peon",
  "Data Entry Operator",
  "Driver",
  "Clerk",
  "IT",
  "Non IT"
    ]
  },
  resume: {
    type: Buffer,
    required: false
  },
  resumeType: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: 'New'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Career || mongoose.model('Career', CareerSchema)