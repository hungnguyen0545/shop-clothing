import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
//import Header from '../../components/header/header.component'
import './shop.style.scss'

class ShopPage extends Component
{
    constructor()
    {
        super();
        this.state ={
            collections : SHOP_DATA
        }
    }
    render()
    {
        const {collections} = this.state;
        return(
            <div className="shop-page">
                <h1> SHOP COLLECTIONS </h1>
                <div className="collection">
                    {
                        collections.map(({id, ...otherCollectionProps}) => (
                            <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default ShopPage