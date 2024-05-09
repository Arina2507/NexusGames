import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import sidebarReducer from "./sidebarSlice";

const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        sidebar: sidebarReducer
    }
});

export default store;