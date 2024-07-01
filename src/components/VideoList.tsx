import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useGlobalContext } from "../context/useContext";
const baseURL = "https://www.youtube.com";
function VideoList() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState<boolean>(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = true;
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}`);
        if (response) {
          console.log(response);
        }
      } catch (error) {
        if (error) {
          console.log("Error", error);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className={`ml-5 mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3  `}>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
      <div className="w-auto relative">
        <div className="mr-2 relative">
          <span
            className="absolute right-10 bottom-4
                 bg-slate-600 bg-opacity-55 rounded-lg w-12 h-6"
          >
            12:34
          </span>
          <video
            ref={videoRef}
            src="Javascript.mp4"
            className={`w-full mr-2 h-52 rounded-2xl ${
              hover ? "opacity-75" : ""
            }`}
            controls
            onClick={handlePause}
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
          />
        </div>
        <div className="flex mt-2 gap-2 cursor-pointer relative">
          <img
            src="group-team-1.jpg"
            alt="group "
            className={`rounded-full w-16 h-16 `}
          />
          <BsThreeDotsVertical
            onMouseEnter={() => {
              setHover(true), handlePlay();
            }}
            onMouseLeave={() => {
              setHover(false), handleStop();
            }}
            className={`absolute group right-2 rounded-full text-4xl ${
              click && "bg-gray-600"
            }  p-2 mt-2`}
            onClick={() => setClick(!click)}
          />
          <div>
            <h1 className="text-xl text-white font-bold">
              {" "}
              Topic of about video
            </h1>
            <h2 className=" text-gray-300">SimpleWeb</h2>
            <span className="text-gray-300 text-md pr-2">162K views</span>
            <span className="text-gray-300 text-md p-2">4 months ago</span>
          </div>
        </div>
        {click && (
          <div className="absolute -right-40 -bottom-20 bg-slate-700 text-white p-3 rounded-lg">
            <p>Add to queue</p>
            <p>save to watch later</p>
            <p>play save </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoList;
