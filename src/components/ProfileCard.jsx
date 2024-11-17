import { Greeting } from "./Greeting";

export const ProfileCard = (props) =>{
    console.log(props);
    const { name, age, hobbies, msg } = props.data;
    return(
        <li>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <Greeting msg={msg}/>
        <p>Hobbies: {hobbies}</p>
        <a href="#" target="_blank" rel="noopener noreferrer"><button>Contact</button></a>
        </li>
    )
} 