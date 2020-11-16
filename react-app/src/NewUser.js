import { useState } from "react";

function NewUser(user) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [belt, setBelt] = useState("")
    /*const [utilisateur, setUser] = useState({
        name: '',
        age: '',
        belt:''
    })*/

    let handleSubmit = async(e) => {
        e.preventDefault();
        user.addUtilisateur({name: name, age: parseInt(age), belt:belt})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={(event) => {
                    setName(event.target.value);
                }} />
                <label htmlFor="name">Age: </label>
                <input type="text" id="age" onChange={(event) => {
                    setAge(event.target.value);
                }} />
                <label htmlFor="name">Belt: </label>
                <input type="text" id="belt" onChange={(event) => {
                    setBelt(event.target.value);
                }} />
                <button>Envoyer</button>
            </form>
        </div>
    );
}

export default NewUser;