import { Link } from "react-router-dom";
import { demoVideoUrl, demoChannelUrl } from "../utils/constants";
const VideoCard = ({ video }) => {
  return (
    <div className="flex flex-col max-h-[380px] max-w-[380px] overflow-hidden">
      <Link
        to={video?.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
      >
        <img
          src={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          width={358}
          height={180}
        />
      </Link>
      <p className="font-semibold flex flex-wrap ">{video?.snippet?.title}</p>
      <Link
        to={
          video?.snippet?.channelId
            ? `/channel/${video?.snippet?.channelId}`
            : demoChannelUrl
        }
      >
        <p className="text-gray-500  font-bold mt-2">
          {video?.snippet?.channelTitle}✔️
        </p>
      </Link>
    </div>
  );
};

export default VideoCard;
