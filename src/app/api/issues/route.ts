import { NextResponse } from "next/server";

let issues: { id: number; title: string; description: string; status: string }[] = [];

// GET: Fetch all issues
export async function GET() {
    return NextResponse.json(issues);
}

// POST: Create a new issue
export async function POST(req: Request) {
    const newIssue = await req.json();
    newIssue.id = Date.now(); // Generate unique ID
    issues.push(newIssue);
    return new NextResponse(JSON.stringify(newIssue), { status: 201 });
}

export async function DELETE(req: Request) {
    const { id } = await req.json();
    issues = issues.filter(issue => issue.id !== id);
    return NextResponse.json({ message: 'Issue deleted successfully' });
}
