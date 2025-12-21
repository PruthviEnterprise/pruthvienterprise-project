import axios from "axios";

export async function uploadResume(file: File) {
  try {
    const formData = new FormData();
    formData.append("resume", file);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/career/upload-resume`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        maxBodyLength: Infinity,
      }
    );

    return res.data; // backend should return uploaded file URL or success message
  } catch (error) {
    console.error("❌ Error uploading file:", error);
    throw error;
  }
}
