import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collections/collection.component'

import './shop.style.scss'

const ShopPage = ({match}) =>
{
    return(
            <div className="shop-page">      
                <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>   
                <Route path={`${match.path}/:collectionId`} component ={CollectionPage}/>
            </div>
        )
}

export default ShopPage