import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// assets
import LeftArrowIcon from "../../assets/LeftArrow.svg";

const ContentLayout = ({ children, title }) => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <ArrowIcon src={LeftArrowIcon} onClick={onCancel} />
          <Title>{title}</Title>
        </Top>
        {children}
      </Wrapper>
    </Container>
  );
};

export default ContentLayout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  width: 800px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

const ArrowIcon = styled.img`
  cursor: pointer;
`;

const Title = styled.div`
  margin: auto;
  font-size: 24px;
  font-weight: bold;
`;