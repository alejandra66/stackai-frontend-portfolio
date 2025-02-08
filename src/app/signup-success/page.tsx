import Link from "next/link";

export default function SignupSuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold">You have successfully signed up!</h2>
            <p className="mt-4 text-lg">
                Please <Link href="/login" className="text-blue-500 hover:underline">Sign in</Link> to continue.
            </p>
        </div>
    );
}
