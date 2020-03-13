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
        console.log("state in vendor form", this.state);
        const vendor = Object.assign({}, this.state);
        console.log("vendor in vendor form", vendor);
        this.props.createVendor(vendor).then(payload => {
            this.props.history.push(`/vendors/${vendor.id}`)
        })
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleFile(event) {
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ imageFile: file, image_url: fileReader.result });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        // const preview = this.state.image_url
        //     ? <img src={this.state.image_url} />
        //     : null;

        let { errors } = this.props;

        return (
            <div className="vendor-form-container">
                <form onSubmit={this.handleSubmit} className="vendor-form">

                    <div className="vendor-errors">
                        {errors}
                    </div>

                    <div className="vendor-name">
                        <h2> Create your own store</h2>
                        <label htmlFor="name">
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
                    {/* <div className="vendor-image-upload">
                        <label htmlFor="vendor-image">Add your Store's logo here</label>
                        <br />

                        <div className="image-preview">
                            {preview}
                        </div>

                        <input type="file" id="vendor-image" onChange={this.handleFile} />
                    </div> */}

                    <input type="submit" className="vendor-create-btn" value="Save and continue" />
                </form>
            </div>
        )
    }
}

export default withRouter(VendorForm);