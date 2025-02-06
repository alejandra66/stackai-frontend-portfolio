import { NextResponse } from "next/server";

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

let users: User[] = [];

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 409 });
        }

        const newUser: User = {
            id: users.length + 1,
            name,
            email,
            password,
        };

        users.push(newUser);

        return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

