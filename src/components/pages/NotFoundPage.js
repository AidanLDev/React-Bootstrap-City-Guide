import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ComponentNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .btn {
    margin-right: 10px;
  }
`;

export default function NotFoundPage() {
  return (
    <ComponentNotFound>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='error-template'>
              <h1>Page not found</h1>
              <h2>Error 404 Not Found</h2>
              <div className='error-details'>Sorry, an error occurred.</div>
              <div className='error-actions'>
                <Link to='/' className='btn btn-outline-primary btn-lg'>
                  <i className='fas fa-home' />
                  &nbsp;Back To Main
                </Link>
                <Link
                  to='/contacts'
                  className='btn btn-outline-secondary btn-lg'
                >
                  <i className='fas fa-envelope' />
                  &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentNotFound>
  );
}
