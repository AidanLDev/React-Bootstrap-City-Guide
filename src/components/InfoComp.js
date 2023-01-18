import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../context';

export default function Info(props) {
  const infoContext = useContext(InfoContext);
  const { headerTitle, img, headerSubTitle, headerText, id } = props.item;
  return (
    <>
      <div className='col-10 col-lg-4 mx-auto mb-5'>
        <div className='card' style={{ width: '18rem' }}>
          <img src={img} alt={headerTitle} className='card-img-top' />
          <div className='card-body'>
            <h3 className='card-title text-uppercase'>{headerTitle}</h3>
            <h5 className='card-title'>{headerSubTitle}</h5>
            <p className='card-text'>{headerText}</p>
            <Link
              to='/details'
              className='btn btn-outline-primary text-uppercase'
              onClick={() => infoContext.handleDetail(id)}
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
