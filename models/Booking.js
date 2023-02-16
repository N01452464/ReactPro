import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
     
    },
    tourName:{
        type: String,
      required: true,
    },
    fullName:{
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    Phone: {
        type: Number,
       
      },
    bookAt: {
        type: Date,
       
      },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);