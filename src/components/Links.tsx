import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";

import { useGlobalContext } from '../context/useContext'
const links = [
  {
    icon: <CiHome />,
    label: "Home",
    path: "/",
  },
  {
    icon: <SiYoutubeshorts />,
    label: "Shorts",
    path: "/shorts",
  },
  {
    icon: <MdSubscriptions />,
    label: "Subscription",
    path: "/subscription",
  },
 
];
const secondLinks=[
    {
        icon: <PiVideoFill />,
        label: "You",
        path: "/you",
        elements: [
          { icon: <PiVideoFill />, label: "Your channel" },
          { icon: <PiVideoFill />, label: "History" },
          { icon: <PiVideoFill />, label: "PlayList" },
          { icon: <PiVideoFill />, label: "Your Videos" },
          { icon: <PiVideoFill />, label: "Watch Later" },
          { icon: <PiVideoFill />, label: "Liked Videos" },

        ],
      },
      {
        label: "Subscriptions",
        elements: [
          { icon: <PiVideoFill />, label: "Gold Musics" },
          { icon: <PiVideoFill />, label: "TV series" },
          { icon: <PiVideoFill />, label: "National Geographic" },
          { icon: <PiVideoFill />, label: "Ed Sheeran" },
          { icon: <PiVideoFill />, label: "Hachalu Hundessa" },
        ],
      },
      {
        label:"Explore",
       elements:[ 
        {
         icon:"", label:"Trending"
        },
        {
         icon:"", label:"Music"
        },
        {
            icon:"", label:"Live"
        },
        {
            icon:"", label:"Gaming"
        },
        {
            icon:"", label:"News"
        },
        {
            icon:"", label:"Sports"
        },
        {
            icon:"", label:"Learning"
        },
        {
            icon:"", label:"Fashion & Beauty"
        }
    ],
      },
     { label:"More From Youtube",
        elements:[
            {
                icon:"", label:"Youtube Studio"

            },
            {
                icon:"",label:"YouTube Kids"
            },
            {
                icon:"", label:"Help",
            },
            {
                icon:"", label:"Send feedback"
            }
        ]
     },
     { label:"x",
        elements:[
            {
                icon:"", label:"Setting"

            },
            {
                icon:"",label:"Report history"
            },
            {
                icon:"", label:"Help",
            },
            {
                icon:"", label:"Send feedback"
            }
        ]
     }
    
]
function Links() {
  const [clickedIndex, setClickedIndex] = useState(null);
 const {iconClick}=useGlobalContext()
  const handleClick = (index: any) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };
  return (
    <div className={` h-screen px-1 ${iconClick ? "w-52" :"w-30"} `}>
      <ul className="overflow-y-scroll h-full scroll-bar select-none">
        {links.map((link, index) => (
          <li key={link.label} className="relative">
            <div
              className={`flex  text-lg  flex-col`}
              onClick={() => handleClick(index)}
            >
              <div
                className={`flex py-2 m-1 items-center gap-3 rounded-lg hover:bg-gray-500 ${
                  iconClick ? "flex-row" : "flex-col"
                }`}
              >
                <span>{link.icon}</span>
                <span className={`${iconClick ? "text-lg" : "text-xs"}`}>
                  {link.label}
                </span>
              </div>
              <p>
                { iconClick && link.label === "Subscription" ? "_____________________" : ""}
              </p>
            </div>
          </li>
        ))}

     {secondLinks.map((link, index) => (
 
          <li key={link.label} className="relative">
            <div
              className={`flex  text-lg  flex-col`}
              onClick={() => handleClick(index)}
            >
              <div
                className={`flex p-2 m-2 items-center gap-3 rounded-lg hover:bg-gray-500 ${
                  iconClick ? "flex-row" : "flex-col"
                }`}
              >
                {iconClick===false && <span>{link.icon}</span>}
                <span className={`${iconClick ? "text-lg" : "text-xs"} ${link.label==="x" && "hidden"}`}>
                  {iconClick ? link.label : link.label==="You" ? "You":""}
                </span>
              </div>
            </div>
            {link.elements &&  (
              <ul className={`ml-3 mt-2 ${iconClick ? "block" :"hidden"}`}>
                {link.elements.map((element, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex p-2 m-2 items-center gap-3 rounded-lg hover:bg-gray-400 text-lg"
                  >
                    <span>{element.icon}</span>
                    <span className={`${iconClick ? "text-lg" : "text-xs"}`}>
                      {element.label}
                    </span>
                  </li>
                ))}
                <p>
                {iconClick && "_____________________"}
              </p>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
