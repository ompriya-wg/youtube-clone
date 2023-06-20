import { Link } from "react-router-dom";
import { demoChannelUrl } from "../utils/constants";
const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="flex flex-col justify-center items-center min-w-[380px] min-h-[380px]">
      <Link
        to={
          channelDetail?.id?.channelId
            ? `/channel/${channelDetail?.id?.channelId}`
            : demoChannelUrl
        }
      >
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          width={250}
          className="rounded-full"
        />
      </Link>
      <p className="mt-4">{channelDetail?.snippet?.title}✔️</p>
    </div>
  );
};

export default ChannelCard;
