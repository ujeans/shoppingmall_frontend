import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// components
import OrderDetailsList from "./OrderDetailsList";
// styles
import { WhiteBtn } from "../../style/CommonStyles";

const FilledOrder = ({ itemsToDisplay }) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/");
  };

  return (
    <>
      <OrderDetailsList orderItems={itemsToDisplay} />
      <BtnContainer>
        <Btn padding="12px 20px" fontSize="20px" onClick={navigateToPage}>
          CONTINUE SHOPPING
        </Btn>
      </BtnContainer>
    </>
  );
};

export default FilledOrder;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const Btn = styled(WhiteBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
