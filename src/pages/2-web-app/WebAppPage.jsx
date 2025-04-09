import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";
import styles from "./WebAppPage.module.scss";

import React, { useCallback, useEffect, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import Navbar from "../../components/navbar/Navbar.jsx";
import NavIcon from "../../assets/icons/web-app-icon-inverted.png";
import { FcRotateToLandscape } from "react-icons/fc";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";

const pageColour = "--web-app-colour";

export default function WebAppPage() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "webapp/Build/WebGL.loader.js",
    dataUrl: "webapp/Build/WebGL.data",
    frameworkUrl: "webapp/Build/WebGL.framework.js",
    codeUrl: "webapp/Build/WebGL.wasm",
    companyName: "University of Sydney",
    productName: "LCSA Tracker Web",
    productVersion: "1.0",
  });

  let unityRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      unityRef.current.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const createAndUseTemporaryLink = (name, blob, fileType) => {
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `${name}.${fileType}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadScreenCapture = useCallback((screenCapture) => {
    if (!screenCapture.detail) return;

    const byteChars = atob(screenCapture.detail);
    const byteArr = new Uint8Array(byteChars.length);
    for (let i = 0; i < byteArr.length; i++) {
      byteArr[i] = byteChars.charCodeAt(i);
    }

    createAndUseTemporaryLink(
      `LCSA_Map_Screenshot_${Math.floor(Math.random() * 100)}`,
      new Blob([byteArr], { type: "image/png" }),
      "png",
    );
  }, []);

  const downloadCsvData = useCallback((csvString) => {
    if (!csvString.detail) return;

    createAndUseTemporaryLink(
      `LCSA_Data_${Math.floor(Math.random() * 100)}`,
      new Blob([csvString.detail], { type: "text/csv" }),
      "csv",
    );
  }, []);

  useEffect(() => {
    window.addEventListener("ToggleFullscreen", toggleFullscreen);
    window.addEventListener("SendScreenCaptureToJS", downloadScreenCapture);
    window.addEventListener("SendDataToCsv", downloadCsvData);
    return () => {
      window.removeEventListener("ToggleFullscreen", toggleFullscreen);
      window.removeEventListener(
        "SendScreenCaptureToJS",
        downloadScreenCapture,
      );
      window.removeEventListener("SendDataToCsv", downloadCsvData);
    };
  }, [
    addEventListener,
    removeEventListener,
    downloadScreenCapture,
    downloadCsvData,
  ]);

  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar icon={NavIcon} />
      <Unity
        unityProvider={unityProvider}
        className={styles.webapp}
        tabIndex="1"
        ref={unityRef}
      />
      <div className={styles.rotateDevice}>
        <FcRotateToLandscape size="20" />
        <p>Landscape orientation is recommended for mobile devices</p>
      </div>
      <div>
        <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
      </div>
    </RecolouredPage>
  );
}
