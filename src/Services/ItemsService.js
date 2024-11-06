import axios from "axios";

function getItemsDetails() {
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.21.1/data/fr_FR/item.json");
}
function getChampionItems(id) {
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.21.1/data/fr_FR/item.json");
}

export default {
       getItemsDetails,
       getChampionItems,
}

