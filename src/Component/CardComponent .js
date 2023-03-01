//Using fetch 
// import React, { useEffect, useState } from "react";

// export default function CardComponent() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <>
//       <div className="grid gap-2 lg:grid-cols-4">
//         {/* {posts.slice(0, 4).map((item) => ( */}
//         {posts.map((item) => (
//           <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={item.id}>
//             <div className="p-4">
//               <h4 className="text-xl font-semibold text-blue-600">{item.title}</h4>
//               <p className="mb-2 leading-normal">{item.body}</p>
//               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
//                 Read more
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// Using Axios
import React, { useEffect, useState } from "react";
import PostDetails  from "./PostDetails";
import axios from "axios";

export default function CardComponent() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);
  if (selectedPostId) {
    // If a post is selected, display its details
    return <PostDetails postId={selectedPostId} />;
  }

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {/* {posts.slice(0, 4).map((item) => ( */}
        {posts.map((item) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={item.id}>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">{item.title}</h4>
              <p className="mb-2 leading-normal">{item.body}</p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
              onClick={() => setSelectedPostId(item.id)}>
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}