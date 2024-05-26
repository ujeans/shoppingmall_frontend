import styled from "styled-components";
// assets
import xCircle from "../../../assets/x-circle.svg";

const Info = ({ product }) => {
  return (
    <Container>
      <Wrapper>
        <Image />
        <InfoBox>
          <Nickname>{product.user}</Nickname>
          <Name>{product.name}</Name>
          <Price>{product.price}원</Price>
        </InfoBox>
      </Wrapper>
      <Icon src={xCircle} />
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 53%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.border};
`;

const Wrapper = styled.div`
  display: flex;
  margin: 25px 0;
  margin-right: auto;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  background-color: aliceblue;
`;

const InfoBox = styled.div`
  margin-left: 15px;
`;

const Nickname = styled.div`
  width: fit-content;
  margin-bottom: 10px;
  font-size: 12px;
  border-bottom: 1px solid black;
`;

const Name = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 12px;
`;

const Icon = styled.img`
  width: 20px;

  margin: 25px 15px 0 0;
  margin-bottom: auto;
  cursor: pointer;
`;
