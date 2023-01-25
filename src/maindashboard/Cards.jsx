import React from "react";

export function IframeCards(cards) {
  return (
    <div>
      <iframe
        width={cards.iframeWidth}
        height={cards.iframeHeight}
        src={cards.iframeUrl}
        title={cards.title}
        className="cards-video"
      ></iframe>
      {/* <div className="heading">{cards.heading}</div>
      <img className="cards-img" src={cards.imgUrl} alt={cards.imgAlt} />
      <p className="cards-time-span">{cards.timeSpan}</p> */}
    </div>
  );
}

export function VideoCards(cards) {
  return (
    <div className="cards-background">
      <div className="video-cards">
        <div
          // backgroundImage='url('+cards.url+')'
          // backgroundImage=`url(${cards.url})`
          style={{
            borderRadius: "0 10px",
            alignItems: "center",
            backgroundImage: "url(" + cards.url + ")",
            width: cards.width,
            height: cards.height,
            backgroundSize: "cover",
          }}
        >
          <p
            timespan={cards.timeSpan}
            style={{
              borderRadius: "0 8px",
              // justifyContent: "right",
              width: "fit-content",
              backgroundColor: "rgb(28, 28, 28, 0.5)",
              textAlign: "right",
              // margin: "0 0 0 410px",
              padding: "2px 5px",
              fontFamily: "Roboto Slab, serif",
              letterSpacing: "1px",
            }}
          >
            {cards.timeSpan}
          </p>
        </div>
        <p
          title={cards.title}
          style={{
            margin: "0 auto",
            padding: "5px 10px",
            textAlign: "center",
            // width: cards.width,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1.2rem",
            fontFamily: "Roboto Slab, serif",
          }}
        >
          {cards.title}
        </p>
      </div>

      {/* <div className="heading">{cards.heading}</div>
      <img className="cards-img" src={cards.imgUrl} alt={cards.imgAlt} />
      <p className="cards-time-span">{cards.timeSpan}</p> */}
    </div>
  );
}

export function Ocards(Ocards) {
  <div>
    hello
    <div className="cards-background">
      <div className="heading">{Ocards.heading}</div>
      <img className="cards-img" src={Ocards.imgUrl} alt={Ocards.imgAlt} />
      <p className="cards-temp">{Ocards.temp}Hello there</p>
      <p className="cards-weather">{Ocards.weather}</p>
    </div>
  </div>;
}
