function Profile({ name, age, active }) {
    return (
        <div className="Profile">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Active: {active}</div>
        </div>
    );
}

export default Profile;