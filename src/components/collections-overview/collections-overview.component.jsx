import React from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import {selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import './collections-overview.style.scss'

const CollectionsOverview = ({collections,props}) => {
    return(
        <div className='collections-overview'>
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
const mapStatetoProps = createStructuredSelector({
    collections : selectCollectionsForPreview,
})
export default connect(mapStatetoProps)(CollectionsOverview)