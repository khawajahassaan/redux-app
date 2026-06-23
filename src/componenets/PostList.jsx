import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, removePost } from "../postSlice";
import { List, Typography, Spin, Button } from "antd";

const { Title } = Typography;

export const PostList = () => {

    const { posts, status } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    const handleRemovePost = (id) => {
        dispatch(removePost(id));
    }

    if (status === 'loading') {
        return <div style={{ textAlign: 'center', padding: '20px' }}><Spin size="large" /></div>;
    }

    return (
        <>

            <List
                locale={{ emptyText: "No posts added yet." }}
                dataSource={posts}
                renderItem={(post) => (
                    <List.Item
                        key={post.id}
                        actions={[<Button danger onClick={() => handleRemovePost(post.id)}>Remove</Button>]}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                            <Title level={4}>{post.title}</Title>
                            <Typography.Text>{post.body}</Typography.Text>
                            <Typography.Text underline><b>Likes:</b> {post.reactions?.likes || 0} <b>Dislikes:</b> {post.reactions?.dislikes || 0}</Typography.Text>
                        </div>
                    </List.Item>
                )}
            />
        </>
    );
}
