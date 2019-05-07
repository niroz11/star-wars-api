export const favoriteReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_FAVORITE":
        if(state.includes(action.card)){
            console.log("fav cliked")
            return state.filter(card => card !== action.card)
        }else {
            console.log("fav cliked")
            return [...state, action.card]}
        default:
            return state
    }
}