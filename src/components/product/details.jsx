import React, { useState } from "react";
import ProductImages from "./ProductImages";
import ProductStore from "../../store/ProductStore";
import CartStore from "../../store/CartStore";
import DetailsSkeleton from "../../skeleton/details-skeleton";
import parse from 'html-react-parser'
import Reviews from "./reviews";
import CartSubmitButton from "../cart/CartSubmitButton";
import WishStore from "../../store/WishStore";
import toast from 'react-hot-toast'
import WishSubmitButton from "../wish/WishSubmitButton";

const Details = () => {

    const {Details}=ProductStore();
    const [quantity,SetQuantity]=useState(1);

    const {CartFormChange,CartForm,CartSaveRequest,CartListRequest}=CartStore()
    const {WishSaveRequest,WishListRequest}=WishStore()

    const incrementQuantity=()=>{
        SetQuantity(quantity=>quantity+1)
    }

    const decrementQuantity=()=>{
        if(quantity>1){ 
            SetQuantity(quantity=>quantity-1)
        }
    }

    const AddWish = async (productID) => {
        let res= await WishSaveRequest(productID);
        if(res){
            toast.success("Wish Item Added");
            await WishListRequest();
        } else {
            toast.error('something went wrong')
        }
    }


    const AddCart = async (productID,) => {
        let res=await CartSaveRequest(CartForm,productID,quantity);
        if(res){
            toast.success("Cart Item Added");
            await  CartListRequest();
        } else {
            toast.error('Please Select the : Size , Quantity , Colour')
        }
    }




    if(Details===null){
        return <DetailsSkeleton/>
    }
    else {
        return (
            <div className="section-top m-0 p-0 bg-white">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImages/>
                        </div>
                        <div className="col-md-5 p-3">
                            <h4>{Details[0]['title']}</h4>
                            <p className="text-muted bodySmal my-1">Category: {Details[0]['category']['categoryName']}</p>
                            <p className="text-muted bodySmal my-1">Brand: {Details[0]['brand']['brandName']}</p>
                            <p className="bodySmal mb-2 mt-1">{Details[0]['shortDes']}</p>
                            {
                                Details[0]['discount']?(
                                    <span className="bodyXLarge">Price: <strike class="text-secondary">{Details[0]['price']}</strike> {Details[0]['discountPrice']} </span>
                                ):(
                                    <span className="bodyXLarge">Price: {Details[0]['price']}</span>
                                )
                            }
                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Size</label>
                                    <select value={CartForm.size} onChange={(e)=>{CartFormChange('size',e.target.value)}}  className="form-control my-2 form-select">
                                        <option value="">Size</option>
                                        {
                                            Details[0]['details']['size'].split(",").map((item,i)=>{
                                                return  <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-4  p-2">
                                    <label className="bodySmal">Color</label>
                                    <select value={CartForm.color} onChange={(e)=>{CartFormChange('color',e.target.value)}} className="form-control my-2 form-select">
                                        <option value="">Color</option>
                                        {
                                            Details[0]['details']['color'].split(",").map((item,i)=>{
                                                return  <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-4  p-2">
                                    <label className="bodySmal">Quantity</label>
                                    <div className="input-group my-2">
                                        <button onClick={decrementQuantity} className="btn btn-outline-secondary">-</button>
                                        <input value={quantity} type="text" className="form-control bg-light text-center" readOnly />
                                        <button onClick={incrementQuantity}  className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>

                                <div className="col-4  p-2">
                                    <CartSubmitButton onClick={async ()=>{await AddCart(Details[0]['_id'])}} className="btn w-100 btn-success" text="Add to Cart"/>
                                </div>

                                <div className="col-4  p-2">
                                    <WishSubmitButton onClick={()=>{ AddWish(Details[0]['_id'])}} className="btn w-100 btn-success" text="Add to Wish"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane" type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true">Specifications</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane" type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">Review</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel" aria-labelledby="Speci-tab" tabIndex="0">
                                {
                                    parse(Details[0]['details']['des'])
                                }
                            </div>
                            <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab" tabIndex="0">
                                <Reviews/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Details;