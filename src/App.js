import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  ChannelDetail,
  SearchFeed,
  VideoDetail,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar componenet */}
      <div className="bg-black text-white">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
