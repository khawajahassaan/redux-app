import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postSlice";
import { Input, Button, Space } from "antd";

export const PostInput = () => {
    const [newPost, setnewPost] = useState("");
    const dispatch = useDispatch();

    const handleAddPost = () => {
        if (!newPost.trim()) return;
        dispatch(addPost(newPost));
        setnewPost("");
    }

    return (
        <>
            <h1 className="title">DummyJSON Posts List</h1>
            <Space.Compact style={{ width: '100%', marginBottom: 32 }}>
                <Input
                    value={newPost}
                    onChange={(e) => setnewPost(e.target.value)}
                    onPressEnter={handleAddPost}
                    placeholder="Add a new Post"
                />
                <Button type="primary" size="large" onClick={handleAddPost}>Add</Button>
            </Space.Compact>
        </>
    );
}