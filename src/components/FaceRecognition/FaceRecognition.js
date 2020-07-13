import React from "react";

import "./FaceRecognition.css";

const FaceRecognition = ({ imgUrl, box }) => {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  return (
    <div className='photoContainer'>
      <div className='photoWrapper'>
        <img
          id='faceRecognitionPhoto'
          src={imgUrl}
          alt=''
          style={
            windowWidth > 600
              ? { width: "600px", height: "auto" }
              : { width: "320px", height: "auto" }
          }
        />
        <div
          className='boundingBox'
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
