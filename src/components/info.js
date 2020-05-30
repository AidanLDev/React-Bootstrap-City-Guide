import React, { useContext } from 'react';
import { InfoContext } from '../../context';

export default function Info() {
  const contextValue = useContext(InfoContext);
  console.log(contextValue);
  return (
    <>
      <div className='col-10 col-lg-4 mx-auto mb-5'>
        <div className='card' style={{ width: '18rem' }}></div>
        {/* <img src={img} alt={headerTitle} className='card-img-top' /> */}
        <div className='card-body'>
          {/* <h3 className='card-title text-uppercase'>{headerTitle}</h3> */}
          {/* <h5 className='card-title'>{headerSubTitle}</h5> */}
        </div>
      </div>
    </>
  );
}
