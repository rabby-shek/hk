import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Submenu1 from './components/Submenu1';
import Submenu2 from './components/Submenu2';


function App() {
  const [user, setUser] = useState([]);
  const [active, setActive] = useState("Firstcard");

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className="App">
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hishab Kitab</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=> setActive("Firstcard")} >Home</Nav.Link>
            <Nav.Link href="#link" onClick={()=> setActive("secondcard")}>Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"  onClick={()=> setActive("thirdcard")}>
                submenu 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"  onClick={()=> setActive("fourthcard")}>submenu 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                submenu 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container inside_nav'>
    {active === "Firstcard" && <Home />}
    {active === "secondcard" && <Contact />}
    {active === "thirdcard" && <Submenu1 />}
    {active === "fourthcard" && <Submenu2 />}

    </div>
    <h1 className='container'>Customer List</h1>
      <Table className='container'>
      <thead>
        <tr>
          <th>id</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Customer Contact</th>
          <th>Customer Nid</th>
          <th>Edit</th>
          <th>View</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>

      
        {user && user.length > 0 && user.map((userObj, index) => (
            <tr >
            <td>{userObj.id}</td>
          <td>{userObj.name}</td>
          <td>{userObj.email}</td>
          <td>{userObj.phone}</td>
          <td>@mdo</td>
          <td><Button variant="warning">Edit</Button></td>
          <td><Button variant="danger">view</Button></td>
          <td><Button variant="danger">Delete</Button></td>
            
            </tr>
            
          ))}
          </tbody>
      </Table>
      <Pagination className='container'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

   

    

    </div>


  );
}

export default App;
