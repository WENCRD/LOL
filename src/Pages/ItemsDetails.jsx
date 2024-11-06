import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemsService from "../Services/ItemsService";
import ItemsCard from "../Components/ItemsCard";
const ItemsDetails = () => {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const handleChange = (event) => {
        setSearchValue(event.currentTarget.value);
    }
    const fetchItemsByCharacter = async () => {
        try {
            const response = await ItemsService.getItemsDetails();

            const res = Object.entries(response.data.data);
            res.sort((a, b) => {
                return a[1].name.localeCompare(b[1].name);
            })
            // response.data.data.sort((a,b) => a.name.localeCompare(b.firstname))
            setItems(res);
            setFilteredItems(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchItemsByCharacter();
    }, []);

    useEffect(() => {
        setFilteredItems(items.filter((item) => {
            return item[1].name.toLowerCase().includes(searchValue.toLowerCase());
        }))
    }, [searchValue]);


    return <Container className="d-flex flex-column align-items-center ">
        <h1>Items: </h1>
        <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton Item</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Bottes" value={searchValue} onChange={handleChange} />
            </Form.Group>
        </Form>
        <div className="d-flex flex-wrap">
            {filteredItems.map((items) => {
                return <ItemsCard itemsCard={items[1]} key={items[0]} />
            })}

        </div>


    </Container>;
}
export default ItemsDetails;


