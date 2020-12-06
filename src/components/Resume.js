import React, { useState, useEffect } from "react";
import "./Resume.css";

function Resume() {
  const [priel, setPriel] = useState(false);
  const handlePriel = () => {
    console.log("Change priel from " + priel.toString());
    setPriel(!priel);
    if (liam) {
      setLiam(!liam);
    }
  };
  const [liam, setLiam] = useState(false);
  const handleLiam = () => {
    console.log("Change liam from " + liam.toString());
    setLiam(!liam);

    if (priel) {
      setPriel(!priel);
    }
  };

  return (
    <div className="all">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1 className="header">
        <span className="hey">Hey,</span> I'm
        <br />
        Priel
      </h1>
      <div class="primary-btn">
        <div class="btn-group">
          <div class="play-btn">
            <div class="play-btn-inner">
              <button onClick={handlePriel} className="watch-btn">
                <i class="fa fa-play"></i>
                <span>{priel ? "Close" : "Watch"} Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className={priel ? "ResumePhoto" : "no-display"}
        src="images/PrielHazanResume.jpg"
        alt="Priel Hazan Resume"
      />

      <h1 className="header">
        <span className="hey2">Hey,</span> I'm
        <br />
        Liam
      </h1>
      <div class="primary-btn">
        <div class="btn-group">
          <div class="play-btn">
            <div class="play-btn-inner">
              <button onClick={handleLiam} className="watch-btn">
                <i class="fa fa-play"></i>
                <span>{liam ? "Close" : "Watch"} Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className={liam ? "ResumePhoto" : "no-display"}
        src="images/LiamHazanResume.jpg"
        alt="Liam Hazan Resume"
      />
    </div>
  );
}

export default Resume;
