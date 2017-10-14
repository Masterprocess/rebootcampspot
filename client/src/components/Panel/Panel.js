import React from 'react';
import './Panel.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Panel = () => (
  <div className="panel-image">
    <img className="responsive-img" src="/img/news.jpg" alt="A bunch of stock images of the news"/>
  </div>
);

export default Panel;
