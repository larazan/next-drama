"use client"

import React, { useRef, useEffect } from "react";

function AvaArtist({ username, width, height }) {
    const colorArray = [
        'bg-blue-violet',
        'bg-red-orange',
        'bg-purple-violet',
        'bg-yellow-green',
        'bg-blue-purple',
        'bg-blue-green',
        'bg-orange-green',
        'bg-red-violet',
    ]

    const randomColor = () => {
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    const  getRandomColor= () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    
      const getInitials = (name) => {
        let initials;
        const nameSplit = name.split(" ");
        const nameLength = nameSplit.length;
        if (nameLength > 1) {
            initials =
                nameSplit[0].substring(0, 1) +
                nameSplit[nameLength - 1].substring(0, 1);
        } else if (nameLength === 1) {
            initials = nameSplit[0].substring(0, 1);
        } else return;
    
        return initials.toUpperCase();
    }

  return (
    <>
      {/* <div className="flex justify-center2 items-center">
        <div
          className={` border  rounded-full text-sm text-center text-white font-semibold uppercase`}
          style={{
            background: getRandomColor(),
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          {getInitials(username)}
        </div>
      </div> */}
      <div
        className={` sb-avatar sb-avatar--text w-[60px] h-[60px] md:w-[80px] md:h-[80px] `}
        style={{ 
            display: 'inline-block', 
            verticalAlign: 'middle', 
            // width: '30px', 
            // height: '30px', 
            borderRadius: '100%', 
            fontFamily: 'Helvetica, Arial, sans-serif',
        }}
      >
        <div
          className={`sb-avatar__text w-[90px] h-[90px] md:w-[140px] md:h-[140px] ${randomColor()} `}
          style={{
            // width: '95px', 
            // height: '95px', 
            // lineHeight: 'initial', 
            textAlign: 'center',
            color: 'rgb(255, 255, 255)', 
            borderRadius: '100%', 
            // background: 'rgb(126, 55, 148)', 
            // background: getRandomColor()
          }}
          title="Selena gomes"
        >
          <div 
          style={{
            display: 'table', 
            tableLayout: 'fixed', 
            width: '100%',
            height: '100%', 
            // fontSize: '15px' 
            }}
        >
            <span style={{
                display: 'table-cell', 
                verticalAlign: 'middle', 
                whiteSpace: 'nowrap', }}>
              <span className="font-bold text-2xl md:text-[45px]">{getInitials(username)}</span>
              
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvaArtist;
