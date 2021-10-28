import React,{createContext,useContext,useReducer} from "react";

//preparing a data layer
export const StateContext=createContext();


//wrap our components ,provide the provider
export const StateProvider=({reducer,intialState,children})=>(
    
    <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}
    </StateContext.Provider>

);


//this is how we can use it inside of a component
export const useStateValue=()=>useContext(StateContext);