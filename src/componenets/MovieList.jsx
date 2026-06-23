import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie, fetchMoviesFromAPI } from "../movieSlice";
import { List, Button, Typography, Spin } from "antd";

export const MovieList = () => {

    const { movies, status } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMoviesFromAPI());
        }
    }, [status, dispatch]);

    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
    }

    if (status === 'loading') {
        return <div style={{ textAlign: 'center', padding: '20px' }}><Spin size="large" /></div>;
    }

    return (
        <List
            locale={{ emptyText: "No movies added yet." }}
            dataSource={movies}
            renderItem={(movie) => (
                <List.Item
                    key={movie.id}
                    actions={[<Button danger onClick={() => handleRemoveMovie(movie.id)}>Remove</Button>]}
                >
                    <Typography.Text>{movie.name}</Typography.Text>
                </List.Item>
            )}
        />
    );
};
