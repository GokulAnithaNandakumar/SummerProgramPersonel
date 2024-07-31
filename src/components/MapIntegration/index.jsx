import React from 'react';
import "./mapintegration.css";
import Button from '../Common/Button';

function MapIntegration() {
  return (
    <div>
      <div className="container">
        <div className="innerwrap">
          <section className="section1 clearfix">
            <div className="textcenter">
              <span className="shtext">Contact Us</span>
              <span className="seperator"></span>
              <h1>Drop Us a Mail</h1>
            </div>
          </section>
          <section className="section2 clearfix">
            <div className="col2 column1 first">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.354641611022!2d79.00088026952707!3d12.966178297577757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad6a94e544ed1b%3A0xc58599e131236d98!2sThuthithangal%2C%20Tamil%20Nadu%20632204!5e0!3m2!1sen!2sin!4v1717154273084!5m2!1sen!2sin" 
                width="600" 
                height="600" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col2 column2 last">
              <div className="sec2innercont">
                <div className="sec2addr">
                  <p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
                  <p><span className="collig">Phone :</span> +91 976885083</p>
                  <p><span className="collig">Email :</span> vivek.mengu016@gmail.com</p>
                  <p><span className="collig">Fax :</span> +91 9768850839</p>
                </div>
              </div>
              <div className="sec2contactform">
                <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                <form action="">
                  <div className="clearfix">
                    <input className="col2 first" type="text" placeholder="FullName" />
                    <input className="col2 last" type="text" placeholder="Contact Number" />
                  </div>
                  <div className="clearfix">
                    <input className="col2 first" type="email" placeholder="Email" />
                    <input className="col2 last" type="text" placeholder="Subject" />
                  </div>
                  <div className="clearfix">
                    <textarea name="textarea" id="" cols="30" rows="7" placeholder='Your message here...'></textarea>
                  </div>
                  <div className="clearfix">
                  <Button buttonText="Send" />
                    
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MapIntegration;
