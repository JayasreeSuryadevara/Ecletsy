import * as VendorApiUtil from '../util/vendor_api_util';

export const RECEIVE_ALL_VENDORS = "RECEIVE_ALL_VENDORS";
export const RECEIVE_VENDOR = "RECEIVE_VENDOR";

const receiveAllVendors = vendors => ({
    type: RECEIVE_ALL_VENDORS,
    vendors
});

const receiveVendor = vendor => ({
    type: RECEIVE_VENDOR,
    vendor
});

export const fetchVendors = () => dispatch => (
    VendorApiUtil.fetchVendors().then(vendors => (
        dispatch(receiveAllVendors(vendors))
    ))
);

export const fetchVendor = vendorId => dispatch => (
    VendorApiUtil.fetchVendor(vendorId).then(vendor => (
        dispatch(receiveVendor(vendor))
    ))
);

export const updateVendor = vendor => dispatch => (
    VendorApiUtil.updateVendor(vendor).then(vendor => (
        dispatch(receiveVendor(vendor))
    ))
);

export const createVendor = vendor => dispatch => (
    VendorApiUtil.createVendor(vendor).then(vendor => (
        dispatch(receiveVendor(vendor))
    ))
);

