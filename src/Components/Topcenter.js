import React from 'react';

const Topcenter = (props) => {
  const { backgroundImage, clicktext, para, data } = props;

  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Set background image size to cover
    height: '300px',
  };

  return (
    <div className="col-lg-6 textimg categories1">
      <div className="image-container" style={imageStyle}>
        <div className="image-content">
          <h2>{data}</h2>
          <p>{para}</p>
          <button className="btn btn-primary">{clicktext}</button>
        </div>
      </div>
    </div>
  );
}

export default Topcenter;
