'use client';

import React from "react";

interface Issue {
    id: number;
    title: string;
    description: string;
    status: "open" | "closed";
}

interface IssueListProps {
    issues: Issue[];
}

export default function IssueList({ issues }: IssueListProps) {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Issue List</h2>
            <ul className="space-y-4">
                {issues.length === 0 ? (
                    <p className="text-gray-500">No issues yet. Add one above!</p>
                ) : (
                    issues.map((issue) => (
                        <li key={issue.id} className="p-4 border rounded-lg shadow-sm bg-white">
                            <h3 className="text-lg font-medium">{issue.title}</h3>
                            <p className="text-gray-600">{issue.description}</p>
                            <span
                                className={`inline-block px-3 py-1 mt-2 text-sm font-semibold rounded-full ${
                                    issue.status === "open" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                                }`}
                            >
                                {issue.status}
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
