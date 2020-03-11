import React from 'react';

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
        const vendor = Object.assign({}, this.state);
        this.props.createVendor(vendor);
        this.props.history.push(`/vendors/${vendor.id}`);
    }

    update(field) {
        return event => {
            this.setState({ [field]: event.target.value });
        };
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
            <div>
                <form onSubmit={this.handleSubmit} className="vendor-form">

                    <div className="vendor-errors">
                        {errors}
                    </div>

                    <div className="vendor-name">
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

                    <button className="vendor-create-btn">Save and continue</button>
                </form>
            </div>
        )
    }
}

export default VendorForm;