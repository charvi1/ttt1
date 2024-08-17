// src/Home.js
import React from 'react';

const Home = () => (
  <div>
    <section className="section section1">
      <img className="paws" src="paws.png" alt="Paws" />
      <h1>Shop By Category</h1>
      <div className="category">
        <div className="items">
          <div className="category-items"><a href="#"><img src="icon1.jpg" alt="Dogs" /><p>Dogs</p></a></div>
          <div className="category-items"><a href="#"><img src="icon2.png" alt="Cats" /><p>Cats</p></a></div>
          <div className="category-items"><a href="#"><img src="icon3.png" alt="Small Pets" /><p>Small Pets</p></a></div>
          <div className="category-items"><a href="#"><img src="icon4.png" alt="Birds" /><p>Birds</p></a></div>
          <div className="category-items"><a href="#"><img src="icon5.png" alt="Others" /><p>Others</p></a></div>
        </div>
        <img className="rabbit" src="paws2.png" alt="Rabbit" />
      </div>
    </section>
    <section className="section section2">
      <h1>Why us?</h1>
      <div className="features">
        <img src="feature3.png" alt="Feature 3" />
        <div className="center"><img src="feature1.png" alt="Feature 1" /></div>
        <img src="feature2.png" alt="Feature 2" />
      </div>
      <img src="whyus.png" alt="Why Us" />
    </section>
    <section className="section3">
      <img src="footer.png" alt="Footer" />
    </section>
  </div>
);

export default Home;
