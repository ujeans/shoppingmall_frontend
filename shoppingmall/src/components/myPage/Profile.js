import styled from "styled-components";
// assets
import profile from "../../assets/profile.svg";
// styles
import { BlackBtn } from "../../style/CommonStyles";

const Profile = ({ userInfo }) => {
  const handleImageError = e => {
    e.target.src = profile;
  };

  return (
    <Container>
      <Wrapper>
        <ProfileLeftBox>
          <ProfileImg
            src={`data:image/jpeg;base64,${userInfo.user_img}`}
            alt="Profile Image"
            onError={handleImageError}
          />
          <NickName>{userInfo.user_nickname}</NickName>
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
  width: 70px;
  height: 70px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const NickName = styled.div``;
