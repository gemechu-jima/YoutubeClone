import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../context/useContext";
const data = [
  { id: 1, name: "All" },
  { id: 2, name: "Mixes" },
  { id: 3, name: "Gaming" },
  { id: 4, name: "JavaScript" },
  { id: 5, name: "Nodejs" },
  { id: 6, name: "AI" },
  { id: 7, name: "BitCoin" },
  { id: 8, name: "PlayList" },
  { id: 9, name: "React js" },
  { id: 133, name: "React js" },
  { id: 10, name: "React js" },
  { id: 11, name: "React js" },
  { id: 12, name: "React js" },
  { id: 13, name: "React js" },
];

function TopList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollRef = useRef<HTMLUListElement>(null);
  const {iconClick}=useGlobalContext()

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };
    const updateMaxScroll = () => {
        if (scrollRef.current) {
            setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
        }
    };
   

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll)
        updateMaxScroll();

    }
    window.addEventListener('resize', updateMaxScroll);
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, [scrollPosition]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 100;
    }
  };
console.log(scrollPosition, maxScroll)
  return (
    <div className={`absolute w-auto mx-auto ${iconClick ? "ml-56":"ml-24" } pb-2 box-border inset-x-1 overflow-hidden z-20 bg-slate-800`}>
      <div className="flex justify-between w-full">
       {scrollPosition>0 && <button
          className="absolute left-1  flex items-center justify-start w-20 h-10 bg-gradient-to-r
                     from-gray-800 to-transparent z-40"
          onClick={scrollLeft}
        >
          <FaChevronLeft
            className="text-white text-2xl rounded-full p-2 hover:bg-slate-500"
            size={30}
          />
        </button>}
        {scrollPosition < maxScroll && <button
          className="absolute right-1  flex items-center justify-center w-20 h-10 bg-gradient-to-l
                     from-gray-800 to-transparent z-40"
          onClick={scrollRight}
        >
          <FaChevronRight
            className="text-white text-2xl rounded-full p-2 hover:bg-slate-500"
            size={30}
          />
        </button>}
      </div>
      <ul
        id="page"
        ref={scrollRef}
        className="flex w-[94%] mx-auto gap-3 overflow-x-scroll scroll-bar-ul scroll-smooth"
      >
        {data.map((list) => (
          <li
            key={list.id}
            className="select-none z-10 cursor-pointer bg-gray-500
                     text-white rounded-md px-3 py-2 hover:text-black hover:bg-white"
          >
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopList;
