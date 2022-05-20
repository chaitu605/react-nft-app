import "./App.css";
import CollectionCard from "./Components/CollectionCard/CollectionCard";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./Components/PunkList/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x1D27ce0b9485d63033Dc8568690C587C00FA0a06&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <PunkList punkListData={punkListData} />
      </div>
    </>
  );
}

export default App;
