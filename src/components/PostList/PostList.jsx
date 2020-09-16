import React, {Component} from 'react';
import PostItem from '../PostItem/PostItem';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

class PostList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch(postsUrl)
            .then(response => response.json())
            .then(data => this.setState({posts: data}))
    }

    render() {
        return <div>
            {this.state.posts[0] ? <PostItem 
                title={this.state.posts[0].title}
                body={this.state.posts[0].body}
                /> : null}
        </div>
    }
}

export default PostList;