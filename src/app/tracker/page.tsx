'use client';

import { useState, useEffect } from 'react';
import TrackerHeader from '@/app/tracker/header';
import IssueList from '@/app/tracker/issue-list';
import CreateIssue from '@/app/tracker/create-issue';

interface Issue {
    id: number;
    title: string;
    description: string;
    status: 'open' | 'closed';
}

export default function TrackerPage() {
    const [issues, setIssues] = useState<Issue[]>([]);

    // Load issues from localStorage when the component mounts
    useEffect(() => {
        const storedIssues = localStorage.getItem("issues");
        if (storedIssues) {
            setIssues(JSON.parse(storedIssues));
        }
    }, []);

    // Function to add a new issue and save it to localStorage
    const addIssue = (issue: Issue) => {
        const updatedIssues = [...issues, issue];
        setIssues(updatedIssues);
        localStorage.setItem("issues", JSON.stringify(updatedIssues));
    };

    return (
        <div>
            <main className="p-4">
                <TrackerHeader />
                <CreateIssue onAddIssue={addIssue} />
                <IssueList issues={issues} />
            </main>
        </div>
    );
}



