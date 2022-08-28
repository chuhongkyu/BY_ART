import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <div className="main_container"></div>
      <style jsx>{`
        .main_container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #015cbe;
        }
      `}</style>
    </>
  );
}
