import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const moveToHome = () => navigate("/");
  const moveToSignup = () => navigate("/signup");
  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToMypage = () => {
    navigate("/mypage");
  };

  const moveToCart = () => {
    navigate("/cart");
  };

  return { moveToHome, moveToSignup, moveToLogin, moveToMypage, moveToCart };
};

export default Navigation;
//
