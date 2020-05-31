import React, { useContext } from 'react';
import { InfoContext } from '../../context';
import styled from 'styled-components';
import Reviews from '../Reviews';

const DetailsHeader = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  text-transform: uppercase;
  height: 70vh;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    color: var(--mainDark);
    font-size: 1.875rem;
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;

export default function Details() {
  const contextValue = useContext(InfoContext);
  console.log(contextValue);
  const {
    description,
    headerSubTitle,
    headerText,
    headerTitle,
    img,
    maps,
    title,
  } = contextValue.detailInfo;
  return (
    <>
      <DetailsHeader className='container-fluid align-items-center'>
        <h1 className='display-1 font-weight-bold'>{headerTitle}</h1>
        <h4 className='display-5'>{headerSubTitle}</h4>
        <p>{headerText}</p>

        {/* Socials */}
        <div className='contaienr mt-5'>
          <div className='row justify-content-center'>
            <div className='col-2'>
              <i className='fab fa-facebook-f' />
            </div>
            <div className='col-2'>
              <i className='fab fa-twitter' />
            </div>
            <div className='col-2'>
              <i className='fab fa-google-plus' />
            </div>
            <div className='col-2'>
              <i className='fab fa-reddit' />
            </div>
            <div className='col-2'>
              <i className='fab fa-whatsapp' />
            </div>
            <div className='col-2'>
              <i className='fab fa-facebook-messenger' />
            </div>
          </div>
        </div>
      </DetailsHeader>

      {/* Tab Links */}
      <div className='container'>
        <ul className='nav nav-tabs'>
          {/* About Place */}
          <li className='nav-item'>
            <a
              href='#aboutPlace'
              className='nav-link active'
              role='tab'
              data-toggle='tab'
            >
              About
            </a>
          </li>

          {/* Reviews */}
          <li className='nav-item'>
            <a
              href='#reviews'
              className='nav-link'
              role='tab'
              data-toggle='tab'
            >
              Reviews
            </a>
          </li>

          {/* Map */}
          <li className='nav-item'>
            <a href='#map' className='nav-link' role='tab' data-toggle='tab'>
              Map
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className='tab-content mb-5'>
          {/* About tab */}
          <div
            id='aboutPlace'
            className='tab-pane in active text-center mt-5'
            role='tabpanel'
          >
            <h2 className='mb-3'>{title}</h2>
            <p>{description}</p>
            <img
              src={img}
              alt={title}
              className='img img-thumbnail img-fluid'
            />
          </div>

          {/* Reviews tab */}
          <div className='tab-pane' id='reviews' role='tabpanel'>
            <Reviews />
          </div>

          {/* Map tab */}
          <div className='tab-pane' id='map' role='tabpanel'>
            <iframe
              src={maps}
              style={{
                border: '0',
                height: '28.125rem',
                width: '100%',
                frameborder: '0',
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
