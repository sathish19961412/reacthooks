import {useState} from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from './tables/UserTables';
import EditUserForm from "./forms/EditUserForm";

function App() {
  const usersData=[
      {id:1,name:'sathish',username:'CZ12'},
  ];

  const addUser =(user)=>{
     user.id = users.length+1;
     setUsers([...users,user])
  }

  const deleteUser =(id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
  }

  const [users,setUsers] = useState(usersData);
  const [editing,setEditing]=useState(false);
  const initalFormState ={id:null,name:'',username:''}
  const [currentUser,setCurrentUser]=useState(initalFormState);

  const editRow =(user)=>{
      setEditing(true);
      setCurrentUser({id:user.id,name:user.name,username:user.username});
  }

  const updateUser =(id,updateUser)=>{
       setEditing(false);
       setUsers(users.map((user)=>(user.id===id?updateUser:user)))
  }

  return (
    <>
    <section>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="text-center">
              <h1>Crud App In Hooks</h1>
          </div>
        </div>
      </div>
      <div className="row mt-5">
          <div className="col-md-6">
            {editing?(<div>
                        <h2>Edit User</h2>
                        <EditUserForm
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                        
                      />
                    </div>):(<div>
                          <h2>Add User</h2>
                          <AddUserForm  addUser={addUser} />
                          </div>
                    )
            }
             
          </div>
          <div className="col-md-6">
                <div className="flex-large-2">
                    <h2>View User</h2>
                    <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
                </div>
          </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default App;
