import React from 'react'
import { Box } from '@mui/material';
import TitleHeader from '../Global/TitleHeader';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Android = () => {
    const InputStyle = {
        width: "100%",
        border: "1px solid #7E7E7E",
        background: "#EDEFF5",
        padding: "0.6rem 1rem",
        borderRadius: "0rem"
    }
    return (
        <Box sx={{ padding: "2rem 1rem 3rem" }}>
            <TitleHeader title="Mange Ads/Android" />
            <Box style={{
                display: 'block',
                width: 700,
                innerHeight: "4rem",
                padding: "0rem 2rem",
            }}>
                <Form>
                    <Form.Group>
                        <Form.Label>Add Status </Form.Label>
                        <br />
                        <select style={InputStyle} >
                            <option value="On">On</option>
                            <option value="Off">Off</option>
                        </select><br /><br />
                        <Form.Label>Banner Ads</Form.Label>
                        <Form.Control
                            style={InputStyle}
                            type="text"
                            placeholder="banner ads" />
                    </Form.Group> <br />
                    <Form.Group>
                        <Form.Label>Interstitial Ads</Form.Label>
                        <Form.Control
                            style={InputStyle}
                            type="text"
                            placeholder="interstitial ads" />
                    </Form.Group> <br />
                    <Form.Group>
                        <Form.Label>Native Ads</Form.Label>
                        <Form.Control
                            style={InputStyle}
                            type="text" placeholder="Enter your age" />
                    </Form.Group> <br />
                    <Form.Group>
                        <Form.Label>Reward Ads</Form.Label>
                        <Form.Control
                            style={InputStyle}
                            type="text"
                            placeholder="Reward Ads" />
                    </Form.Group><br />
                    <Form.Group>
                        <Form.Label>Open App Ads</Form.Label>
                        <Form.Control
                            style={InputStyle}
                            type="text"
                            placeholder="Open App Ads" />
                    </Form.Group><br /><br />
                    <Button
                        style={{ backgroundColor: "#59167C", border: "none", padding: "0.5rem 3rem" }}
                    >
                        Save
                    </Button>
                </Form>
            </Box>
        </Box>
    )
}

export default Android;
