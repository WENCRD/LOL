import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ItemsCard = ({ itemsCard }) => {
    const navigate = useNavigate();

    const navigateTo = (name) => {
        navigate("/items/" + name, { state: { items: itemsCard } });
    }

    return <>
        <Card style={{ width: '10rem' }} onClick={() => { navigateTo(itemsCard.name) }}>
            <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/" + itemsCard.image.full} />
            <Card.Body>
                <Card.Title >{itemsCard.name}</Card.Title>
                <Button variant="secondary" size="1vw" className='d-flex align-items-center '>Voir plus</Button>
            </Card.Body>
        </Card>
    </>;
};

export default ItemsCard; 
