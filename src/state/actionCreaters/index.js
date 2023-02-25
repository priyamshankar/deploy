export const slider = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"slider",
            payload : amount
        })
    }
}

export const alertCloseBtn = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"alertCloseBtn",
            payload : amount
        })
    }
}
