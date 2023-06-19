import {
  BiCode,
  BiHomeAlt,
  BiMusic,
  BiPodcast,
  BiMoviePlay,
  BiHappyHeartEyes,
} from "react-icons/bi";
import { FaGraduationCap, FaGamepad } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
export default function Sidebar() {
  return (
    <div className="flex justify-evenly overflow-x-scroll sm:flex-col sm:overflow-hidden gap-2">
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiHomeAlt color="red" size={20} />
          <p>New</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiCode color="red" size={20} />
          <p className="truncate">JS Mastery</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiCode color="red" size={20} />
          <p>Coding</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiCode color="red" size={20} />
          <p>Reactjs</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiCode color="red" size={20} />
          <p>Nextjs</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiMusic color="red" size={20} />
          <p>Music</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <FaGraduationCap color="red" size={20} />
          <p>Education</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiPodcast color="red" size={20} />
          <p>Podcast</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiMoviePlay color="red" size={20} />
          <p>Movie</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <CiStreamOn color="red" size={20} />
          <p>Live</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <FaGamepad color="red" size={20} />
          <p>Gaming</p>
        </div>
      </button>
      <button>
        <div className="flex items-center gap-3 hover:bg-red-600 w-40 rounded-xl p-2 border-b-2 border-gray-500">
          <BiHappyHeartEyes color="red" size={20} />
          <p>Sports</p>
        </div>
      </button>
      <div className="hidden sm:inline-block mt-8">
        <p>Copyrights Reserved</p>
      </div>
    </div>
  );
}
