
const UserTable =()=>(
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
      <tr>
        <td>New data</td>
        <td>Userdata</td>
        <td colspan='2'>
            <button className="btn btn-sm btn-info">Edit</button>
            <button className="btn  btn-sm btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  </>

);

export default UserTable;