import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Champion from "../Services/Champion";


const ChampionDetails = () => {
    const { id } = useParams();
    const [champion, setChampion] = useState([]);


    const fetchChampionByCharacter = async () => {
        try {
            const response = await Champion.getChampionByCharacter(id);

            setChampion(response.data.data[id]);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchChampionByCharacter();
    }, []);

    return <Container className="d-flex flex-column align-items-center gap-3">
        <h1>Détails page de {id}</h1>
        <br />
        <img style={{ width: '80vw' }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + id + "_0.jpg"}
            alt="" />
        <h2>{champion.lore}</h2>
        <div className="d-flex">
            <div className="col-6">
                <h2>Conseil pour les alliés</h2>
                <ul>
                    {champion.allytips && champion.allytips.map((tip) => {
                        return <li key={tip}>{tip} </li>
                    })}
                </ul>
            </div>

            <div className="col-6">
                <h2>Conseil pour les enemis</h2>
                <ul>
                    {champion.enemytips && champion.enemytips.map((tip) => {
                        return <li key={tip}>{tip} </li>
                    })}
                </ul>
            </div>
        </div>
        <h2>Infos</h2>
        <ul>
            <li>Attaque : {champion.info && champion.info.attack}</li>
            <li>Défense : {champion.info && champion.info.defense}</li>
            <li>Difficulté : {champion.info && champion.info.difficulty}</li>
            <li>Magie : {champion.info && champion.info.magic}</li>
        </ul>
        <h2>Passif :</h2>
        {champion.passive && <>
            <h3>{champion.passive.name}</h3>
            <div className="col-flex">
                <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/" + champion.passive.image.full} alt="" />
                <p>{champion.passive.description}</p>
            </div>
        </>}
        {champion.spells && champion.spells.map((spell) => {
            return <>
            <h3>{spell.name}</h3>
                <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/" + spell.image.full} alt="" />
                <p>{spell.description}</p>
            </>
        })}

{champion.spells && Object.entries(champion.stats).map((key) => {   
    return <span>{key[0]} ={">"} {key[1]}</span>   
})}  
    </Container>;


}

export default ChampionDetails;