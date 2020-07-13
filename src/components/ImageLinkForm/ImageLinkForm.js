import React from "react";

import "./ImageLinkForm.css";

const ImageLinkForm = ({ onPictureSubmit, onInputChange, value }) => {
  return (
    <div className='searchContainer'>
      <label className='inputLabel' htmlFor='text'>
        BildURL
      </label>
      <div className='InputWrap'>
        <input
          type='text'
          onChange={onInputChange}
          value={value}
          className='textInput'
        />
        <button onClick={onPictureSubmit} className='submitButton'>
          Sök
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
