import { Game } from "../../interfaces/Game";

interface GameState {
    games: Game [] | null;
    loading: boolean;
    singleGame: Game | null;
}

const initialState: GameState = {
    games: [],
    singleGame: null,
    loading: false
}


// actions are processes that get data from backend

// reducers  -> reduce to a specific state/ changes state