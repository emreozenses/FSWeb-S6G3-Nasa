

const PageContent = (props) => {
  const { pictureData,date,changeHandler } = props;

  
  return (
    <div className="page-content">
        <h4>{pictureData.title}</h4>
        <input 
        type="date"
        name="tarih"
        value={date}
        onChange={changeHandler}/>
      <div className="page-content-main">
        <img id="apod" src={pictureData.hdurl} alt="apod" />

        <p id="exp">{pictureData.explanation}</p>
      </div>
        <span>{pictureData.date}</span>
    </div>
  );
};

export default PageContent;
