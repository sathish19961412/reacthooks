
const UserTable =(props)=>(
    <> 
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length>0?(
          props.users.map((user)=>(
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td colspan='2'>
                  <button onClick={()=>{
                        props.editRow(user)
                  }} className="btn btn-sm btn-info">Edit</button>
                  <button onClick={()=>props.deleteUser(user.id)} className="btn  btn-sm btn-danger">Delete</button>
              </td>
            </tr> 
          ))
          ):(
              <tr>
                 <td colSpan={3}>No Users</td>
              </tr>
          )
        }
     
    </tbody>
  </table>
  </>

);

export default UserTable;