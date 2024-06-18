import Link from "next/link";


export default function Home() {

  const styledLink = "text-cyan-600 underline hover:text-cyan-300";
  const stypeP = "mt";

  return (
    <main className="h-screen ml-5">
        <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="mt-5">
        <div>
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
        <div>
          <Link 
          className={styledLink}
          href="./week-5"
          >
            Week 5
            </Link>
        </div>
        <div>
          <Link 
          className={styledLink}
          href="./week-6"
          >
            Week 6
            </Link>
        </div>
        </div>
    </main>
  );
}
