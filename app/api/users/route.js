import { connectToDatabase } from "../../utils/db";
import Student from "../../models/studentSchema";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    try {
      const students = await Student.find();
      return res.status(200).json(students);
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch students." });
    }
  }

  if (req.method === "POST") {
    try {
      const student = await Student.create(req.body);
      return res.status(201).json(student);
    } catch (err) {
      return res.status(400).json({ error: "Failed to create student." });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} not allowed`);
}
