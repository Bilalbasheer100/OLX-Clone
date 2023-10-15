import { createContext,useState } from "react";
import * as React from 'react'
export const PostContext=createContext(null)

function Post({children}){
    const[postDetails,setPostDetails]=useState(null)

    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    );

}




export default Post;
