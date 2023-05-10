import React from "react";

export default function VisitsTitle(props) {
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  let plural = props.visitorsCount > 1 ? "s" : "";
  let dateString = new Date().toLocaleDateString("fr-FR", options);
  dateString = dateString.replace(/^\w/, (c) => c.toLocaleUpperCase());
  return (
    <div className="font-sans text-3xl text-blue-600 font-bold pb-10">
      {dateString} :{" "}
      {props.visitorsCount === 0 ? "Aucun" : props.visitorsCount} visiteur
      {plural} présent{plural}
    </div>
  );
}


