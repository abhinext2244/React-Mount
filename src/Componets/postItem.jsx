import React from "react";
function Postitem({post}) {
    return (
        <div style={{border:"1px solid red",margin:"20px"}}>
        <p>Title{post.title}</p>
        <p>UserId:-{post.userId}</p>
        <p>ID:{post.id}</p>
        </div>
    )
}
export default Postitem;