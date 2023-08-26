import { useEffect, useState } from "react";
import Card from "../Common/Card";
import Search from "../Common/Search";

const TokenAddress = () => {

    const [tokenData, setTokenData] = useState([]);

    console.log(tokenData[0]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch('https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
        const json = await data?.json();
        setTokenData(json.pairs);
    }

    return(
        <div className="base-container">
            <div className="top-bar">
                <Search />
                <button className="rectangle-18">Connect</button>
            </div>
            <div className="text-wrapper-5">Token Address</div>
            {tokenData == undefined ? ("")
            :(<Card tokenData={tokenData} />)
            }
        </div>
    )
}

export default TokenAddress;