const Wrapper = ({ children }: any) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          height: auto;
          margin: 0px 200px;
        }
      `}</style>
    </section>
  );
};

export default Wrapper;
