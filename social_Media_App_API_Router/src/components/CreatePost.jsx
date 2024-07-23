import React, { useContext, useRef } from "react";
import { PostProvider } from "../store/PostContextProvider";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostProvider);
  const navigate = useNavigate();
  const userid = useRef();
  const postTitle = useRef();
  const postcontent = useRef();
  const reaction = useRef();
  const hashtag = useRef();

  const submitionData = (e) => {
    e.preventDefault();
    let title = postTitle.current.value;
    let description = postcontent.current.value;
    let ratings = reaction.current.value;
    let userId = userid.current.value;
    let tags = hashtag.current.value.split(" ");
    

    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      body: description,
      reactions: ratings,
      userId: userId,
      tags: tags,
    })
  })
  .then(res => res.json())
  .then(posts => {
    addPost(posts)
    navigate('/');
  });
    userid.current.value = '';
    postTitle.current.value = '';
    postcontent.current.value = '';
    reaction.current.value = '';
    hashtag.current.value = '';

  };


  return (
    <>
      <form className="row g-3 form" onSubmit={submitionData}>
        <div className="col-md-6">
          <label htmlFor="userid" className="form-label">
            Enter Your User ID here
          </label>
          <input
            type="text"
            placeholder="Your ID"
            ref={userid}
            className="form-control"
            id="userid"
          />
        </div>

        <div className="col-12">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitle}
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="How are you Feeling today..."
          />
        </div>

        <div className="col-12">
          <label htmlFor="postcontent" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postcontent}
            rows={4}
            type="text"
            className="form-control"
            id="postcontent"
            placeholder="Tell us More about it."
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="reaction" className="form-label">
            Number of Reaction:
          </label>
          <input
            type="text"
            ref={reaction}
            className="form-control"
            id="reaction"
            placeholder="How Many people Reacted to this post."
          />
        </div>

        <div className="col-12">
          <label htmlFor="hashtag" className="form-label">
            Enter Your hashtags:
          </label>
          <input
            ref={hashtag}
            type="text"
            className="form-control"
            id="hashtag"
            placeholder="Please enter your tags with spaces."
          />
        </div>

        <div className="col-12">
          <button type="submit"className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </>
  );
}

export default CreatePost;
