import { useState } from "react";
import NewsLetter from "./components/NewsLetter";
import Success from "./components/Success";

const App = () => {
  const [newsLetter, setNewsLetter] = useState(false);

  const display = newsLetter ? <Success subscribe={setNewsLetter} /> : <NewsLetter subscribe={setNewsLetter} />;

  return (
    <div className="w-full h-screen bg-gray-800 flex items-center">
      { display }
    </div>
  )
}

export default App;