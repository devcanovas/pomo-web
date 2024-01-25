import { Background } from "./components/Background";
import Content from "./components/Content";
import { Download } from "./components/Download";

export default function App() {
  return (
    <>
      <Background />
      <div className="flex items-center justify-center w-full h-lvh p-40">
        <div className="grid grid-cols-3 grid-flow gap-52">
          <Download />
          <div className="flex items-center justify-center">
            <img src="/images/pomo-ss.png" className="w-60" />
          </div>
          <Content />
        </div>
      </div>
    </>
  );
}
