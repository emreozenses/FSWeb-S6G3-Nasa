import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const PageContent = (props) => {
  const { pictureData, date, changeHandler } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === pictureData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? pictureData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div className="page-content">
      <input type="date" name="tarih" value={date} onChange={changeHandler} />
      <div className="page-content-main">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          
        >
          <CarouselIndicators
            items={pictureData}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {pictureData.map((item) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.url}
              >
                <h4>{item.title}</h4>
                <img id="apod" src={item.hdurl} alt="apod" />
                <p id="exp">{item.explanation}</p>
                <span>{item.date}</span>
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PageContent;
