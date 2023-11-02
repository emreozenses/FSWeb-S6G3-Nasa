import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";

const Main = (props) => {
  return (
    <div className="main">
      <Header />
      <div className="page-body">
        <PageContent {...props}/>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Main;
