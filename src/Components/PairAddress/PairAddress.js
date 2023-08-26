import { useEffect, useState } from "react";
import Card from "../Common/Card";
import Search from "../Common/Search";

const PairAddress = () => {

    const [tokenData, setTokenData] = useState([]);

    console.log(tokenData[0]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch('https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae');
        const json = await data?.json();
        setTokenData(json.pairs);
    }

    return(
        <div className="base-container">
            <div className="top-bar">
                <Search />
                <button className="rectangle-18">Connect</button>
            </div>
            <div className="text-wrapper-5">Pair Address</div>
            {tokenData == undefined ? ("")
            :(<Card tokenData={tokenData} />)
            }
        </div>
    )
}

export default PairAddress;