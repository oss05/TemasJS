import React, { Component } from 'react';

class Producto extends Component {
    render() { 
    const {nombre , precio} = this.props.producto;
        return (
            <div>
                <p>nombre: {nombre}</p>
                <p>precio: ${precio}</p>
            </div>

          );
    }
}
 
export default Producto;