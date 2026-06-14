import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-md mx-4 rounded-xl border border-white/10 bg-card text-card-foreground shadow p-6">
        <div className="flex mb-4 gap-2 items-center">
          <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-foreground">404 — Page Not Found</h1>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link href="/" className="mt-6 inline-block text-primary hover:underline text-sm font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
