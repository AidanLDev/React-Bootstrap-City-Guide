import React from 'react';

export default function Footer() {
  return (
    <div className='main-footer'>
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
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Lorem Ipsum</h4>
            <ul className='list-unstyled'>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Lorem Ipsum</h4>
            <ul className='list-unstyled'>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p class='text-xs-center'>
            &copy;{new Date().getFullYear()} ~ React Bootstrap City Guide
          </p>
        </div>
      </div>
    </div>
  );
}
