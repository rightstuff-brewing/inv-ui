import React from 'react';
import {Button, Table} from 'react-bootstrap';
import NewIngredient from './NewIngredient';
import './Ingredients.css'

class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    
    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th className="center">Ingredient</th>
                            <th className="center">Type</th>
                            <th className="center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Crisp Malt Wheat</td>
                            <td>Malt</td>
                            <td>
                                <Button bsStyle="primary">Edit</Button>
                                <Button bsStyle="danger">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <br />
                <Button bsStyle="success" onClick={this.open}>Create</Button>

                <NewIngredient show={this.state.showModal} close={() => this.close()} />
            </div>
        );
    }
}

export default Ingredients;