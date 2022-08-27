import Header from "./Header";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
