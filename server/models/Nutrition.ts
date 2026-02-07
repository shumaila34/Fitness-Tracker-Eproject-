import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number
});

const nutritionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    mealType: {
      type: String,
      enum: ["breakfast", "lunch", "dinner", "snacks"]
    },

    foodItems: [foodItemSchema]
  },
  { timestamps: true }
);


