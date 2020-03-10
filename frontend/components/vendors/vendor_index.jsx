import React from 'react';
import { Link } from 'react-router-dom';

class VendorIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const vendors = Object.values(this.props.vendors);
        const vendorList = vendors.map(vendor => {
            return (
                <li className='product-index-item' key={`product-${vendor.id}`}>
                    <Link to={`/vendors/${vendor.id}`}>
                        <div className='vendor-index-image'>
                            <img src={vendor.image_url} />
                        </div>
                    </Link>
                </li>
            );
        });

        return (
            <div className="vendor-index-container">
                <ul className="vendor-index-ul">
                    {vendorList}
                </ul>
            </div>
        );
    }
};

export default VendorIndex;