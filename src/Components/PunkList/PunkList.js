import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./punkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, idx) => (
        <div
          onClick={() => {
            setSelectedPunk(punk.token_id);
            console.log(punk, punk.token_id);
          }}
        >
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
