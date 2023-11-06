import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";

const Main = (props) => {
 
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    margin: 1% 10% 0.5% 10%;
    border: 0.5px solid rgb(247, 206, 206);
    border-radius: 5%;
    background-color: rgb(247, 206, 206);
  `;
  return (
    <MainDiv>
      <Header />
      <div className="page-body">
        <PageContent {...props} />
      </div>
      <Footer {...props} />
    </MainDiv>
  );
};

export default Main;
