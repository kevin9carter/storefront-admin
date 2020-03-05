import React, { Component,Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import CKEditors from "react-ckeditor-component";
import { AvField, AvForm } from 'availity-reactstrap-validation';
import one from '../../assets/images/pro3/1.jpg'
import user from '../../assets/images/user.png';
import Product_variant_form from './product-variant-form';

export class Add_product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            file: '',
            dummyimgs: [
                { img: user },
                { img: user },
                { img: user },
                { img: user },
                { img: user }
            ]
        }
    }
    IncrementItem = () => {
        this.setState(prevState => {
            if (prevState.quantity < 9) {
                return {
                    quantity: prevState.quantity + 1
                }
            } else {
                return null;
            }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if (prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            } else {
                return null;
            }
        });
    }
    handleChange = (event) => {
        this.setState({ quantity: event.target.value });
    }

    //image upload
    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImgChange(e, i) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        const { dummyimgs } = this.state;

        reader.onloadend = () => {
            dummyimgs[i].img = reader.result;
            this.setState({
                file: file,
                dummyimgs,
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        return (
            <Fragment>
                <Breadcrumb title="Add Product" parent="Products" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Add Product</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row product-adding">
                                        <div className="col-xl-5">
                                            <div className="add-product">
                                                    <div className="block-image">
                                                        <img src={one} alt="" className="image_zoom_1 blur-up lazyloaded" />
                                                    </div>
                                                    <div className="block-file-upload">
                                                        <ul className="file-upload-product">
                                                            {
                                                                this.state.dummyimgs.map((res, i) => {
                                                                    return (
                                                                        <li key={i}>
                                                                            <div className="box-input-file">
                                                                                <input className="upload" type="file" onChange={(e) => this._handleImgChange(e, i)} />
                                                                                <img src={res.img} style={{ width: 50, height: 50 }} />
                                                                                <a id="result1" onClick={(e) => this._handleSubmit(e.target.id)}></a>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <AvForm className="needs-validation add-product-form" onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                                <div className="form form-label-center">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-0">Product Name :</label>
                                                        <div>
                                                            <AvField className="form-control" name="product_name" id="validationCustom01" type="text" required />
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div className="form-group ">
                                                        <label className="">Add Description :</label>
                                                        <div className="description-sm">
                                                            <CKEditors
                                                                activeclassName="p10"
                                                                content={this.state.content}
                                                                events={{
                                                                    "blur": this.onBlur,
                                                                    "afterPaste": this.afterPaste,
                                                                    "change": this.onChange
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group ">
                                                        <input className="checkbox_animated" id="chk-ani2" type="checkbox" name="customizable"/>
                                                        Customizable?
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-6 col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label className="mb-0">Stouse SKU</label>
                                                                <div>
                                                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" required />
                                                                </div>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div> 
                                                        </div>
                                                        <div className="col-xl-6 col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label className="mb-0">Your SKU</label>
                                                                <div>
                                                                    <AvField className="form-control" name="your_sku" id="validationCustom01" type="number" placeholder="000000" required />
                                                                </div>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-2 col-sm-2">
                                                            <div className="form-group mb-3">
                                                                <label className="mb-0">Markup %</label>
                                                                <div>
                                                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="number" placeholder="00" required />
                                                                </div>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div> 
                                                        </div>
                                                    </div>

                                                    <div className="variant">
                                                        <label className="heading"> Variants </label>
                                                        <Product_variant_form />
                                                        <Product_variant_form />
                                                        <Product_variant_form />
                                                        <Product_variant_form />
                                                    </div>
                                                    
                                                    <div className="form-group mb-3">
                                                        <label className="c mb-0">Description :</label>
                                                        <div>
                                                            <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className=" mb-0">Product Code :</label>
                                                        <div>
                                                            <AvField className="form-control " name="product_code" id="validationCustomUsername" type="number" required />
                                                        </div>
                                                        <div className="invalid-feedback offset-sm-4 offset-xl-3">Please choose Valid Code.</div>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="form-group row">
                                                        <label className="row" >Select Size :</label>
                                                        <div>
                                                            <select className="form-control digits" id="exampleFormControlSelect1">
                                                                <option>Small</option>
                                                                <option>Medium</option>
                                                                <option>Large</option>
                                                                <option>Extra Large</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className=" mb-0">Total Products :</label>
                                                        <fieldset className="qty-box ml-0">
                                                            <div className="input-group bootstrap-touchspin">
                                                                <div className="input-group-prepend">
                                                                    <button className="btn btn-primary btn-square bootstrap-touchspin-down" type="button" onClick={this.DecreaseItem} >
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                </div>
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text bootstrap-touchspin-prefix" ></span>
                                                                </div>
                                                                <input className="touchspin form-control" type="text" value={this.state.quantity} onChange={this.handleChange} />
                                                                <div className="input-group-append">
                                                                    <span className="input-group-text bootstrap-touchspin-postfix"></span>
                                                                </div>
                                                                <div className="input-group-append ml-0">
                                                                    <button className="btn btn-primary btn-square bootstrap-touchspin-up" type="button" onClick={this.IncrementItem}>
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                   
                                                </div>
                                                <div className="offset-xl-3 offset-sm-4">
                                                    <button type="submit" className="btn btn-primary">Add</button>
                                                    <button type="button" className="btn btn-light">Discard</button>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Add_product
