import React from 'react';
import './Ingredients.css'

function Ingredients() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Type</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Crisp Malt Wheat</td>
                    <td>Malt</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Ingredients;