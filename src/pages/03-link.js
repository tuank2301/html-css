import React from "react";
import "./styles.css";

const Link = () => {
  return (
    <div>
      <h1 id='top'>Film Folk</h1>
      <h2>Festival Diary</h2>
      <p>
        Here are some of the film festivals we will be attending this year.
        <br />
        Please
        <a href='mailto:filmfolk@example.org' className='link-a'>
          {" "}
          contact us
        </a>{" "}
        if you would like more information.
      </p>
      <h3>January</h3>
      <p>
        <a href='http://www.sundance.org' className='text-decoration link-a'>
          Sundance Film Festival
        </a>
        <br />
        Park City, Utah, USA
        <br />
        20 - 30 January 2011
      </p>
      <h3>February</h3>
      <p>
        <a href='http://www.tropfest.com' className='text-decoration link-a'>
          Tropfest
        </a>
        <br />
        Sydney, Australia
        <br />
        20 February 2011
      </p>

      <p>
        <a href='about.html' className='text-decoration link-a'>
          About Film Folk
        </a>
      </p>
      <p>
        <a href='#top' className='text-decoration link-a'>
          Top of page
        </a>
      </p>
    </div>
  );
};

export default Link;
