import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning.example) {
    return (
      <div className="Meaning">
        <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
        <p className="definition">
          {props.meaning.definition}
          <br />
          <div className="example">
            <em>"{props.meaning.example}"</em>
          </div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
        <p className="definition">
          {props.meaning.definition}
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    );
  }
}
