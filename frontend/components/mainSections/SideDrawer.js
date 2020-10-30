import React, {useState} from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const SideDrawer = () => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <Drawer BackdropProps={{ invisible: true }} PaperProps={{ style:{marginTop:79} }} style={{width:'50vw'}} variant={"persistent"} anchor='right' open={drawerState} >
      <div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
    </Drawer>
  );
};

export default SideDrawer;
