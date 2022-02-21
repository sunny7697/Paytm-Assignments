import React from "react";
import ShowDataItem from "./ShowDataItem";

const ShowData = ({ searchedData }) => {
  // console.log(searchedData);

  const element = searchedData.map((data) => (
    <ShowDataItem key={data.id} item={data} />
  ));
  return <div className="data-container">{element}</div>;
};

export default ShowData;
