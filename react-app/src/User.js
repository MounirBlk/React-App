function User({users, deleteUser}) {
    /*const usersList = users.map(user => {
        if(user.age > 20){
            return (
                <div className="User" key={user.id}>
                    <div>Name: {user.name}</div>
                    <div>Age: {user.age}</div>
                    <div>Belt: {user.belt}</div>
                </div>
            );
        }else{
            return null
        }
    })*/
    return (
        <div className="users-list">
            { 
                users.map(user => {
                    return user.age > 20 ? (
                        <div className="User" key={user.id}>
                            <div>
                                Name: {user.name} - Age: {user.age} - Belt: {user.belt} 
                                <button onClick={() => {deleteUser(user.id)}}>Delete</button>
                            </div> 
                        </div>
                    ) : null;
                })
            }
        </div>
    );
}

export default User;