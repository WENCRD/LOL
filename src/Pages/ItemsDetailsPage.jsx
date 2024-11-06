import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";


const ItemsDetailsPage  = () => {
    const location = useLocation();
    const currentItems = location.state.items;

    console.log(currentItems);

    return <Container className="d-flex flex-column align-items-center">
<h1>{currentItems.name}</h1>
<img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/" + currentItems.image.full} alt="" />
<p>{currentItems.description}</p>
<div>
    {currentItems.into && currentItems.into.map((obj) => {
        return <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+obj+".png"} alt=""/>
    })}
</div>
    </Container>
    
}
 
export default ItemsDetailsPage ;