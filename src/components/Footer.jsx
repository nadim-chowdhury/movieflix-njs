import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-4 px-20 flex justify-between items-center">
      <h3>All Rights Reserved By Nadim Chowdhury</h3>
      <Link href="https://nadim.vercel.app" target="_blank">
        My Portfolio
      </Link>
    </footer>
  );
}
