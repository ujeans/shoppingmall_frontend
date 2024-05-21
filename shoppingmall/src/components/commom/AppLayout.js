//components
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

const AppLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
