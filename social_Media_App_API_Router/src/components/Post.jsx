import React, { useContext } from "react";
import { PostProvider } from "../store/PostContextProvider";

function Post({ post }) {
  const { delPost } = useContext(PostProvider);

  return (
    <>
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
            <span className="visually-hidden">unread messages</span>
          </span>
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
            <p>{post.body}</p>
          </div>
          <div>
            {post.tags.map((tag) => (
              <label key={tag} className="btn btn-primary tag">
                {tag}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
