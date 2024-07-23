import React, { createContext, useEffect, useReducer, useState } from "react";

export const PostProvider = createContext({
    addPost: ()=>{},
    delPost: ()=>{},
    loader: false,
    initpost: []
});

function reducer(state, action) {
  switch(action.type){
    case 'READY_POST':
      return action.payload.posts;
    case 'DELETEPOST':
        return state.filter(e=>e.id !== action.payload.e)
    case 'ADDPOST':
      return [action.payload.post,...state]
    default:
        return state;
  }
}

function PostContextProvider({ children }) {
  const [initpost, dispatch] = useReducer(reducer,  []);

  function addPost(post) {
    dispatch({
      type: 'ADDPOST',
      payload: {post}
    })
  }
  function APIPosts(posts) {
    dispatch({
        type: 'READY_POST',
        payload: {posts}
        
    })
  }
  function delPost(e) {
    dispatch({
        type: 'DELETEPOST',
        payload: {e},
        
    })
  }

   const [loader, setloader] = useState(false);
 
  useEffect(() => {
    setloader(true)
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((obj) => {APIPosts(obj.posts)
      setloader(false)
  })

  return ()=>{
    controller.abort();
  }
    
  }, []);

  return (
    <>
      <PostProvider.Provider value={{ addPost, delPost, initpost,loader }}>
        {children}
      </PostProvider.Provider>
    </>
  );
}


export default PostContextProvider;
