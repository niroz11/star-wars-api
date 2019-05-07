export const clickReducer = (state=[],action) => {
    switch(action.type){
        case "GET_CLICKED":
            return action.value
        default: 
            return state

    }
}