import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchApi } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelinfo, setChannelinfo] = useState("");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(`channels?id=${id}&part=snippet,statistics`).then((data) => {
      setChannelinfo(data.items[0]);
    });
    fetchApi(`search?channelId=${id}&part=snippet,id`).then((data) => {
      setVideos(data.items);
    });
  }, [id]);

  return (
    <main className="overflow-hidden">
      <section>
        <div className="w-full h-[30vh] channel-bar"></div>
      </section>
      <div className="flex justify-center">
        <section className=" rounded-3xl max-h-[40vh] bg-gray-950 flex items-center justify-center relative top-[-100px]">
          <ChannelCard channelDetail={channelinfo} />
        </section>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((item, idx) => {
          return (
            <div key={idx}>{item.id.videoId && <VideoCard video={item} />}</div>
          );
        })}
      </div>
    </main>
  );
};

export default ChannelDetail;
