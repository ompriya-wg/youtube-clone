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
export default function Sidebar({ selected_category, setSelected_category }) {
  const handleClick = (e) => {
    setSelected_category(e.target.innerText);
  };
  return (
    <div className="flex overflow-x-scroll sm:flex-col sm:overflow-hidden gap-2">
      <button onClick={handleClick}>
        <div className="btn">
          <BiHomeAlt color="red" size={20} />
          <p>New</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiCode color="red" size={20} />
          <p className="truncate">JS Mastery</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiCode color="red" size={20} />
          <p>Coding</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiCode color="red" size={20} />
          <p>Reactjs</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiCode color="red" size={20} />
          <p>Nextjs</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiMusic color="red" size={20} />
          <p>Music</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <FaGraduationCap color="red" size={20} />
          <p>Education</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiPodcast color="red" size={20} />
          <p>Podcast</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiMoviePlay color="red" size={20} />
          <p>Movie</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <CiStreamOn color="red" size={20} />
          <p>Live</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <FaGamepad color="red" size={20} />
          <p>Gaming</p>
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="btn">
          <BiHappyHeartEyes color="red" size={20} />
          <p>Sports</p>
        </div>
      </button>
      <div className="hidden sm:inline-block mt-8 ml-2">
        <p>Copyrights Reserved</p>
      </div>
    </div>
  );
}
