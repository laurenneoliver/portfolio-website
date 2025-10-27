import React from 'react';
import './styles/Banner.css';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: "url('/images/banner_background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0%',
  };

  return (
    <div className="banner" style={bannerStyle}>
      <article>
        <h1>Welcome to my website!</h1>
        <p>Please take your time to explore and learn more about me both personally and professionally.</p>
      </article>
      <div className="side-profile">
        {/* Profile Picture */}
        <div className="profile-image"></div>
        {/* Overlay GIF */}
        <img
          className="overlay-gif"
          src="/images/circle_gif.gif"
          alt="Profile Animation"
        />
      </div>
    </div>
  );
};

export default Banner;
