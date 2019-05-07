import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer";
import { planetReducer } from "./planetReducer";
import { vehicleReducer } from "./vehicleReducer";
import { clickReducer } from "./clickReducer"
import { favoriteReducer } from "./favoriteReducer";

export const rootReducer = combineReducers({
    people: peopleReducer,
    planets: planetReducer,
    vehicles: vehicleReducer,
    clickedBtn: clickReducer,
    favorites: favoriteReducer
})