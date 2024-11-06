import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ChampionCard  = ({ championCard }) => {
    const navigate = useNavigate();

    const navigateTo = (id) => {
        navigate("/champion/" + id);
    }

    return (
    <>
        <Card style={{ width: '11rem' }} onClick={() => { navigateTo(championCard.id) }}>
            <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championCard.id + "_0.jpg"} />
            <Card.Body>
                <Card.Title >{championCard.name}</Card.Title>
                {/* <Card.Text>
                    {championCard.blurb}
                </Card.Text>*/}
                <Button variant="secondary" size="1vw" className='d-flex align-items-center '>EXPLORER</Button>
            </Card.Body>
        </Card>
    </>
    );
};

export default ChampionCard ;