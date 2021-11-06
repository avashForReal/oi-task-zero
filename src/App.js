import { useState, useEffect } from "react";

import data from "./data.json";

import Toggle from "./components/Toggle";
import Posts from "./components/Posts";

function App() {
  const [localpost, setLocalpost] = useState(true);
  const [newdata, setNewdata] = useState([]);
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://6184fd8823a2fe0017fff2d1.mockapi.io/api/data`
      );
      const newData = await response.json();
      setNewdata(newData);
    };
    fetchData();
  });

  const toggleData = () => {
    if (localpost) {
      setPosts(newdata);
      setLocalpost(!localpost);
    } else {
      setPosts(data);
      setLocalpost(!localpost);
    }
  };

  // console.log(posts);
  return (
    <div className="bg-gray-50 w-11/12 pt-4 mx-auto">
      <Toggle toggleData={toggleData} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
