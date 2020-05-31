import React, { useContext } from 'react';
import NewsCard from '../NewsCard';
import { InfoContext } from '../../context';

export default function News() {
  const infoValues = useContext(InfoContext);
  return infoValues.news.map((item) => <NewsCard key={item.id} item={item} />);
}
