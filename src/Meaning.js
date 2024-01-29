import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      <p className="text-capitalize">
        {props.meaning.definition}
        <br />
        <strong>Example: </strong>
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
