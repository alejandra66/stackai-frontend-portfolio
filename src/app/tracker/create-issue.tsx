'use client';

import React, { useState } from "react";

interface Issue {
    id: number;
    title: string;
    description: string;
    status: "open" | "closed";
}

interface CreateIssueProps {
    onAddIssue: (issue: Issue) => void;
}

export default function CreateIssue({ onAddIssue }: CreateIssueProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"open" | "closed">("open");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title && description) {
            const newIssue: Issue = {
                id: Date.now(),
                title,
                description,
                status,
            };

            onAddIssue(newIssue);

            setTitle("");
            setDescription("");
            setStatus("open");
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-4">Create New Issue</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Issue Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Issue Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <select
                    className="w-full p-2 border rounded"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as "open" | "closed")}
                >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Add Issue
                </button>
            </form>
        </div>
    );
}

