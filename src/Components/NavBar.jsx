import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {


    return  <>

    <Navbar className="bg-body-tertiary">
        <Container class='navBar'>
          <Navbar.Brand href="">
            <img
              alt=""
              src="R.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
            leagueoflegend
            <Navbar.Collapse  id="basic-navbar-nav"> 
                <Nav className="me-auto">
                        <Link to={"/champion/"}></Link>
                    </Nav>
                <Nav className="me-auto">
                        <Link to={"/"}>Champions</Link>
                    </Nav>
                <Nav className="me-auto">
                        <Link to={"/items"}>Items</Link>
                    </Nav>
            </Navbar.Collapse>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>;
}
 
export default NavBar ;