import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning.example) {
    return (
      <div className="Meaning">
        <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
        <p className="text-capitalize definition">
          {props.meaning.definition}
          <br />
          <em>"{props.meaning.example}"</em>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
        <p className="text-capitalize definition">
          {props.meaning.definition}
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    );
  }
}
