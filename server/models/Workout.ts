import { Schema, model, Document, Types } from 'mongoose';

export interface IExercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface IWorkout extends Document {
  user: Types.ObjectId;
  name: string;
  category: 'Strength' | 'Cardio' | 'Flexibility';
  exercises: IExercise[];
  date: Date;
}

const workoutSchema = new Schema<IWorkout>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['Strength', 'Cardio', 'Flexibility'], required: true },
  exercises: [{
    name: { type: String, required: true },
    sets: Number,
    reps: Number,
    weight: Number
  }],
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export const Workout = model<IWorkout>('Workout', workoutSchema);