import React from 'react';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SideBarItem from './SideBarItem';

function SideBar({ items, depthStep, depth }) {
    return (
        <div className='sidebar'>
            <List disablePadding dense>
                {items.map((sideBarItem, index) => (
                    <SideBarItem
                        key={`${sideBarItem.name}${index}`}
                        depthStep={depthStep}
                        depth={depth}
                        {...sideBarItem}
                    />
                ))}           
            </List>
        </div>
    )
}

export default SideBar;