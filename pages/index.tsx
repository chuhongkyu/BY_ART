import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <div className="main_img"></div>
      <div className="main_container">
        <h1>BY_ART</h1>
      </div>
      <style jsx>{`
        .main_img {
          width: 100%;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #015cbe;
        }
        .main_container {
          width: 100%;
          height: 100vh;
          padding: 10px;
          border: 1px solid black;
        }
      `}</style>
    </>
  );
}
