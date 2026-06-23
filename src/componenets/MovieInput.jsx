import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";
import { Input, Button, Space } from "antd";

export const MovieInput = () => {
    const [newMovie, setnewMovie] = useState("");
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        if (!newMovie.trim()) return;
        dispatch(addMovie(newMovie));
        setnewMovie("");
    }

    return (
        <Space.Compact style={{ width: '100%', marginBottom: 32 }}>
            <Input
                value={newMovie}
                onChange={(e) => setnewMovie(e.target.value)}
                onPressEnter={handleAddMovie}
                placeholder="Add a new user"
            />
            <Button type="primary" size="large" onClick={handleAddMovie}>Add</Button>
        </Space.Compact>
    );
}