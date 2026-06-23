import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import postReducer from "./postSlice";

export const store = configureStore({

    reducer: { movies: movieReducer, posts: postReducer }

});