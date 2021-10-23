import { useEffect } from "react";
import Sawo from "sawo";
// import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from "../actions/userActions";
import { useSelector } from "react-redux"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const Login = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        var config = {
            containerID: "sawo-container",
            identifierType: "email",
            apiKey: API_KEY,
            onSuccess: (payload) => {
                console.log("Payload : " + JSON.stringify(payload));
                dispatch(login(payload.identifier, payload.user_id))
            },
        };
        let sawo = new Sawo(config);
        sawo.showForm();

    }, [dispatch, API_KEY]);

    return (
        <div className="containerStyle">
            <h2 className={"title"}>{user ? "Update Profile" : "Login"}</h2>
            {user && <>
                <Container className="w-md-50">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>

            </>}
            <div className={user ? "hide" : "show"}>
                <div className={"formContainer"} id="sawo-container"></div>
            </div>
        </div>

    );
};

export default Login;