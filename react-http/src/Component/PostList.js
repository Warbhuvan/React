import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    //Get Request
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
      const{post}=this.state
    return <div>List of posts
        {
            post.length ?
            post.map(a=> <div key={a.id}>{a.title}</div>):
            null
        }
    </div>;
  }
}

export default PostList;
