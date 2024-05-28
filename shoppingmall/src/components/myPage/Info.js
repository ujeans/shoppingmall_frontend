import styled from "styled-components";

const Info = ({ userInfo }) => {
  return (
    <Container>
      <Wrapper>
        <InfoTitle>이메일</InfoTitle>
        <InfoText>{userInfo.email}</InfoText>
      </Wrapper>
      <Wrapper>
        <InfoTitle>주소</InfoTitle>
        <InfoText>{userInfo.user_addr}</InfoText>
      </Wrapper>
      <Wrapper>
        <InfoTitle>전화번호</InfoTitle>
        <InfoText>{userInfo.user_phone}</InfoText>
      </Wrapper>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 644px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
`;

const InfoText = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: 1px solid ${props => props.theme.border};
  color: #b1b5b9;
`;
