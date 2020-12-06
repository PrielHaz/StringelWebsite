import React, { useState, useEffect } from "react";
import "./Resume.css";
import $ from "jquery";

function Resume() {
  function runJquery() {
    console.log("jquery runs");
    $(document).ready(function () {
      $("#openPriel").click(function () {
        $("#prielResume").slideToggle("slow");
        if ($("#liamResume").is(":visible")) {
          $("#liamResume").slideToggle("slow");
        }
      });
      $("#openLiam").click(function () {
        $("#liamResume").slideToggle("slow");
        if ($("#prielResume").is(":visible")) {
          $("#prielResume").slideToggle("slow");
        }
      });
    });
  }

  useEffect(() => {
    runJquery();
  }, []);

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
      <script src="../index.js"></script>
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
              <button
                className="watch-btn"
                onClick={handlePriel}
                id="openPriel"
              >
                <i class="fa fa-play"></i>
                <span>{priel ? "Close" : "Watch"} Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="ResumePhoto no-display"
        id="prielResume"
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
              <button id="openLiam" onClick={handleLiam} className="watch-btn">
                <i class="fa fa-play"></i>
                <span>{liam ? "Close" : "Watch"} Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        id="liamResume"
        className="ResumePhoto no-display"
        src="images/LiamHazanResume.jpg"
        alt="Liam Hazan Resume"
      />
    </div>
  );
}

export default Resume;
