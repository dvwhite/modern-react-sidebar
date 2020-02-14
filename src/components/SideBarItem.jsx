import React from 'react';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function SideBarItem({ label, items, depthStep=10, depth=0, ...rest }) {
    return (
        <>
            <ListItem button dense {...rest}>
                <ListItemText style={{ paddingLeft: depth * depthStep }}>
                    <span>{label}</span>
                </ListItemText>
            </ListItem>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <SideBarItem 
                            key={subItem.name} 
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))}
                </List>
            ) : null}
        </>
    )
}

export default SideBarItem;
