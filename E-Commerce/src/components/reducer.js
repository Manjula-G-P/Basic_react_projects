export const intialState={
    basket:[],
}

const reducer=(state,action)=>{
    console.log("action****",action)
    console.log("state****",state)
    switch(action.type){
        
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }

        case "REMOVE_FROM_CART":
            let newcart=[...state.basket]
            console.log("newcart****",newcart)

            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            console.log("index***",index)
            if(index>=0){
                newcart.splice(index,1)
            }
            else{
                console.log("sorry some issue were happening while removing")
            }
            return({...state,basket:newcart})

    }
}

export default reducer