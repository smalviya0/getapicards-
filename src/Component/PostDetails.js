import React, { useEffect, useState } from "react";
import axios from "axios";

// Component to display the details of a single post
export default function PostDetails({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error)  => console.log(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="p-4">
        <h4 className="text-xl font-semibold text-blue-600">{post.title}</h4>
        <p className="mb-2 leading-normal">{post.body}</p>
      </div>
    </div>
  );
}
