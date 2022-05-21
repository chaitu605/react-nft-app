import "./App.css";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./Components/PunkList/PunkList";
import Main from "./Components/Main/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  console.log("see", selectedPunk);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x1D27ce0b9485d63033Dc8568690C587C00FA0a06&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets.reverse());
    };
    getMyNfts();
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        {punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
