import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

export const MovieInput = () => {
    const [newMovie, setnewMovie] = useState("");
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        dispatch(addMovie(newMovie));
        setnewMovie("");

    }
    return (
        <>
            <input value={newMovie} onChange={(e) => setnewMovie(e.target.value)} />
            <button onClick={handleAddMovie}>Add Movie</button>

        </>


    );
}