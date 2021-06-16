import React, { useEffect, useRef } from "react";
import "./style.css";

const WebcamDisplay = () => {
  const videoRef = useRef(null);
  let streamRef = null;

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 800 } })
      .then((stream) => {
        streamRef = stream;
        let video = videoRef.current;
        video.srcObject = streamRef;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const toggleVideo = () => {
    streamRef.getVideoTracks()[0].enabled === true
      ? (streamRef.getVideoTracks()[0].enabled = false)
      : (streamRef.getVideoTracks()[0].enabled = true);
  };

  const toggleSepia = () => {
    videoRef.current.classList.toggle("sepia");
  };

  return (
    <div>
      <div>
        <video ref={videoRef} style={{ backgroundColor: "#000" }} />
      </div>
      <div className="btn-section">
        <button onClick={toggleVideo}>Toggle Video</button>
        <button onClick={toggleSepia}>Toggle Sepia</button>
      </div>
    </div>
  );
};
export default WebcamDisplay;
