import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-xl font-bold"> ERROR 404 Page Not Found</h2>

      <button className="bg-red-600 px-4 py-1 rounded-lg mt-4 text-white">
        <Link href="/">Go to Home Page</Link>
      </button>
    </div>
  );
}
