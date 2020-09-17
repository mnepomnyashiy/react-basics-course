import React, {useState, useEffect} from 'react';
import PostItem from '../PostItem/PostItem';
import Loading from '../Loading/Loading';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(postsUrl)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);

    return <div className="post-list">
        {posts[0] ? posts.map(
            (post) => {
                return <PostItem 
                    key={post.id}
                    title={post.title}
                    body={post.body}
                /> 
            }
        ) : <Loading />}
    </div>
}

export default PostList;