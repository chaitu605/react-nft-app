import React, { useState, useEffect } from "react";
import "./main.css";
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  console.log(selectedPunk);
  console.log(punkListData);
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  //   console.log(selectedPunk, "hereeeee");
  //   console.log(punkListData[selectedPunk], "her2222222222222");
  //   console.log(activePunk.image_original_url, "here33");

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  console.log(activePunk);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt="PunkImage"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "white" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">.#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@Clever</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
