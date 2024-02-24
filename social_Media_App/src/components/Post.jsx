import React, { useContext } from "react";
import { PostProvider } from "../store/PostContextProvider";

function Post({ post }) {
  const { delPost } = useContext(PostProvider);

  return (
    <>
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow card">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">{post.title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => delPost(post.id)}
            ></button>
          </div>
          <div className="modal-body py-0">
            <p>{post.description}</p>
          </div>
          <div>
            {post.tags.map((tag) => (
              <label key={tag} className="btn btn-danger tag">{tag}</label>
            ))}
          </div>
          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <label type="button" className="btn btn-lg btn-primary">
              This Post have {post.ratings} Reactions
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
