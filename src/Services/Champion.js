import axios from "axios";

function getAllChampion() {
    return axios.get('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion.json');
}
    

function getChampionByCharacter(id) {
    return axios.get('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion/'+ id +'.json');
}

  export default {
        getAllChampion,
        getChampionByCharacter,        
    }

