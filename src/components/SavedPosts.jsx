import axios from "axios";
import { useEffect, useState } from "react";
import { SideBar } from "./Sidebar";
import { Post } from "./Post";

export const SavedPosts = ({ setModal, isLoggedIn }) => {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/savedPosts", {
      headers: {
        Authorization: token,
      },
    });
    setPosts(res.data);
  };
  return (
    <div className=' bg-gray-200'>
      <SideBar />
      <div className='pt-20 md:ml-32 bg-gray-200 '>
        <h1 className='md:w-[650px] md:mx-auto text-xl mb-2 font-semibold'>
          Posts guardados
        </h1>
        {posts.map((post) => (
          <Post
            post={post}
            setModal={setModal}
            isLoggedIn={isLoggedIn}
            fetchData={fetchData}
          />
        ))}
      </div>
    </div>
  );
};
