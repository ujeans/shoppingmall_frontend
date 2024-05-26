//components
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const showFooter = !["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {showFooter && <Nav />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default AppLayout;
