import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <section className="my-5 py 5">
      <div className="container">
        <div className="well well-sm">
          <h3>
            <strong>Our Location</strong>
          </h3>
        </div>

        <div className="row">
          <div className="col md-7">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37842.30716502561!2d-2.3431421953909277!3d53.644400971340396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba2d89f9e8de9%3A0xd4383df76f14931f!2sRamsbottom%2C%20Bury%2C%20UK!5e0!3m2!1sen!2sus!4v1674242370834!5m2!1sen!2sus"
              width="640"
              height="480"
              loading="lazy"
              style={{
                border: "0",
                width: "100%",
                height: "315px",
                frameborder: "0",
              }}
              allowFullScreen
            ></iframe>
          </div>

          {/* Form */}
          <div className="col-md-5">
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Number"
                />
              </div>
              <textarea
                className="form-control"
                cols="25"
                rows="3"
                placeholder="Message"
              />
              <Link className="btn btn-outline-primary text-uppercase mt-2">
                <i className="fab fa-telegram-plane" />
                &nbsp; Send
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
