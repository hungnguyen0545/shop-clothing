import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

import './collection-item.style.scss'

const CollectionItem = ({item,dispatch}) => {
    return(
        <div className="collection-item">
            <div className="image"
            style={{
                backgroundImage : `url(${item.imageUrl})`
            }}></div>
            <div className="collection-footer">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
            </div>
            <CustomButton 
            onClick={() => dispatch(addItem(item))}
            inverted >
            ADD TO CART
            </CustomButton>
        </div>
    )
}

export default connect()(CollectionItem);