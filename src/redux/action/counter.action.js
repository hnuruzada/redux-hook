
export const incrementAction=()=>{
    return{
        type:"INCREMENT"
    }
}
export const decrementAction=()=>{
    return{
        type:"DECREMENT"
    }
}

export const setInputValueAction=(value)=>{
    return{
        type:"SET_INPUT",
        payload:value
    }
}

export const incrementByUserAction=(value)=>{
    return{
        type:"INCREMENT_BY_USER",
        payload:value

    }
}