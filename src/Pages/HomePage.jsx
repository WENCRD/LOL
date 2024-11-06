import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Champion from "../Services/Champion";
import ChampionCard from "../Components/ChampionCard";



const HomePage = () => {

    const [champion, setChampion] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredChamp, setFilteredChamp] = useState([]);

    const handleChange = (event) => {
        setSearchValue(event.currentTarget.value);
    }
    const fetchCharacter = async () => {
        try {
            const response = await Champion.getAllChampion();

            const result = Object.entries(response.data.data);
            result.sort((a, b) => {
                return a[1].name.localeCompare(b[1].name);
            })

            setChampion(result);
            setFilteredChamp(result);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchCharacter();
    }, []);

    useEffect(() => {
        setFilteredChamp(champion.filter((champ) => {
            return champ[1].name.toLowerCase().includes(searchValue.toLowerCase());
        }))
    }, [searchValue]);


    return <Container className="d-flex flex-column align-items-center gap-4">
        <h1>League Of Legend</h1>

        <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton Item</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Aatrox" value={searchValue} onChange={handleChange} />
            </Form.Group>
        </Form>
        <div id="champs" className="d-flex justify-content-center flex-wrap gap-5 ">
            {filteredChamp.map((champion) => {
                return <ChampionCard championCard={champion[1]} key={champion[1].name}></ChampionCard>
            })};
        </div>
    </Container>;

}

export default HomePage;