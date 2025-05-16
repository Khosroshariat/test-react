import React from 'react'
import "./Bane.css"

function BackgroundTemp({ img }) {
    return (
      <figure className="background__wrappers">
        <img src={img} alt="" className="backgrounds"/>
      </figure>
    );
}

export default BackgroundTemp

