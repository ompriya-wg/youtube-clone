import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MainFeed from "./MainFeed";
import { fetchApi } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selected_category, setSelected_category] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selected_category}`).then((data) => {
      setVideos(data.items);
    });
  }, [selected_category]);

  return (
    <main className="bg-black pt-4 flex gap-8 flex-col sm:flex-row">
      {/* sidebar */}
      <section>
        <Sidebar
          selected_category={selected_category}
          setSelected_category={setSelected_category}
        />
      </section>
      <section>
        <MainFeed title={selected_category} videos={videos} />
      </section>
    </main>
  );
};

export default Feed;
