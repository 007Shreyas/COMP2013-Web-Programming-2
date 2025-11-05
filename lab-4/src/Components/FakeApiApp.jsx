import { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
    setPostId(data.length + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPost.title.trim() === "" || newPost.body.trim() === "") return;

    const newPostWithID = {
      id: postId,
      title: newPost.title,
      body: newPost.body,
    };

    setPosts([newPostWithID, ...posts]);
    setPostId(postId + 1);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      <h1>Fake API App</h1>

      <PostForm
        newPost={newPost}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      <PostsContainer posts={posts} />
    </div>
  );
}
