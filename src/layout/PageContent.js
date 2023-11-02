const PageContent = (props) => {
  const { pictureData } = props;
  return (
    <div className="page-content">
      <h3>{pictureData.title}</h3>
      <img id="apod" src={pictureData.hdurl} alt="astronomy picture of the day"/>
      <span>{pictureData.date}</span>
      <p>{pictureData.explanation}</p>
    </div>
  );
};

export default PageContent;
