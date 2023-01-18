import React, { useState } from 'react';
import { placeInfo, reviews, detailInfo, news } from './data';

const InfoContext = React.createContext();

const InfoProvider = (props) => {
  const [placeInfoState] = useState(placeInfo);
  const [reviewsState] = useState(reviews);
  const [detailInfoState, setDetailInfoState] = useState(detailInfo);
  const [newsState] = useState(news);

  const getItem = (id) => {
    const item = placeInfoState.find((item) => item.id === id);
    return item;
  };

  const handleDetail = (id) => {
    const item = getItem(id);
    setDetailInfoState(item);
  };

  return (
    <InfoContext.Provider
      value={{
        info: placeInfoState,
        reviews: reviewsState,
        detailInfo: detailInfoState,
        news: newsState,
        handleDetail,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

// const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoContext };
