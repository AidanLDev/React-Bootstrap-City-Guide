import React from 'react';
import { Link } from 'react-router-dom';

export default function Contacts() {
  return (
    <section className='my-5 py 5'>
      <div className='container'>
        <div className='well well-sm'>
          <h3>
            <strong>Our Location</strong>
          </h3>
        </div>

        <div className='row'>
          <div className='col md-7'>
            <iframe
              title='Palembang'
              src='https://www.google.com/maps/d/u/0/embed?mid=1e_loiurGnCvz4FNZc4AfrJ55L4TV3YoY'
              width='640'
              height='480'
              style={{
                border: '0',
                width: '100%',
                height: '315px',
                frameborder: '0',
              }}
              allowFullScreen
            ></iframe>
          </div>

          {/* Form */}
          <div className='col-md-5'>
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <form>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='name'
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='email'
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='tel'
                  placeholder='Number'
                />
              </div>
              <textarea
                className='form-control'
                cols='25'
                rows='3'
                placeholder='Message'
              />
              <Link className='btn btn-outline-primary text-uppercase mt-2'>
                <i className='fab fa-telegram-plane' />
                &nbsp; Send
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
