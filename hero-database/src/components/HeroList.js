import HeroListItem from "./HeroListItem";
import { useState, useEffect } from "react";
import axios from "axios";
const HeroList = () => {
    // Fetch the information from the server
    // Set that using state
    //Then map state and return a proper <ul>
    const [heroList, setHeroList] = useState([]);
    useEffect(()=>{
        axios.get("/heroes")
        .then((response)=>{
            setHeroList(response.data);
        });
    }, [])
    return (
        <div>
            <h2>Welcome to our Hero Database!</h2>
            <ul>
                {heroList.map((heroElement)=>{
                    return(
                        // Return the component
                        <HeroListItem
                            key={heroElement.id}
                            individualHeroName={heroElement.name}
                        />
                    )
                })}
            </ul>
        </div>
    )
};

export default HeroList;