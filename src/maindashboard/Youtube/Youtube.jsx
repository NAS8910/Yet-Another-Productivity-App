import React from "react";
import youtube from "./axiosApi.js";
import { noOfVideos } from "../../constants/index";
import { VideoCards } from "../Cards";
import { tempId } from "./axiosApi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRef, useState } from "react";
import Videos from "./Videos.jsx";

const vIds = [...new Set()];
var Vindex;
var GresponseArr;
var vsrc;
function Youtube() {
  const videoSrc = "https://www.youtube.com/embed/";

  // Scroll Effect in Cards.
  const scrollOffsetValue = 600;
  const ScrollAmountValue = 5;
  const scrollAmountDisplacement = 15;
  const ref = useRef(null);
  var scrollAmount;
  function scrollLeft(scrollOffset) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
      ref.current.scrollLeft -= scrollAmountDisplacement;
      scrollAmount -= ScrollAmountValue;
      if (scrollAmount <= scrollOffset) {
        window.clearInterval(slideTimer);
      }
    }, 10);
  }

  function scrollRight(scrollOffset) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
      ref.current.scrollLeft += scrollAmountDisplacement;
      scrollAmount += ScrollAmountValue;
      if (scrollAmount >= scrollOffset) {
        window.clearInterval(slideTimer);
      }
    }, 10);
  }

  const [post, setPost] = React.useState([]);
  const [isShown, setIsShown] = useState(false);
  const [VisShown, VsetIsShown] = useState(true);

  tempId.map((e) => {
    try {
      vIds.push(e.vid);
    } catch (e) {
      console.log("Error : " + e);
    }
  });

  React.useEffect(() => {
    var responseArr = [];
    let i;
    async function getPost() {
      for (i = 0; i < noOfVideos; i++) {
        var response = await youtube.get("/videos", {
          params: {
            id: vIds[i],
            part: "snippet,contentDetails,statistics,status",
          },
        });

        responseArr.push(response.data);
        console.log("VideoId no." + i + " : " + vIds[i]);
      }
      setPost(responseArr);
      GresponseArr = responseArr;
      console.log("This is response Array: ", responseArr);
    }
    getPost();
  }, []);
  if (!post) return "No post!";

  function showList(props) {
    setIsShown(false);
    VsetIsShown(true);
  }

  function playVideo(count) {
    Vindex = count;
    console.log("Videono: ", count);
    console.log("THIS IS VIDEO SRC: ", vIds[count]);

    setIsShown(true);
    VsetIsShown(false);
  }

  return (
    <div>
      {VisShown && (
        <div id="scrollDiv" className="cards-container" ref={ref}>
          <button
            className="scroll-button animate__animated animate__headShake"
            onClick={() => scrollLeft(-scrollOffsetValue)}
          >
            <ChevronLeftIcon
              sx={{
                width: 50,
                height: 40,
                color: "white",
              }}
            />
          </button>
          {post.map((e, index) => {
            try {
              var date = post[index].items[0].contentDetails.duration;
              var dateC = date.substring(2);
              dateC = dateC.replace("M", "m");
              dateC = dateC.replace("S", "s");
              var keys = post[index].etag;
              var title = post[index].items[0].snippet.title;
              var id = post[index].items[0].id;
              var thumbnailUrl;
              var thumbnail =
                /* post[index].items[0].snippet.thumbnails.default.url ||*/
                post[index].items[0].snippet.thumbnails.maxres.url ||
                post[index].items[0].snippet.thumbnails.high.url ||
                post[index].items[0].snippet.thumbnails.default.url;
              thumbnailUrl = thumbnail;
              console.log("ThumbnailUrl: " + thumbnailUrl);
              vsrc = post[index].items[0].id;
              console.log("\n array of ids " + vIds, "\n");
            } catch (err) {
              console.log("Error: " + err);
            }
            return (
              <div key={keys}>
                <div onClick={() => playVideo(index)}>
                  <VideoCards
                    width="480px"
                    height="270px"
                    title={title}
                    url={thumbnailUrl}
                    timeSpan={dateC}
                    className="play-video"
                  />
                </div>
              </div>
            );
          })}
          <button
            className="scroll-button scroll-button animate__animated animate__headShake"
            onClick={() => scrollRight(scrollOffsetValue)}
          >
            <ChevronRightIcon
              sx={{
                width: 50,
                height: 40,
                color: "white",
              }}
            />
          </button>
        </div>
      )}
      {isShown && (
        <div>
          <div onClick={() => showList()} style={{ margin: "0.5rem 3rem 0" }}>
            <KeyboardBackspaceIcon
              fontSize="large"
              style={{ color: "var(--text-primary)" }}
            />
          </div>
          <Videos vUrl={vIds[Vindex]} vWidth="960px" vHeight="540px" />
        </div>
      )}
    </div>
  );
}

// Horizontal Scrolling using Mouse Scroll
// document.addEventListener("DOMContentLoaded", () => {
//   const scrollContainer = document.querySelector("#scrollDiv");
//   scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//   });
// });
export default Youtube;
export { vIds };
export { GresponseArr };
export { vsrc };
