import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    weight: Number,

    measurements: {
      chest: Number,
      waist: Number,
      hips: Number
    },

    performance: {
      runTime: String,
      liftPR: String
    },

    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);


