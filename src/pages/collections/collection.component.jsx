import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/collection/collection.selector'

import './collection.style.scss'

const CollectionPage = ({collection,match}) => 
{
    const {title, items} = collection;
    console.log(collection);
    console.log(match);
    return(
        <div className="collection-page">
            <h2 className='title'> {title} </h2>
            <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
            </div>
        </div>  
    )
}

const mapStatetoProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStatetoProps)(CollectionPage)