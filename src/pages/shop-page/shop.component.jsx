import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collections/collection.component'
import DetailItem from '../detail/detail.component'

import './shop.style.scss'

const ShopPage = ({match}) =>
{
    return(
            <div className="shop-page">      
                <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>   
                <Route exact path={`${match.path}/:collectionId`} component ={CollectionPage}/>
                <Route path={`${match.path}/:collectionId/:itemId`} component={DetailItem}></Route>
            </div>
        )
}

export default ShopPage