import User from "../../lib/models/User";
import connectDB from "../../lib/mongodb";

export async function POST(req: Request, res: any) {
  await connectDB();

  const request = (await req.json()) as any;
  const { name, password } = request;

  const person = await User.create({
    name: name,
    password: password,
  });

  return Response.json({ done: true, user: person });
}

export async function GET() {
  await connectDB();

  const users = await User.find();
  return Response.json({ done: true, users });
}
