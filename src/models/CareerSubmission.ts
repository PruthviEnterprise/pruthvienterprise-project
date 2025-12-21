import mongoose from "mongoose";

const CareerSubmissionSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
    department: String,
    resume: {
      filename: String,
      mimetype: String,
      buffer: Buffer, // Binary data
    },
  },
  { timestamps: true }
);

export default mongoose.models.CareerSubmission ||
  mongoose.model("CareerSubmission", CareerSubmissionSchema);
