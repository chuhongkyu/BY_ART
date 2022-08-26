const Wrapper = ({ children }: any) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          width: 100%;
          height: 100vh;
          margin: 0px 100px;
        }
      `}</style>
    </section>
  );
};

export default Wrapper;
