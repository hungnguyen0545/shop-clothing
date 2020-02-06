import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.style.scss'

const PreviewCollection = ({title,items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item,index) => index <4)
                    .map(({id, ...otherCollectionProps}) => (
                        <CollectionItem key={id} {...otherCollectionProps}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}
export default PreviewCollection