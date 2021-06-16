import React, { useEffect, useRef } from "react";
import "./style.css";

const WebcamDisplay = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 800 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  return (
    <div>
      <div>
        <video ref={videoRef} />
      </div>
    </div>
  );
};
export default WebcamDisplay;
