import { ProfileCard } from "./ProfileCard";
import profileData from "../api/profileData.json";

export function Profile(){
    return (
        <ul>
        <h1>Profile Card Challenege</h1>
        {profileData.map((curElem) => (
        <ProfileCard key={curElem.id} data={curElem} />
        ))} 
        </ul>
    )
}