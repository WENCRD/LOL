import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Champion from "../Services/Champion";
import ChampionCard from "../Components/ChampionCard";



const HomePage = () => {
   
    const [champion, setChampion] = useState([]);

    const fetchCharacter = async () => {
        try {
            const response = await Champion.getAllChampion();           
            setChampion(response.data.data);
            console.log(response.data.data);

            
        }catch (error) {    
                  
        }
        }

        useEffect(() => {
                fetchCharacter();
            }, []);


    return <Container className="d-flex flex-column align-items-center gap-4">
        <h1>League Of Legend</h1>
    

    <div id="champs" className="d-flex justify-content-center flex-wrap gap-5 ">
   {Object.entries(champion).map((champion) => {
        return <ChampionCard championCard={champion[1]} key={champion[1].name}></ChampionCard>
    })};
</div>
</Container>;

}

export default HomePage;