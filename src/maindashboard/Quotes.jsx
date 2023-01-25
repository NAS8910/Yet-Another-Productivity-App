import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowClockwise } from "react-bootstrap-icons";

import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import RefreshIcon from "@mui/icons-material/Refresh";

import Tooltip from "@mui/material/Tooltip";

export default function Quotes() {
  const [quote, setQuote] = useState("");

  const onQuoteRefresh = () => {
    const ab = document.querySelector(".quotes").classList;
    console.log("ab = " + ab);
    ab.toggle(".on-quote-refresh");
    const cd = document.querySelector(".quotes").classList;
    console.log("cd = " + cd);
    const options = {
      method: "POST",
      url: "https://motivational-quotes1.p.rapidapi.com/motivation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f01cd2e788msh79a1ca825ebb054p16395bjsn9d20a26b241c",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://motivational-quotes1.p.rapidapi.com/motivation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f01cd2e788msh79a1ca825ebb054p16395bjsn9d20a26b241c",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setQuote(response.data);
      })
      .catch(function (error) {
        // console.error(error);
      });

    return () => {};
  }, []);

  return (
    <div className="quotes">
      {/* <ArrowClockwise width={20} height={20} color={"white"} className={"refresh-svg-btn"}onClick={onQuoteRefresh}/> */}
      <div className="quotes-content">
        {quote !== "" ? (
          <p className="quote-text">{quote}</p>
        ) : (
          <p className="quote-text">"Where there is will there's a way."</p>
        )}
      </div>
      <div className="refresh-btn-section">
        <Tooltip followCursor title="Refresh Quote">
          <ChangeCircleIcon
            htmlColor="white"
            className="refresh-svg-btn"
            onClick={onQuoteRefresh}
            fontSize="large"
          />
        </Tooltip>
      </div>
    </div>
  );
}
