import mongoose, { Schema, Document, Model } from "mongoose";

// Interface defining the structure of the document
export interface IStudent extends Document {
  uniqueId: string;
  name: string;
  dateOfBirth: string;
  regNo: number;
  degree: string;
  branch?: string;
  nameOfTheInstitution?: string;
  university?: string;
  yearOfPassing?: string;
  yearOfStudy?: string;
  CGPA?: number;
  backlogs?: string;
  classObtain?: string;
  remark?: string;
  file?: string[];
  verified: boolean;
  verifiedBy?: string;
  fileIds?: string[];
}

// Mongoose schema
const studentSchema: Schema<IStudent> = new mongoose.Schema({
  uniqueId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of Birth is required."],
  },
  regNo: {
    type: Number,
    required: [true, "Registration number is required."],
  },
  degree: {
    type: String,
    default: "B.E",
  },
  branch: {
    type: String,
  },
  nameOfTheInstitution: {
    type: String,
    default: "Government College of Engineering Srirangam, Trichy 620012",
  },
  university: {
    type: String,
    default: "Anna University Chennai",
  },
  yearOfPassing: {
    type: String,
  },
  yearOfStudy: {
    type: String,
  },
  CGPA: {
    type: Number,
  },
  backlogs: {
    type: String,
  },
  classObtain: {
    type: String,
  },
  remark: {
    type: String,
    default: null,
    trim: true,
  },
  file: {
    type: [String], // Adjust the type based on your file data structure
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verifiedBy: {
    type: String,
  },
  fileIds: { type: String },
});

// Export the model
const StudentData: Model<IStudent> =
  mongoose.models.StudentData ||
  mongoose.model<IStudent>("StudentData", studentSchema);

export default StudentData;
