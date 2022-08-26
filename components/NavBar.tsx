import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className="nav">
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : " "}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : " "}>About</a>
      </Link>

      <style jsx>{`
        .nav {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          border-bottom: 1px solid black;
        }
        .nav a {
          display: block;
          padding: 20px;
          height: 100%;
          margin-right: 5px;
          text-decoration: none;
          font-size: 25px;
        }
        .active {
          color: white;
        }
      `}</style>
    </nav>
  );
}
