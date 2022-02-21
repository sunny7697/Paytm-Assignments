import React from "react";

const ShowDataItem = ({ item }) => {
  return (
    <div className="">
      <div className="item-container">
        <div className="item-header">
          <div className="item-id">
            <span className="title">id: </span> {item.id}
          </div>
          <div className="item-id">{item.email}</div>
        </div>
        <div className="item-name">
          <span className="title">Name: </span> {item.name}
        </div>
        <div className="item-body">
          <span className="title">Body: </span> {item.body}
        </div>
      </div>
    </div>
  );
};

export default ShowDataItem;
