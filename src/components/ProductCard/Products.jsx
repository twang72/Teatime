import DRINKS_DATA from '../../drinks-data.json'
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import { FaRegHeart } from 'react-icons/fa';
import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink } from 'reactstrap'

const Products = () => {
    return (
        <Container style={{
            whiteSpace: "nowrap",
            padding: "50px"
        }}>
            <Row>
                {DRINKS_DATA.map(({ id, name, price, imageUrl }) => (
                    <Col key={id}>
                        <NavLink
                            tag={RouterNavLink}
                            to={`/products/${id}`}
                            activeClassName="selected"
                            style={{
                                padding: 0
                            }}
                        >
                            <img
                                width="200px"
                                height="280px"
                                src={imageUrl} alt={`${name}`} />
                        </NavLink>
                        <h3>{name}</h3>
                        <div>
                            <h5>${price}  <FaRegHeart /></h5>
                        </div>
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