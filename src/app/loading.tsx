export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <p className="ml-4 text-lg font-semibold">Loading...</p>
        </div>
    );
  }