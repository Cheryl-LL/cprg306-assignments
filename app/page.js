import Link from "next/link";


export default function Home() {

  const styledLink = "text-cyan-600 underline hover:text-cyan-300";
  const stypeP = "mt-10";

  return (
    <main className="h-screen">
        <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
        <div c>
          <Link
          className={styledLink}
          href="./week-2">Week 2</Link>
        </div>
        <div>
          <Link 
          className={styledLink}
          href="./week-3"
          >
            Week 3
            </Link>
        </div>
        <div>
          <Link 
          className={styledLink}
          href="./week-4"
          >
            Week 4
            </Link>
        </div>

    </main>
  );
}
