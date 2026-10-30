import React from 'react';
import Card from '../components/Card.jsx';
import { diaryEntries } from '../components/Card.jsx';
import ContactForm from '../components/ContactForm.jsx';

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
            {diaryEntries.map((entry) => {
              return <Card
                photo={entry.photo}
                title={entry.title}
                text={entry.text}
                alt={entry.alt}
                buttonText={entry.buttonText}
                path={entry.path}
              />
            })}
          </div>
        </div>
      </div>
      <div className="tertiary-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default MyExchange;