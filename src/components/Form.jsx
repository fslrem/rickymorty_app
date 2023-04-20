import { useState } from "react";
import validation from "./validation";

const Form = ({login})=>{
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <hr />
            <button disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>
        </form>
        </div>
        
    )
}

export default Form;