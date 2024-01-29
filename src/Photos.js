import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    const limitedPhotos = props.photos.slice(0, 9);
    return (
      <section className="Photos">
        <div className="row">
          {limitedPhotos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
