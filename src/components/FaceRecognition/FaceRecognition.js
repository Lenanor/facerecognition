import React from "react";

import "./FaceRecognition.css";

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className='photoContainer'>
      <div className='photoWrapper'>
        <img id='faceRecognitionPhoto' src={imgUrl} alt='' />
        <div
          className='boundingBox'
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
