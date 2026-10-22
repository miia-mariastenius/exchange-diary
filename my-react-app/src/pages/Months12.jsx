import React from 'react';
import Accordion from '../components/Accordion.jsx';

function Months12() {
  return (
    <div className="content">
      <div className="header-container">
        <h1>Months 1-2</h1>
        <p className="text-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.</p>
        <div className="accordion-container">
         <Accordion />
        </div>
      </div>
      <div className="secondary-container">
        <div className="blog-container">
          <h2 className="blog-title">Secondary Content</h2>
          <div className="blog-item">
            <img src="https://via.placeholder.com/300" alt="Blog Post" />
            <div className="blog-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.

            Nulla vitae tortor quam. Nunc et urna sem. Donec sit amet facilisis nulla. Curabitur leo augue, semper eget leo a, scelerisque mollis neque. Vestibulum pellentesque pretium rhoncus. Donec nec eleifend elit, ac laoreet nulla. Vestibulum scelerisque mi congue quam gravida vulputate. Nunc lorem dolor, mollis ut tortor sed, condimentum mattis urna. In hac habitasse platea dictumst. Duis eget quam tortor. Praesent ultrices consectetur interdum. Proin lobortis sapien a cursus convallis. Nam faucibus nunc quis justo sodales, et consequat tellus venenatis. Phasellus tempus enim sed metus tincidunt auctor. Donec at dui ornare, consequat nisi mollis, blandit lacus. Cras scelerisque risus a enim tincidunt, eget sodales ligula viverra.</p>
            </div>
          </div>
        </div>
        <div className="blog-secondary-container light-text">
          <div className="blog-item blog-item-secondary">
            <img src="https://via.placeholder.com/300" alt="Blog Post" />
            <div className="blog-content">
              <h3>Blog Post Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.

            Nulla vitae tortor quam. Nunc et urna sem. Donec sit amet facilisis nulla. Curabitur leo augue, semper eget leo a, scelerisque mollis neque. Vestibulum pellentesque pretium rhoncus. Donec nec eleifend elit, ac laoreet nulla. Vestibulum scelerisque mi congue quam gravida vulputate. Nunc lorem dolor, mollis ut tortor sed, condimentum mattis urna. In hac habitasse platea dictumst. Duis eget quam tortor. Praesent ultrices consectetur interdum. Proin lobortis sapien a cursus convallis. Nam faucibus nunc quis justo sodales, et consequat tellus venenatis. Phasellus tempus enim sed metus tincidunt auctor. Donec at dui ornare, consequat nisi mollis, blandit lacus. Cras scelerisque risus a enim tincidunt, eget sodales ligula viverra.</p>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-item">
            <img src="https://via.placeholder.com/300" alt="Blog Post" />
            <div className="blog-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.

            Nulla vitae tortor quam. Nunc et urna sem. Donec sit amet facilisis nulla. Curabitur leo augue, semper eget leo a, scelerisque mollis neque. Vestibulum pellentesque pretium rhoncus. Donec nec eleifend elit, ac laoreet nulla. Vestibulum scelerisque mi congue quam gravida vulputate. Nunc lorem dolor, mollis ut tortor sed, condimentum mattis urna. In hac habitasse platea dictumst. Duis eget quam tortor. Praesent ultrices consectetur interdum. Proin lobortis sapien a cursus convallis. Nam faucibus nunc quis justo sodales, et consequat tellus venenatis. Phasellus tempus enim sed metus tincidunt auctor. Donec at dui ornare, consequat nisi mollis, blandit lacus. Cras scelerisque risus a enim tincidunt, eget sodales ligula viverra.</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="blog-prev-button" type="button">Previous adventures</button>
          <button className="blog-next-button" type="button">Next adventures</button>
        </div>
      </div>
    </div>
  );
}

export default Months12;