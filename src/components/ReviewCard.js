import React from 'react';

export default function ReviewCard(props) {
  const { avatar, comment, name } = props.person;
  return (
    <div className='media mt-5'>
      <img
        src={avatar}
        alt={name}
        style={{ width: '40px' }}
        className='mr-3'
      ></img>
      <div className='media-body'>
        <h5 className='mt-0'>{name}</h5>
        <p>{comment}</p>
      </div>
    </div>
  );
}
