import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./punkList.css";

const PunkList = ({ punkListData }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, idx) => (
        <div key={idx}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
