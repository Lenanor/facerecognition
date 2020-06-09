import React from "react";

import "./ImageLinkForm.css";

const ImageLinkForm = ({ onPictureSubmit, onInputChange, value }) => {
  return (
    <div>
      <div className='urlInput-wrap'>
        <input
          type='text'
          onChange={onInputChange}
          value={value}
          placeholder='Skriv in url till bilden här'
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
