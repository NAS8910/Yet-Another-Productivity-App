import axios from "axios";
import { noOfVideos, noOfVideoIds } from "../../constants/index";
import videoId from "./youtubeIds.json";
const KEY = "AIzaSyAI6bxhFUXk8w1GvfEbP-I_jjv6tQsrT0k";

const videoIds = videoId;
const tempId = [];

for (let i = 0; i < noOfVideos; i++) {
  /*Taking 4 Ids*/
  var n = Math.floor(Math.random() * noOfVideoIds); // n = 0 - 43
  tempId.push(videoIds[n]);
}

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
  },
});

export { tempId };
