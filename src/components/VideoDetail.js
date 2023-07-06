import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { fetchApi } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  return (
    <main>
      <section>
        <div className="flex justify-center">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            playing={true}
            controls={true}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-8 justify-center">
          {videos.map((item, idx) => {
            return (
              <div key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default VideoDetail;
