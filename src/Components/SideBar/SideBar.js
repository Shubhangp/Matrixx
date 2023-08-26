import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

  const [click, setClick] = useState(true);

  return(
      <div className="darkleft-side">
          <div className="overlap-group">
            <Link to="/" onClick={() => setClick(true)}>
              {click && <div className="rectangle-3" />}
              <div className="home-tab-active">
                <div className="text-wrapper">Token Address</div>
              </div>
              <img
                className="ic-baseline-token"
                alt="Ic baseline token"
                src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/ic-baseline-token@2x.png"
              />
            </Link>
            <Link to="/pair-address" onClick={() => setClick(false)}>
              {!click && <div className="rectangle-pair" />}
              <div className="explore-tab">
                <div className="text-wrapper-2">Pair Address</div>
                <img
                  className="fluent-pair"
                  alt="Fluent pair"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/fluent-pair-24-filled@2x.png"
                />
              </div>
            </Link>
            <div className="text-wrapper-3">NFTify</div>
          </div>
          <img
            className="vector"
            alt="Vector"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/vector-1@2x.png"
          />
          <img
            className="frame"
            alt="Frame"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e8c52252986c5d15a03836/releases/64e8c613cf0256120bd21374/img/frame-1649@2x.png"
          />
          <div className="rectangle-4" />
      </div>
  )
}

export default SideBar;