import React from 'react';
import { withRouter } from 'react-router-dom';

class VendorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vendor_name: "",
            owner_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        formData.append('vendor[vendor_name]', this.state.vendor_name);
        formData.append('vendor[owner_id]', this.state.owner_id);

        if (this.state.imageFile) {
            formData.append('vendor[photo]', this.state.imageFile);
        }

        this.props.createVendor(formData).then(payload => {
            const { vendor } = payload;
            this.props.history.push(`/vendors/${vendor.id}`);
        })       
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
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

    render() {

        const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
        return (
            <div className="vendor-form-container">
                <form onSubmit={this.handleSubmit} className="vendor-form">

                    <div className="vendor-name">
                        <h2> Create your own store</h2>
                        <label>
                            Name your Store
                        </label>
                        <br />
                        <div className="vendor-name-input">
                            <input
                                required
                                type="text"
                                value={this.state.vendor_name}
                                onChange={this.update('vendor_name')} />
                        </div>
                    </div>
                    <br />
                    <div className="vendor-image-upload">
                        <label htmlFor="vendor-image">Add your Store's Image here</label>
                        <br />
                        <div className="image-preview">
                            {preview}
                        </div>
                        <input type="file" id="vendor-image" onChange={this.handleFile} />
                    </div>

                    <input type="submit" className="vendor-create-btn" value="Save and continue" />
                </form>
            </div>
        )
    }
}

export default withRouter(VendorForm);