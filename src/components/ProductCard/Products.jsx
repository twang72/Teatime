import DRINKS_DATA from '../../drinks-data.json'
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Products = () => {
    return (
        <Container style={{
            whiteSpace: "nowrap",
            padding: "50px"
        }}>
            <Row>
                {DRINKS_DATA.map(({ id, name, price, imageUrl }) => (
                    <Col key={id}>
                        <Router>
                            <Link to={`/products/${name}`}>
                                <img
                                    width="200px"
                                    height="280px"
                                    src={imageUrl} alt={`${name}`} />
                            </Link>
                        </Router>
                        <h3>{name}</h3>
                        <h5>${price}</h5>
                        <Button
                            color="primary"
                            className="btn-margin">
                            Add to Cart
                        </Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );

};

export default Products;