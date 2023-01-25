import React from "react";
import { IframeCards } from "../Cards";

const videoSrc = "https://www.youtube.com/embed/";

function Videos(iframe) {
  return (
    <div className="youtube-video">
      <IframeCards
        className="play-video"
        iframeUrl={videoSrc + iframe.vUrl}
        title={iframe.vTitle}
        iframeWidth={iframe.vWidth}
        iframeHeight={iframe.vHeight}
      />
    </div>
    // <div className="cards-container" ref={ref}>
    //   <button
    //     className="scroll-button"
    //     onClick={() => scrollLeft(-scrollOffsetValue)}
    //   >
    //     <ChevronLeftIcon
    //       sx={{
    //         width: 50,
    //         height: 40,
    //         color: "white",
    //       }}
    //     />
    //   </button>
    //   <VideoCards
    //     iframeWidth="480px"
    //     iframeHeight="250px"
    //     iframeUrl={videoSrc + tempId[2].vid}
    //   />
    //   <VideoCards
    //     iframeWidth="480px"
    //     iframeHeight="270px"
    //     iframeUrl={videoSrc + tempId[1].vid}
    //   />
    //   <VideoCards
    //     iframeWidth="480px"
    //     iframeHeight="270px"
    //     iframeUrl={videoSrc + tempId[0].vid}
    //   />
    //   <VideoCards
    //     iframeWidth="480px"
    //     iframeHeight="270px"
    //     iframeUrl={videoSrc + tempId[3].vid}
    //   />
    //   <button
    //     className="scroll-button"
    //     onClick={() => scrollRight(scrollOffsetValue)}
    //   >
    //     <ChevronRightIcon
    //       sx={{
    //         width: 50,
    //         height: 40,
    //         color: "white",
    //       }}
    //     />
    //   </button>
    // </div>
  );
}

export default Videos;
