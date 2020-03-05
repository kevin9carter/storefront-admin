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
                                                        <label className="mb-0">Product Name</label>
                                                        <div>
                                                            <AvField className="form-control" name="product_name" id="validationCustom01" type="text" required />
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div className="form-group ">
                                                        <label className="">Add Description</label>
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
                                                                    <AvField className="form-control" name="stouse_sku" id="validationCustom01" type="text" required />
                                                                </div>
                                                                <div className="valid-feedback">Looks good!</div>
                                                            </div> 
                                                        </div>
                                                        <div className="col-xl-6 col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label className="mb-0">Your SKU</label>
                                                                <div>
                                                                    <AvField className="form-control" name="your_sku" id="validationCustom01" type="text" placeholder="000000" required />
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

                                                    <button 
                                                        className="btn btn-primary heading"
                                                        style={{margin: '20px 0px'}}
                                                        >
                                                        View Bulk Discounts
                                                    </button>
                                                    <div style={{marginTop: '30px'}}>
                                                        <label className="heading"> Search engine listing preview </label>
                                                        <div className="form-group mb-3" style={{marginTop: '20px'}}>
                                                            <label className="c mb-0" style={{ fontWeight: 100}} >Page title :</label>
                                                            <div>
                                                                <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                            </div>
                                                            <div style={{marginTop: '10px', fontSize: '10px' }}> 0 of 70 characters used</div>
                                                            <div className="valid-feedback">Looks good!</div>
                                                        </div>
                                                        <div className="form-group mb-3" style={{marginTop: '20px'}}>
                                                            <label className="c mb-0" style={{ fontWeight: 100}}> Description </label>
                                                            <div>
                                                                <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                            </div>
                                                            <div style={{marginTop: '10px', fontSize: '10px' }}> 0 of 320 characters used</div>
                                                            <div className="valid-feedback">Looks good!</div>
                                                        </div>
                                                        <div className="form-group mb-3" style={{marginTop: '20px'}}>
                                                            <label className="c mb-0" style={{ fontWeight: 100}}> URL and handle </label>
                                                            <div>
                                                                <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>                                                   
                                                <div style={{marginTop: '30px'}} >
                                                    <button 
                                                        type="submit" 
                                                        className="btn" 
                                                        style={{backgroundColor:"#EE7204", width:"200px", color:"white"}}>Save</button>
                                                    <button type="button" 
                                                        className="btn" 
                                                        style={{backgroundColor:"white", width:"200px", color: "#BBBBBB"}}>Discard</button>
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
