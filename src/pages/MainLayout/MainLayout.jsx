import Header from "components/MainLayout/Header/Header";
import { MainContainer } from "./MainLayout.styled";
import Sidebar from "components/MainLayout/SideBar/SideBar";

const MainLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Sidebar/>
    </MainContainer>
  )
};

export default MainLayout;
