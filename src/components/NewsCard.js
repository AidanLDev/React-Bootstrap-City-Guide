import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {
  const { id, newsTitle, newsText } = props.item;
  return (
    <div className='card container mt-2 mb-3 p-5'>
      <div className='card-body'>
        <h5 key={id}>{newsTitle}</h5>
        <p className='card-text'>{newsText}</p>
        <Link to='/' className='card-link'>
          Read more >>
        </Link>
      </div>
    </div>
  );
}
