import React, { createContext, useReducer } from "react";

export const PostProvider = createContext({
    addPost: ()=>{},
    delPost: ()=>{},
    initpost: []
});

function reducer(state, action) {
  switch(action.type){
    case 'DELETEPOST':
        return state.filter(e=>e.id !== action.payload)
    case 'ADDPOST':
      return state = [action.payload,...state]
    default:
        return state;
  }
}

function PostContextProvider({ children }) {
  const [initpost, dispatch] = useReducer(reducer,  initialData);

  function addPost(id,title,description,ratings,tags) {
    dispatch({
      type: 'ADDPOST',
      payload: {
        id: id,
        title: title,
        description: description,
        ratings: ratings,
        tags: tags,
      }
    })
  }
  function delPost(e) {
    dispatch({
        type: 'DELETEPOST',
        payload: e,
        
    })
  }

  return (
    <>
      <PostProvider.Provider value={{ addPost, delPost, initpost }}>
        {children}
      </PostProvider.Provider>
    </>
  );
}
let initialData = [
  {
    id: 1,
    title: "Tourism",
    description:
      "Pakistan is the largest most attractive tourist country.It has very beautiful landscape to see and delicious food.",
    ratings: "2",
    tags: ["travel", "enjoyment", "happiness"],
  },
  {
    id: 2,
    title: "Education",
    description:
      "Education is very important of every child irrespective of there culture,religion and other discriminative factors.",
    ratings: "5",
    tags: ["education", "future", "happiness"],
  },
  {
    id: 3,
    title: "Knowledge",
    description:
      "Knowledge is very important of every child irrespective of there culture,religion and other discriminative factors.",
    ratings: "8",
    tags: ["education", "future", "happiness"],
  },
];

export default PostContextProvider;
