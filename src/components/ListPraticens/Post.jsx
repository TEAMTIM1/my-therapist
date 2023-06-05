import { useState } from "react";



const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(post);

  return (
    <div className="card w-full glass">
      <figure>
        <img
          src={post.profilpicture}
          alt="profilpicture"
          className="w-full h-48 rounded-t-lg object-fill"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-medium mb-2">
          {post.lastname} {post.firstname}
        </h2>
        <p className="text-sm mb-2">{post.profilpresentation}</p>
        <div className="card-actions justify-end">
          <div className="p-8">
            <button
              className="bg-[#580abd] text-white px-4 py-2 rounded"
              onClick={handleButtonClick}
            >
              En savoir plus
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;



