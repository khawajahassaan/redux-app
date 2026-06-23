import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [{ id: "1", name: "The Matrix" }, { id: "2", name: "Interstaller" }]
}

const movieSlice = createSlice({

    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newMovie = { id: state.movies[state.movies.length - 1].id + 1, name: action.payload };
            state.movies.push(newMovie);
        },
        removeMovie: (state, action) => {
            const id = action.payload;
            state.movies = state.movies.filter((movie) => movie.id !== id)
        }
    }
});


export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;