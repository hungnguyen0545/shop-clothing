import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectItemforDetailItem} from '../../redux/collection/collection.selector'
import CustomButton from '../../components/custom-button/custom-button.component'
import {addItem} from '../../redux/cart/cart.action'

import './detail.style.scss'

const DetailItem = ({item,dispatch}) => {
    
        return(
        <div className="detail-item">
             <div className="image"
            style={{
                backgroundImage : `url(${item.imageUrl})`
            }}></div>
            <div className="collection-info">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}$</div>
                <CustomButton 
                onClick={() => dispatch(addItem(item))}
                inverted >
                ADD TO CART
                </CustomButton>
            </div>
            
        </div>
    )
}
const mapStatetoProps = (state,ownProps) => ({
    item : selectItemforDetailItem(ownProps.match.params.collectionId,ownProps.match.params.itemId)(state)
})
export default withRouter(connect(mapStatetoProps)(DetailItem))