import mongoose, { Schema } from 'mongoose'

interface User {
  name: string
  email: string
  password: string
  role: 'admin' | 'guest'
}

const User = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.User || mongoose.model('User', User)
