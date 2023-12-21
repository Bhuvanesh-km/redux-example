import { useEffect } from "react";
import { fetchUserMiddleWare } from "../redux/middlewares/userMiddleWare";
import { useDispatch, useSelector } from "react-redux";

const User = ()=>{
    //get user data from global store
    const dispatch=useDispatch();
    const {loading,users,error}=useSelector(store => store.userSlice);
    
    useEffect(()=>{
        dispatch(fetchUserMiddleWare());
    });

    if(loading){
        return(
            <div className="loader-container">
                Loading... 
            </div>
        )
    }
    if(users){
        return (  
                users.map(user=>{
                   return ( <div className="userContainer">
                        <div className="id">{user.id}</div>
                        <div className="name">{user.name}</div>
                        <div className="username">{user.username}</div>
                    </div>)
                })
        )
    }
    if(error){
        return(
            <div className="error-container">
                <div></div>
            </div>
        )
    }
}

export default User;