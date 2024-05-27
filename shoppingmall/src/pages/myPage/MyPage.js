import { useEffect, useState } from "react";
// components
import ContentLayout from "../../components/commom/ContentLayout";
import Profile from "../../components/myPage/Profile";
import Info from "../../components/myPage/Info";
import MyDealList from "../../components/myPage/MyDealList";

const MyPage = () => {
  const userId = 15;
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!userId) return;

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  return (
    <ContentLayout title={"마이페이지"} width="800px">
      <Profile userInfo={userInfo} />
      <Info userInfo={userInfo} />
      <MyDealList />
    </ContentLayout>
  );
};

export default MyPage;
