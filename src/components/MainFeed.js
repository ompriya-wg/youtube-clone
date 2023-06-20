import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const MainFeed = ({ title, videos }) => {
  return (
    <div>
      <div className="pt-1">
        <h1 className="text-3xl font-semibold">
          <span className="text-red-600">{title}</span> Videos
        </h1>
      </div>
      <div className="mt-6 flex flex-wrap justify-evenly gap-8 ">
        {videos.map((item, idx) => {
          return (
            <div key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainFeed;
