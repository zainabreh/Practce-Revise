const redux = require('redux');

const init = {
    counter: 0,
}
const reducer = (store = init,action)=>{
    // let newval = store;
    if(action.type == 'INC'){
        store = {counter: store.counter+1}
    }
    else if(action.type == 'DEC'){
        store = {counter: store.counter-1}
    }
    return store
}

const store = redux.createStore(reducer);

const subscriber = ()=>{
    const v =store.getState();
    console.log(v);
}

store.subscribe(subscriber);

store.dispatch({
    type: 'INC',
})
store.dispatch({
    type: 'DEC',
})