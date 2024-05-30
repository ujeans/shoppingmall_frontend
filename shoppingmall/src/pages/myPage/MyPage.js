// components
import ContentLayout from "../../components/commom/ContentLayout";
import Profile from "../../components/myPage/Profile";
import Info from "../../components/myPage/Info";
import MyDealList from "../../components/myPage/MyDealList";
// hooks
import useFetchData from "../../hooks/useFetchData";

const MyPage = () => {
  const userId = localStorage.getItem("user_Id");
  const userUrl = `${process.env.REACT_APP_API_URL}/users/${userId}`;

  const { data: userInfo, loading, error } = useFetchData(userUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ContentLayout title={"마이페이지"} width="800px">
      <Profile userInfo={userInfo} />
      <Info userInfo={userInfo} />
      <MyDealList />
    </ContentLayout>
  );
};

export default MyPage;
