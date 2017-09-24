
import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, Modal} from 'react-bootstrap';

class NewIngredient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.getValidationState = this.getValidationState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getValidationState() {
        return 'success';
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>New Ingredient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>Ingredient Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>The name of the ingredient.</HelpBlock>
                        </FormGroup>
                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default NewIngredient;