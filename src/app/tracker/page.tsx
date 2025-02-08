import TrackerHeader from "@/app/tracker/header/page";


export default function TrackerPage() {
    return (
        <div>
            <TrackerHeader />
            <main className="p-4">
                {/* Other content will go here, like the issue list */}
                <p>Welcome to the AI Issue Tracker</p>
            </main>
        </div>
    );
}
