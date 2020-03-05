import React, { Component,Fragment } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';


export class Product_variant_form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="variant-form row">
                <div className="col-xl-1 col-sm-1 check_box">
                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" name="customizable"/>
                </div>
                <div className="col-xl-11 col-sm-11">
                    <div className="row">
                        <div className="col-xl-2 col-sm-4">
                            <div className="form-group mb-3">
                                <label className="mb-0">Size</label>
                                <div>
                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </div> 
                        </div>
                        <div className="col-xl-2 col-sm-4">
                            <div className="form-group mb-3">
                                <label className="mb-0">Material</label>
                                <div>
                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </div> 
                        </div>
                        <div className="col-xl-2 col-sm-4">
                            <div className="form-group mb-3">
                                <label className="mb-0">Cut</label>
                                <div>
                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </div> 
                        </div>
                        <div className="col-xl-2 col-sm-4">
                            <div className="form-group mb-3">
                                <label className="mb-0">Wholesale</label>
                                <div>
                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </div> 
                        </div>
                        <div className="col-xl-2 col-sm-4">
                            <div className="form-group mb-3">
                                <label className="mb-0">Your Price</label>
                                <div>
                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </div> 
                        </div>
                        <div className="col-xl-2 col-sm-4">
                            <div className="form-group mb-3">
                                <label className="mb-0">SKU</label>
                                <div>
                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_variant_form
