import "./style.css";
import Topbar from "./topbar";
import Filterbox from "./filterby";
import Trending from "./trending";
import BlogRender from "./renderdata";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Trending />
        <Filterbox />
        <BlogRender />
      </main>
    </div>
  );
}

