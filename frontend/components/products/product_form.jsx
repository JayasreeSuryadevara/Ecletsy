import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.product;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
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
        const formData = new FormData();

        formData.append('product[product_name]', this.state.product_name);
        formData.append('product[desc]', this.state.desc);
        formData.append('product[price]', this.state.price);
        formData.append('product[vendor_id]', this.state.vendor_id);

        if (this.state.imageFile) {
            formData.append('product[photo]', this.state.imageFile);
        }

        this.props.action(formData).then(payload => {
            console.log("payload in product form", payload);
            const { product } = payload;
            this.props.history.push(`/products/${product.id}`);
        })
    }
    
    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
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
        const { product } = this.props;
        const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
        return(
            <div>
                <form className="product-create-update-form" onSubmit={this.handleSubmit}>
                    <div className="product-action-title">
                        <h2 className="product-form-title"> {this.props.formTitle} </h2>
                    </div>
                    <br />
                    {this.renderErrors()}
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
                        <textarea required 
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
                        <div className="product-image-upload">
                            <label htmlFor="product-image">Load your Product's image here</label>
                            <br />
                            <div className="preview-image">
                                {preview}
                            </div>
                            <br />
                            <input type="file" id="product-image" onChange={this.handleFile} />
                        </div>
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

export default withRouter(ProductForm);
