import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id,setId]=useState(1)
  const[idFromBtnClick,setIdFromBtnClick]=useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[idFromBtnClick]);

  const handleClick=()=>{
      setIdFromBtnClick(id)
  }
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Post</button>
      <ul>
        {/* {post.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))} */}
        <div>{post.title}</div>
      </ul>
    </div>
  );
}

export default DataFetching;
