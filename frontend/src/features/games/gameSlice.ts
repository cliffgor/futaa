import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Game } from "../../interfaces/Game";
import axios from "axios";

interface GameState {
    games: Game [] | null;
    loading: boolean;
    singleGame: Game | null;
    errors:any,
}

const initialState: GameState = { 
    games: [],
    singleGame: null,
    loading: false,
    errors:null
}


// actions are processes that get data from backend

export const getGames = createAsyncThunk<Game[]> (
    "games/getGames",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/api/games")
            return response.data;
        }catch (error){
            return thunkAPI.rejectWithValue(error)
        }
    } 
    );
    
    export const createGame = createAsyncThunk<Object, Game>(
        "games/createGame",
        async (data, thunkAPI) => {
            try {
                const response = await axios.post("http://localhost:/8080/api/games/game", data)
                thunkAPI.dispatch(getGames())
                return response.data
            } catch (error) {
                return thunkAPI.rejectWithValue(error)
            }
        }

    )

// reducers  -> reduce to a specific state/ changes state
export const gameSlice = createSlice({
    name:"games",
    initialState,
    reducers:  {
        setGames: (state, action: PayloadAction<Game[]>) => {
            state.games = action.payload
        }
    }, 

    // If the process is pending we should not show any games to our app
    extraReducers: (builder) => {
        builder.addCase(getGames.pending, (state) => {
            state.loading = true 
        })

    // If the process is loading and the games are found the 
    // we set the state action to false which would have finished loading and displayed the games
        builder.addCase(getGames.fulfilled, (state, action) => {
            state.games =  action.payload
            state.loading = false
        })
        builder.addCase(getGames.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload
        })
    }
})

export default gameSlice.reducer;
export const { setGames } = gameSlice.actions;

// A slice has to have the interface if the state