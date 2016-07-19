import React from 'react';
import {Link, IndexLink} from 'react-router';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <section className="rw-wrapper">
          <h1 className="rw-sentence">
            <span>Fashion &amp; Beauty</span>
            <div className="rw-words rw-words-1">
              <span>Beautiful Designs</span>
              <span>Sed ut perspiciatis</span>
              <span>Totam rem aperiam</span>
              <span>Nemo enim ipsam</span>
              <span>Temporibus autem</span>
              <span>intelligent systems</span>
            </div>
            <div className="rw-words rw-words-2">
              <span>We denounce with right</span>
              <span>But in certain circum</span>
              <span>Sed ut perspiciatis unde</span>
              <span>There are many variation</span>
              <span>The generated Lorem Ipsum</span>
              <span>Excepteur sint occaecat</span>
            </div>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Banner;
