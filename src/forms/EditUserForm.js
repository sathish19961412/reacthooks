import { useEffect, useState } from "react"

const EditUserForm=(props)=>{
     const [user,setUser] =useState(props.currentUser)

     useEffect(()=>{
          setUser(props.currentUser)
     },[props])

     const handleInputChange =(event)=>{
         const {name,value}=event.target
         setUser({...user,[name]:value})
     }

     return(
        <form onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} className="form-control" name="name" value={user.name} />
            <label>Username</label>
            <input type="text" onChange={handleInputChange} className="form-control"  name="username" value={user.username} />
            <button className="btn btn-primary mt-3">Update user</button>
            <button onClick={()=>{
                props.setEditing(false)
            }} className="btn btn-danger mt-3">Cancle</button>
        </form>
    )
}

export default EditUserForm;