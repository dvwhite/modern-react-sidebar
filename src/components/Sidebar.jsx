import React from 'react';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function SideBar({ items }) {
    return (
        <div className='sidebar'>
            <List disablePadding dense>
                {items.map(({ label, name, items: subItems, ...rest }) => (
                    <React.Fragment key={name}>
                        <ListItem style={{ paddingLeft: 18 }} key={name} button {...rest}>
                            <ListItemText>{label}</ListItemText>
                        </ListItem>
                        {Array.isArray(subItems) ? (
                            <List disablePadding>
                                {subItems.map((subItem) => (
                                    <ListItem 
                                        key={subItem.name} 
                                        style={{ paddingLeft: 36 }}
                                        button
                                        dense
                                    >
                                        <ListItemText className="sidebar-item-text">
                                            {subItem.label}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        ) : null}
                    </React.Fragment>
                ))}           
            </List>
        </div>
    )
}

export default SideBar;