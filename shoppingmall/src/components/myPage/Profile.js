import styled from "styled-components";
// assets
import profile from "../../assets/profile.svg";
// styles
import { BlackBtn } from "../../style/CommonStyles";

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileLeftBox>
          <ProfileImg src={profile} />
          <NickName>사용자이름</NickName>
        </ProfileLeftBox>
        <BlackBtn padding="10px 25px">사진 변경</BlackBtn>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 20px;
  background-color: ${props => props.theme.grayBgColor};
`;

const ProfileLeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  margin-right: 20px;
`;

const NickName = styled.div``;
