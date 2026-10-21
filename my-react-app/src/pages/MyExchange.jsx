import React from 'react';
import Card from '../components/Card.jsx';

function MyExchange() {
  return (
    <div className="content">
      <div className="header-container">
        <h1>This website is about my exchange in Japan</h1>
        <p className="text-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo. Aliquam vestibulum nibh nec fermentum ornare. Aenean fermentum et erat eget ultricies. Curabitur justo enim, sagittis rhoncus mollis vitae, blandit eget velit. Mauris id vehicula enim.</p>
      </div>
      <div className="secondary-container">
        <div className="home-container">
          <h2>The duration of my exchange is chopped into chunks</h2>
          <div className="card-container">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="tertiary-container">
        <div className="contact-form">
          <h2 className="contact-title">Contact me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo. </p>
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <p className="required">Required</p>
            </div>
            <input type="text" id="name" name="name" required />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <p className="required">Required</p>
            </div>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="method">Preferred contact method:</label>
            <div className="radio-group">
              <input type="radio" id="method-none" name="contact-method" value="method-none" required checked="checked" />
              <label htmlFor="method-none">No preference</label><br />
              <input type="radio" id="method-email" name="contact-method" value="method-email" />
              <label htmlFor="method-email">Email</label><br />
              <input type="radio" id="method-phone" name="contact-method" value="method-phone" />
              <label htmlFor="method-phone">Phone</label>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <p className="required">Required</p>
            </div>
            <textarea id="message" name="message" required></textarea>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyExchange;