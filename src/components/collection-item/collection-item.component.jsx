import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

import './collection-item.style.scss'

const CollectionItem = ({item,addItem}) => {
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
            onClick={() => addItem(item)}
            inverted >
            ADD TO CART
            </CustomButton>
        </div>
    )
}
const mapDispatchtoProps = (dispatch) => ({
 addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchtoProps)(CollectionItem);