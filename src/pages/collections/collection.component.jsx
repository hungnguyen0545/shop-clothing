import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'
import {selectCollectionforCollectionPage} from '../../redux/collection/collection.selector'
import SearchBar from '../../components/search/search.component'
import './collection.style.scss'

const CollectionPage = ({collection,match}) => 
{
    var linkURL = match.url;
    const {title, items} = collection;
    return(
        <div className="collection-page">
            
            <h2 className='title'> {title} </h2>
            <SearchBar></SearchBar>
            <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} linkURL ={linkURL}></CollectionItem>
                ))
            }
            </div>
        </div>  
    )
}

const mapStatetoProps = (state, ownProps) => ({
    collection : selectCollectionforCollectionPage(ownProps.match.params.collectionId)(state)
})
export default connect(mapStatetoProps)(CollectionPage)