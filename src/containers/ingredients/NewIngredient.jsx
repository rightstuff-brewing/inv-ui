
import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, Modal} from 'react-bootstrap';

class NewIngredient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.getValidationState = this.getValidationState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getValidationState(controlId) {
        if (controlId === 'ingredientName') {
            return 'success';
        }
        else if (controlId === 'ingredientType') {
            return 'success';
        }
        else if (controlId === 'ingredientUrl') {
            return 'success';
        }
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
                            controlId="ingredientName"
                            validationState={this.getValidationState('ingredientName')}
                        >
                            <ControlLabel>Ingredient Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter the name of the ingredient"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>The name of the ingredient.</HelpBlock>
                        </FormGroup>
                        <FormGroup
                            controlId="ingredientType"
                            validationState={this.getValidationState('ingredientType')}
                        >
                            <ControlLabel>Ingredient Type</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="malt">Malt</option>
                                <option value="hop">Hops</option>
                                <option value="yeast">Yeast</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup
                            controlId="ingredientUrl"
                            validationState={this.getValidationState('ingredientUrl')}
                        >
                            <ControlLabel>Ingredient Source Url</ControlLabel>
                            <FormControl 
                                type="text"
                                placeholder="Enter the manufacturer URL for the Ingredient."
                            />
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