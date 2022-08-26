import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);
  return (
    <header className="header">
      <span>BY_ART</span>
      <style jsx>{`
        .header {
          width: 100%;
          height: 100%
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          margin: 0px 100px;
        }
        span {
            display: inline-block;
            padding: 20px;
            height: 100%;
            margin-right: 5px;
            font-size: 25px;
        }
      `}</style>
    </header>
  );
}
