import { useEffect, useState } from "react";
import Sawo from "sawo";
// import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from "../actions/userActions";
import { useSelector } from "react-redux"
import { Container, Row, Col, Form, Button } from "react-bootstrap"


const Login = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const { user } = useSelector(state => state.auth);

    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [title, setTitle] = useState("");
    let [phonenumber, setPhonenumber] = useState("");
    let [address, setAddress] = useState("");

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


    const handleSubmit = () => {

    }
    return (
        <div className="containerStyle">
            <h2 className={"title"}>{user ? "Update Profile" : "Login"}</h2>
            {user && <>
                <Container style={{ maxWidth: "768px" }}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={user.email} readOnly />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                            Submit
                        </Button>
                    </Form>
                </Container>

            </>}
            <div className={user ? "hide" : "show"}>
                <div className={"formContainer"} id="sawo-container"></div>
            </div>
        </div >

    );
};

export default Login;