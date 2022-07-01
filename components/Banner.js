import baseApiUrl from "@/utils/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";

export default function Banner() {
  const { banner } = useSelector((store) => store?.indexReducer);

  return (
    <div className="featured-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            {/* <p className="text-muted"> */}
            {/* <span
                className="typewrite d-inline"
                data-period={2000}
                data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
              >
                <span className="wrap"> Tr</span>
              </span> */}

            <Typewriter
              options={{
                strings: [banner?.infoText],
                autoStart: true,
                loop: true,
              }}
            />
            {/* </p> */}
            <h2>
              {banner?.heading} <span> {banner?.btnText}</span>
            </h2>
          </div>
          <div className="col-lg-6 text-right d-none d-lg-block">
            <img src={`${baseApiUrl}${banner?.image?.url}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
