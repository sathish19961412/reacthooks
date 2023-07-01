import { useState } from "react";

const AddUserForm =(props)=>{
    const initalFormState ={id:null,name:'',username:''}
    const [user,setUsers]=useState(initalFormState);
    const handleInputChange =(event)=>{
        const {name,value}=event.target
        setUsers({...user,[name]:value})
    }
    return(
        <form onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.addUser(user);
                setUsers(initalFormState);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} className="form-control" name="name" value={user.name} />
            <label>Username</label>
            <input type="text" onChange={handleInputChange} className="form-control"  name="username" value={user.username} />
            <button className="btn btn-success mt-3">Add new user</button>
        </form>
    )
}

export default AddUserForm;