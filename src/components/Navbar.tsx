import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <Button style={{ width: "3rem", height: "3rem", position: "relative"}}
                    variant="outline-primary" className="rounded-circle"
            >
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 509.49 509.49">
                    <g>
                        <g>
                            <rect x="255.51" y="236.487" width="113.22" height="59.882"/>
                            <polygon points="224.91,135.514 132.743,135.514 139.597,205.891 224.91,205.891 		"/>
                            <polygon points="224.91,296.369 224.91,236.491 142.578,236.491 148.41,296.369 		"/>
                            <polygon points="224.91,45.029 123.93,45.029 129.762,104.914 224.91,104.914 		"/>
                            <polygon points="399.33,296.369 460.529,296.369 472.195,236.491 399.33,236.491 		"/>
                            <rect x="255.51" y="45.029" width="113.22" height="59.881"/>
                            <rect x="255.51" y="135.514" width="113.22" height="70.377"/>
                            <polygon points="399.33,104.914 497.826,104.914 509.49,45.029 399.33,45.029 		"/>
                            <polygon points="399.33,205.891 478.156,205.891 491.865,135.514 399.33,135.514 		"/>
                            <polygon points="92.122,29.729 0,29.729 0,60.33 63.939,60.33 88.419,357.571 460.529,357.571 460.529,326.972 116.602,326.972
                                "/>
                            <circle cx="136.935" cy="433.096" r="46.665"/>
                            <circle cx="404.686" cy="433.096" r="46.665"/>
                        </g>
                    </g>
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                     style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)"}}
                >3</div>
            </Button>
        </Container>
    </NavbarBs>
}