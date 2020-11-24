function createStore(){

    //1- Manage state
    //2- get the state
    //3- listen changes the state
    //4- update state

    let state;
    let listeners = [];

    const getState = () => state

    const subscribe = (listener) =>{
        listeners.push(listener);
        return () => {
            listeners.filter((l) => l != listener)
        }
    }

    return {
        state,
        subscribe
    }
}
