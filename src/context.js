import React, { useState } from 'react';
import { placeInfo, reviews, detailInfo, news } from './data';

const InfoContext = React.createContext();

const InfoProvider = (props) => {
  const [placeInfoState, setplaceInfoState] = useState(placeInfo);
  const [reviewsState, setreviewsState] = useState(reviews);
  const [detailInfoState, setdetailInfoState] = useState(detailInfo);
  const [newsState, setNewsState] = useState(news);

  const getItem = (id) => {
    const item = placeInfoState.find((item) => item.id === id);
    return item;
  };

  const handleDetail = (id) => {
    const item = getItem(id);
    setdetailInfoState(item);
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
