import React from "react";

function DonerCard(props) {
  return (
    <div className="border rounded-xl bg-slate-700 text-white p-4 m-5 border-black hover:bg-slate-500">
      <h1>Name :{props.name}</h1>
      <h1>
        Age:
        {props.age}
      </h1>
      <h1>Blood Group :{props.bloodGroup}</h1>
    </div>
  );
}

export default DonerCard;
