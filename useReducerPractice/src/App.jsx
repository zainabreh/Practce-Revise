

// Modification in ToDo List Example


// import React, { useReducer } from 'react';

// function todoReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { text: action.text, completed: false }];
//     case 'TOGGLE_TODO':
//       return state.map((todo, index) =>
//         index === action.index ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter((todo, index) => index !== action.index);
//     default:
//       throw new Error();
//   }
// }

// function TodoList() {
//   const [todos, dispatch] = useReducer(todoReducer, []);

//   function handleAddTodo() {
//     const text = prompt('Enter new todo:');
//     dispatch({ type: 'ADD_TODO', text });
//   }

//   function handleToggleTodo(index) {
//     dispatch({ type: 'TOGGLE_TODO', index });
//   }

//   function handleRemoveTodo(index) {
//     dispatch({ type: 'REMOVE_TODO', index });
//   }

//   return (
//     <div>
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//             onClick={() => handleToggleTodo(index)}
//           >
//             {todo.text}
//             <button onClick={() => handleRemoveTodo(index)}>X</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoList






// Updating Email and Name example


// import React, { useReducer } from 'react';

// // Step 1: Define the reducer function
// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return { ...state, name: action.payload };
//     case 'CHANGE_EMAIL':
//       return { ...state, email: action.payload };
//     default:
//       return state;
//   }
// };

// const Form = () => {
//   // Step 2: Use useReducer and pass the reducer function and initial state
//   const [state, dispatch] = useReducer(formReducer, { name: '', email: '' });

//   const handleNameChange = (event) => {
//     // Step 3: Dispatch actions to update state
//     dispatch({ type: 'CHANGE_NAME', payload: event.target.value });
//   };

//   const handleEmailChange = (event) => {
//     // Step 3: Dispatch actions to update state
//     dispatch({ type: 'CHANGE_EMAIL', payload: event.target.value });
//   };

//   return (
//     <div>
//       <h2>User Information</h2>
//       <form>
//         <label>
//           Name:
//           <input type="text" onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" onChange={handleEmailChange} />
//         </label>
//       </form>
//       <div>
//         <p>Name: {state.name}</p>
//         <p>Email: {state.email}</p>
//       </div>
//     </div>
//   );
// };

// export default Form;


// Cart Example


// import React,{useReducer} from 'react'

// function reducer(state,action){

//     switch(action.type){
//         case 'ADD_ITEM':

//         return{
//             ...state,
//             items: [...state.items, action.payload]
//         }
        
//         case 'REMOVE_ITEM':

//         return{
//             ...state,
//             items: state.items.filter(e=> e !== action.payload)
//         }

//         default:
//             return state;
//     }

// }

// function App() {

//     const [state,dispatch] = useReducer(reducer,{items:[]})

//     function removeItem(e){
//         dispatch({
//             type: 'REMOVE_ITEM',
//             payload: e
//         })
//     }
//     function addItem(e){
//         dispatch({
//             type: 'ADD_ITEM',
//             payload: e,
//         })
//     }

//   return (
//     <>
//       <h1>SHOPPING CART</h1>
//       <ul>
//             {state.items.map(e=>(
//                 <li key={e}>
//                     {e}
//                     <button onClick={()=>removeItem(e)}>Remove</button>
//                 </li>
//             ))}
//       </ul>
//       <input
//     type='text'
//     placeholder='Enter Items'
//     onKeyDown={(e)=> e.key === 'Enter'&& addItem(e.target.value)}
//       ></input>
//     </>
//   )
// }

// export default App


// import React,{useReducer} from 'react'

//     function reducer(stat,action){
//         switch(action.type){
//             case 'SUBMIT':
//                 console.log ({
//                     ...stat,
//                     name: action.name,
//                     email: action.email,
//                 })
//             case 'SUBMIT-TEMP':
//                 return{
//                     ...stat,
//                     [action.field]: action.value,
//                 }
//             default:
//                 return stat;
//         }
//     }

// function App() {
//     const [state,dispatch] = useReducer(reducer,{name: '', email: ''})

//     function changingData (e){
//         dispatch({
//             type: 'SUBMIT-TEMP',
//             field: e.target.name,
//             value: e.target.value,
//         })
//     }

//     function updateData(){
//         dispatch({
//             type: "SUBMIT",
//             name:  state.name,
//             email: state.email,
//         })
//     }


//   return (
//     <>
//       <input type="text" placeholder='Enter Name' name='name' value={state.name} onChange={changingData}/>
//       <input type="email" placeholder='Enter Email' name='email' value={state.email} onChange={changingData}/>
//       <button onClick={updateData}>Submit</button>

//       <div>
//         <p>Name:{state.name}</p>
//         <p>Email:{state.email}</p>
//       </div>
//     </>
//   )
// }

// export default App


// cart Example

import React,{useReducer, useRef} from 'react'

const reducer = (state,action)=>{
    switch(action.type){
        // case 'ITEMDATA':
        //     return{
        //         ...state,
        //         [action.field]: action.value,
        //     }
        case 'ADD':
            return{
                ...state,
                Items: [...state.Items,{
                    itemName: action.Name,
                    itemPrice: action.Price,
                }],
            }
        case 'REMOVE':
            return {
                ...state,
                Items: state.Items.filter(e=> e.itemName !== action.name)
        }
        default:
            return state;
    }
}

function App() {

    const [state,dispatch] = useReducer(reducer,{Items:[]})
    let itemprice = useRef();
    let itemname = useRef();

    // function itemData(e){
    //     dispatch({
    //         type: 'ITEMDATA',
    //         field: e.target.name,
    //         value: e.target.value,
    //     })
    // }

    function addItem(){
        dispatch({
            type: 'ADD',
            Name: itemname.current.value,
            Price: itemprice.current.value,
        })
        itemname.current.value=''
        itemprice.current.value=''
    }

    function removeItem(itemName){
        dispatch({
            type: 'REMOVE',
            name: itemName,
        })
    }

  return (
    <>
      <input type="text" placeholder='Enter Item Name' ref={itemname}/>
      <input type="text" placeholder='Enter Item Price' ref={itemprice}/>
      {/* <input type="text" placeholder='Enter Item Name' name='itemName' value={state.itemName} onChange={itemData}/>
      <input type="text" placeholder='Enter Item Price' name='itemPrice' value={state.itemPrice} onChange={itemData}/> */}
      <button onClick={addItem}>Add</button>

      <ul>
        {state.Items.map((item,i)=>(
        <li key={i}>
            {item.itemName}{item.itemPrice}
            <button onClick={()=>removeItem(item.itemName)}>Remove</button>
        </li>
        ))}
      </ul>
    </>
  )
}

export default App


