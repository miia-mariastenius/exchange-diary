function Months12() {
  return (
    <div className="content">
      <div className="header-container">
        <h1>Months 1-2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.</p>
        <div className="accordion-container">
          <div className="accordion-item">
            <div className="accordion-header">
              <h2>Title</h2>
            </div>
            <div className="accordion-content">
              <p>This is the content for accordion.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="secondary-container">
        <div className="blog-container">
          <h2 className="blog-title">Secondary Content</h2>
          <div className="blog-item">
            <img src="https://via.placeholder.com/300" alt="Blog Post" />
            <div className="blog-content">
              <p>This is the content for the blog post.</p>
            </div>
          </div>
        </div>
        <div className="blog-secondary-container light-text">
          <h2 className="blog-title light-text">Secondary Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo.</p>
          <div className="blog-item">
            <img src="https://via.placeholder.com/300" alt="Blog Post" />
            <div className="blog-content">
              <h3>Blog Post Title</h3>
              <p>This is the content for the blog post.</p>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <h2 className="blog-title">Secondary Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo.</p>
          <div className="blog-item">
            <img src="https://via.placeholder.com/300" alt="Blog Post" />
            <div className="blog-content">

              <p>This is the content for the blog post.</p>
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