import Link from "next/link";

export default function GoBackComponent() {

  const a = 3;
  const b = 4

  return (
    <div>
      <div className="mt-10">
          <Link href="../">Go Back</Link>
        </div>
        <p>{a} + {b} = {a+b}</p>
    </div>
  );
}