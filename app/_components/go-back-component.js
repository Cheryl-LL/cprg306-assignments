import Link from "next/link";

export default function GoBackComponent() {
  return (
    <div className="m-5">
      <Link href="../" className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700 transition">
        Go Back
      </Link>
    </div>
  );
}