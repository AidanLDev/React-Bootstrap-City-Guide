import React, { useContext } from 'react';
import { InfoContext } from '../context';
import ReviewCard from './ReviewCard';

export default function Reviews() {
  const infoValues = useContext(InfoContext);
  return (
    <div>
      {infoValues.reviews.map((person) => (
        <ReviewCard key={person.id} person={person} />
      ))}
    </div>
  );
}
