import { hashPassword } from '@/utils/hash'
import User from '../../../../libs/models/User'
import connectDB from '../../../../libs/mongodb'

export async function POST(req: Request, res: any) {
  await connectDB()

  const request = (await req.json()) as any
  const { name, email, password, role } = request

  const hash = await hashPassword(password)

  const person = await User.create({
    name: name,
    email: email,
    password: hash,
    role: role,
  })

  return Response.json({ done: true, user: person })
}
