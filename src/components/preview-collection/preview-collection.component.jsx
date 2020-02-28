import React from 'react'
import {withRouter} from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component'
import {connect} from 'react-redux'
//import {createStructuredSelector} from 'reselect'
//import {selectDirectorySections} from '../../redux/directory/directory.selector'
import './preview-collection.style.scss'

const PreviewCollection = ({title,items,match,history}) => {
    return(
        <div className="collection-preview">
            <h1 className="title"
            onClick={ () => history.push(`${match.url}/${title.toLowerCase()}`)}
            >{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item,index) => index <4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}
// const mapStatetoProps = createStructuredSelector({
//     sections : selectDirectorySections
// })
export default withRouter(connect()(PreviewCollection))