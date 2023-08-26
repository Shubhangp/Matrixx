const Card = ({tokenData}) => {
    // const date = new Date(tokenData[0].pairCreatedAt);

    // const year = date.getFullYear();
    // const month = date.getMonth() + 1; // Months are zero-indexed
    // const day = date.getDate();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    // const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
    // console.log(formattedDate);
    return(
        <div className="main_container">
           {tokenData.map((card)=>(
            <div className="card_container">
                <div className="single_card relative" >
                    <div className="rectangle-6" />
                    <div className="ellipse-11 absolute flex content-center item-center bottom-1 right-1 ">
                        <img
                            className="ic-outline-info"
                            alt="Ic outline info"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/ic-outline-info@2x.png"
                        />
                    </div>
                    <div className="text-wra">
                        <div className="text-wrapper-6">Basic Info</div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Pair created at</div>
                            <div className="text-wrapper-27">{card.pairCreatedAt}</div>
                        </div>
                        <div className="card-main-text mt-1">
                            <div className="text-wrapper-9">Symbol</div>
                            <div className="text-wrapper-27">{card.symbol}</div>
                        </div>
                        <div className="card-main-text mt-1">
                            <div className="text-wrapper-9">Dex ID</div>
                            <div className="text-wrapper-27">{card.dexId}</div>
                        </div>
                        <div className="card-main-text mt-1">
                            <div className="text-wrapper-9">Pair Address</div>
                            <div className="text-wrapper-27 break-words">{card.pairAddress}</div>
                        </div>
                    </div>
                </div>
                <div className="single_card relative" >
                    <div className="rectangle-9" />
                    <div className="ellipse-11 absolute flex content-center item-center bottom-1 right-1 ">
                        <img
                            className="ic-outline-info"
                            alt="Material symbols"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/material-symbols-token-outline@2x.png"
                        />
                    </div>
                    <div className="text-wra">
                        <div className="text-wrapper-6">Base Token</div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Name</div>
                            <div className="text-wrapper-27">{card.baseToken.name}</div>
                        </div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Symbol</div>
                            <div className="text-wrapper-27">{card.baseToken.symbol}</div>
                        </div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Address</div>
                            <div className="text-wrapper-27 break-words">{card.baseToken.address}</div>
                        </div>
                    </div>
                </div>
                <div className="single_card relative" >
                    <div className="rectangle-12" />
                    <div className="ellipse-11 absolute flex content-center item-center bottom-1 right-1 ">
                        <img
                            className="ic-outline-info"
                            alt="Material symbols"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/material-symbols-token-outline@2x.png"
                        />
                    </div>
                    <div className="text-wra">
                        <div className="text-wrapper-6">Quote Token</div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Name</div>
                            <div className="text-wrapper-27">{card.quoteToken.name}</div>
                        </div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Symbol</div>
                            <div className="text-wrapper-27">{card.quoteToken.symbol}</div>
                        </div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Address</div>
                        </div>
                    </div>
                </div>
                <div className="single_card relative" >
                    <div className="rectangle-15" />
                    <div className="ellipse-11 absolute flex content-center item-center bottom-1 right-1 ">
                        <img
                            className="ic-outline-info"
                            alt="Pepicons pop dollar"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/pepicons-pop-dollar@2x.png"
                        />
                    </div>
                    <div className="text-wra">
                        <div className="text-wrapper-6">Price</div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Price Native</div>
                            <div className="text-wrapper-27">{card.priceNative}</div>
                        </div>
                        <div className="card-main-text">
                            <div className="text-wrapper-9">Price USD</div>
                            <div className="text-wrapper-27">{card.priceUsd}</div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Card;