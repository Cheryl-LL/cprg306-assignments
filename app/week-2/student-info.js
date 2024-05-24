import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <div className="m-5">
        <p>My name is Qianjun Liang</p>
        {/* "../" means go back to the upper directory, "./" means stay in this directory */}
        <Link href="https://github.com/Cheryl-LL">This is my GitHub page</Link>
      </div>
    </main>
  );
}
