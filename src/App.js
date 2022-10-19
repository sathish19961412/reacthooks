import UserTable from './tables/UserTables';
function App() {
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
                    <h2>Add User</h2>
          </div>
          <div className="col-md-6">
                <div className="flex-large-2">
                    <h2>View User</h2>
                    <UserTable></UserTable>
                </div>
          </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default App;
