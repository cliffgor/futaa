import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/games/gameSlice"

export const store = configureStore({
    reducer: {
        games:gameReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// dispatch is a function of the Redux store.
//  You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
