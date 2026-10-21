function Card() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/300" alt="Card Image" />
      <div className="card-text">
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex. Aliquam erat volutpat. Aenean nec facilisis est. Proin tempus tincidunt dapibus. Class aptent taciti sociosqu ad litora torquent per </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
}

export default Card;