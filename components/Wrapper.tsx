const Wrapper = ({ children }: any) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          width: 100%;
          height: 100vh;
          margin: 0px 200px;
        }
      `}</style>
    </section>
  );
};

export default Wrapper;
