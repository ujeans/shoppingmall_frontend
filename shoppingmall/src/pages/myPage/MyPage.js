import styled from "styled-components";
// assets
import LeftArrowIcon from "../../assets/LeftArrow.svg";
import profile from "../../assets/profile.svg";
import salesDetails from "../../assets/salesDetails.svg";
import cart from "../../assets/cart.svg";

const MyPage = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <ArrowIcon src={LeftArrowIcon} />
          <Title>마이페이지</Title>
        </Top>
        <ProfileInfoWrapper>
          <Profile>
            <ProfileLeftBox>
              <ProfileImg src={profile} />
              <NickName>사용자이름</NickName>
            </ProfileLeftBox>
            <EditBtn>사진 변경</EditBtn>
          </Profile>
          <Info>
            <InfoTitle>이메일</InfoTitle>
            <InfoText>2222@gmail.com</InfoText>
          </Info>
          <Info>
            <InfoTitle>주소</InfoTitle>
            <InfoText>서울시 성북구</InfoText>
          </Info>
          <Info>
            <InfoTitle>전화번호</InfoTitle>
            <InfoText>000-0000-0000</InfoText>
          </Info>
          <MyDealWrapper>
            <MyDealTitle>나의 거래</MyDealTitle>
            <MyDealBox>
              <Icon src={salesDetails}></Icon>
              <ListTitle>판매 내역</ListTitle>
            </MyDealBox>
            <MyDealBox>
              <Icon src={cart}></Icon>
              <ListTitle>장바구니</ListTitle>
            </MyDealBox>
          </MyDealWrapper>
        </ProfileInfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 800px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const ArrowIcon = styled.img`
  cursor: pointer;
`;

const Title = styled.div`
  margin: auto;
  font-size: 24px;
  font-weight: bold;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
`;

const Profile = styled.div`
  width: 600px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 0 20px;
  border-radius: 15px;
  background-color: #f4f4f4;
`;

const ProfileLeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  margin-right: 20px;
`;

const NickName = styled.div``;

const EditBtn = styled.button`
  padding: 10px 22px;
  border: none;
  border-radius: 5px;
  background-color: #eb4646;
  color: white;
  cursor: pointer;
`;

const Info = styled.div`
  width: 644px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  border-radius: 10px;
  border: 1px solid #d1d4d8;
  color: #b1b5b9;
`;

const MyDealWrapper = styled.div`
  width: 644px;
  margin-top: 40px;
`;

const MyDealTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MyDealBox = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d4d8;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const ListTitle = styled.div`
  cursor: pointer;
`;
