import React from "react";
import ShowDataItem from "./ShowDataItem";

const ShowData = ({ prevSearchedData }) => {
  // console.log(searchedData);

  const element = prevSearchedData.map((data) => (
    <ShowDataItem key={data.id} item={data} />
  ));
  return <div className="data-container">{element}</div>;
};

export default ShowData;
