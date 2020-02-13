import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

import './directory.style.scss'


const Directory =({sections}) =>
{
        return(
            <div className="directory-menu">
                {
                      sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    ))
                }
            </div>
        );
}
const mapStatetoProps = createStructuredSelector({
  sections : selectDirectorySections
})
export default connect(mapStatetoProps)(Directory)