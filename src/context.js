import React, { useState } from 'react';
import { placeInfo, reviews, detailInfo, news } from './data';

const InfoContext = React.createContext();

const InfoProvider = (props) => {
  const [placeInfoState, setplaceInfoState] = useState(placeInfo);
  const [reviewsState, setreviewsState] = useState(reviews);
  const [detailInfoState, setdetailInfoState] = useState(detailInfo);
  const [newsState, setNewsState] = useState(news);
  const [mapsState, setMapsState] = useState('');
  const [headerTitleState, setHeaderTitleState] = useState('');
  const [subtitleState, setSubtitleState] = useState('');
  const [headerTextState, setheaderTextState] = useState('');
  const [nameState, setNameState] = useState('');
  const [avatarState, setAvatarState] = useState('');
  const [commentState, setCommentState] = useState('');
  return (
    <InfoContext.Provider
      value={{
        info: placeInfoState,
        reviews: reviewsState,
        detailInfo: detailInfoState,
        news: newsState,
        maps: mapsState,
        headerTitle: headerTitleState,
        headerSubTitle: subtitleState,
        headerText: headerTextState,
        name: nameState,
        avatar: avatarState,
        comment: commentState,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

// const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoContext };
