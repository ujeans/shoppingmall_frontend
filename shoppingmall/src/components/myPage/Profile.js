import styled from "styled-components";
// assets
import profile from "../../assets/profile.svg";

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileLeftBox>
          <ProfileImg src={profile} />
          <NickName>사용자이름</NickName>
        </ProfileLeftBox>
        <EditBtn>사진 변경</EditBtn>
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
