import React from 'react';
import Card from '../components/Card.jsx';

function MyExchange() {
  return (
    <div className="content">
      <div className="header-container">
        <h1>This website is about my exchange in Japan</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo. Aliquam vestibulum nibh nec fermentum ornare. Aenean fermentum et erat eget ultricies. Curabitur justo enim, sagittis rhoncus mollis vitae, blandit eget velit. Mauris id vehicula enim.</p>
      </div>
      <div className="secondary-container">
        <h2>The duration of my exchange is chopped into chunks</h2>
        <Card />
      </div>
    </div>
  );
}

export default MyExchange;