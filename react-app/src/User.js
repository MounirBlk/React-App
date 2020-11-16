function User({users}) {
    const usersList = users.map(user =>{
        return (
            <div className="User" key={user.id}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <div>Belt: {user.belt}</div>
            </div>
        );
    })
    return (
        <div className="users-list">
            { usersList }
        </div>
    );
}

export default User;