import React from "react";
import { useParams } from "react-router-dom";

function TeamDetails() {
  const params = useParams();

  return (
    <div>
      <h1>{params.slug}</h1>
      <h1>{params.slug}</h1>
      <h1>{params.slug}</h1>
    </div>
  );
}

export default TeamDetails;
