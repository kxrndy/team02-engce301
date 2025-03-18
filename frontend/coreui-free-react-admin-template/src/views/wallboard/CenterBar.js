import React from 'react'
import { CenterBarStyle } from './style'
import DateTime from './dateTime'
import Marquee from 'react-fast-marquee'

const CenterBar = ({ ServiceCode, WallBoardText }) => {
  const filteredItems = WallBoardText.filter((item) => item.Queue === ServiceCode);
  return (
    <div className="border rounded-3 shadow-sm bg-white mt-3 py-1 h-auto">
      <Marquee className="p-2">
        {filteredItems.length > 0 ? filteredItems[0].BannerText : "No message"}
      </Marquee>
    </div>
  );
};

export default CenterBar
