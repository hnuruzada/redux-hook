const initialValue={
    count:0,
    inputValue:""
}


export const counterReducer=(state=initialValue,action)=>{
switch (action.type) {
    case "INCREMENT":
        return{
            ...state,
            count:state.count+1
        }
        
    case "DECREMENT":
        return{
            ...state,
            count:state.count-1
        }
    case "SET_INPUT":
        return{
            ...state,
            inputValue:action.payload
        }
    case "INCREMENT_BY_USER":
        return{
            ...state,
            count:state.count + Number(action.payload),
            inputValue:""
        }
    default:
        return state
}
}