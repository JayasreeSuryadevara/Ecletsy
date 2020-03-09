import React from 'react';

class ProductForm extends React.Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }

    componentDidMount() {
        if (this.props.formType === 'update'){
            this.props.fetchProduct(this.props.match.params.id)
        }
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const product = Object.assign({}, this.state);
        this.props.action(product);
    }

    renderErrors() {
        let { errors } = this.props;
        if (errors) {
            errors = this.props.errors.map((error, idx) => {
                return (<li key={`error-${idx}`}>{error}</li>)
            });
        }
        return (<ul> {errors} </ul>);
    }

    render(){
        return(
            <div>
                <form className="product-create-update-form" onSubmit={this.handleSubmit}>
                    <div className="product-action-title">
                        <h2 className="product-form-title"> {this.props.formTitle} </h2>
                    </div>
                    <br />
                    {/* {this.renderErrors()} */}
                    <br />
                    <div className="product-form">
                        <br />
                        <label>Product Name</label>
                        <br />
                        <input required type="text"
                            value={this.state.product_name	}
                            onChange={this.update('product_name')}
                            className="product-form-input"
                        />
                        <br />
                        <label>Desc</label>
                        <br />
                        <textarrea required 
                            rows="5"
                            cols="30"
                            value={this.state.desc}
                            onChange={this.update('desc')}
                            className="product-form-input"
                        />
                        <br />
                        <label>Price</label>
                        <br />
                        <input required type="number"
                            min="0.00"
                            max="1000.00"
                            step="0.01"
                            value={this.state.price}
                            onChange={this.update('price')}
                            className="product-form-input"
                        />
                        <br />
                        <div className="product_button_container">
                            <input type="submit"
                                value={this.props.buttonType}
                                className="product_button_submit" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

// var searchNames = ['Sydney', 'Melbourne', 'Brisbane',
//     'Adelaide', 'Perth', 'Hobart'];
// //...
// <DropdownInput
//     options={searchNames}
//     defaultValue={this.props.initialValue}
//     menuClassName='dropdown-input'
//     onSelect={this.handleSelectName}
//     placeholder='Search...'
// />