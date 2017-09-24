import React from 'react';
import {Button, Table} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    createIngredient
} from '../../modules/ingredients';
import NewIngredient from './NewIngredient';

import './Ingredients.css'

class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.submitIngredient = this.submitIngredient.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    submitIngredient(input) {
        this.props.createIngredient(input);
        if (this.state.showModal) {
            this.close();
        }
    }   
    
    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th className="center">Ingredient</th>
                            <th className="center">Type</th>
                            <th className="center">URL</th>
                            <th className="center">Admin Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Traverse ingredients array */}
                        {this.props.ingredients.map((ingredient, i) => (
                        <tr key={i}>
                            <td>{ingredient.name}</td>
                            <td>{ingredient.type.displayName}</td>
                            <td className="center">
                                <a href={ingredient.url} target="_blank">URL</a>
                            </td>
                            <td className="right">
                                <Button bsStyle="primary">Edit</Button>
                                <Button bsStyle="danger">Delete</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
                <Button bsStyle="success" onClick={this.open}>Create</Button>

                <NewIngredient show={this.state.showModal} close={() => this.close()} submit={(input) => this.submitIngredient(input)} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients.ingredients
});

const mapDispatchToProps = dispatch => bindActionCreators({
    createIngredient
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ingredients);