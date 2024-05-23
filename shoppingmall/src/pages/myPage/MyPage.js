// components
import ContentLayout from "../../components/commom/ContentLayout";
import Profile from "../../components/myPage/Profile";
import Info from "../../components/myPage/Info";
import MyDealList from "../../components/myPage/MyDealList";

const MyPage = () => {
  return (
    <ContentLayout title={"마이페이지"}>
      <Profile />
      <Info />
      <MyDealList />
    </ContentLayout>
  );
};

export default MyPage;
