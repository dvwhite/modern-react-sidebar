import React from 'react';

const SideBarItem = ({ label, items, depthStep = 10, depth = 0, ...rest }) = () => {
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
}

export const SideBarItem;
