import * as VendorApiUtil from '../util/vendor_api_util';

export const RECEIVE_ALL_VENDORS = "RECEIVE_ALL_VENDORS";
export const RECEIVE_VENDOR = "RECEIVE_VENDOR";
export const REMOVE_VENDOR = "REMOVE_VENDOR";
export const RECEIVE_VENDOR_ERRORS = "RECEIVE_VENDOR_ERRORS";

const receiveAllVendors = vendors => ({
    type: RECEIVE_ALL_VENDORS,
    vendors
});

const receiveVendor = vendor => ({
    type: RECEIVE_VENDOR,
    vendor
});

const removeVendor = vendorId => ({
    type: REMOVE_VENDOR,
    vendorId
});

const receiveVendorErrors = errors => ({
    type: RECEIVE_VENDOR_ERRORS,
    errors
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

export const deleteVendor = vendorId => dispatch => (
    VendorApiUtil.deleteVendor(vendorId).then(() => (
        dispatch(removeVendor(vendorId))
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
    ), err => (
        dispatch(receiveVendorErrors(err.responseJSON))
    ))
);

