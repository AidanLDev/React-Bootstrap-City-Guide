import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }

  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
        <div className='container'>
          <div className='row'>
            {/* Column 1 */}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem Ipsum</h4>
              <ul className='list-unstyled'>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem Ipsum</h4>
              <ul className='list-unstyled'>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem Ipsum</h4>
              <ul className='list-unstyled'>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem Ipsum</h4>
              <ul className='list-unstyled'>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='/'>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-bottom'>
            <p className='text-xs-center'>
              &copy;{new Date().getFullYear()} ~ React Bootstrap City Guide
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
