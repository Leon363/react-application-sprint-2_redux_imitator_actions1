import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { RouteType } from '../../models/RouteType';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { AccessAlarm, AddToQueue, Anchor, CenterFocusStrong } from '@mui/icons-material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link, Link as RouterLink } from 'react-router-dom';
import getTabs from '../navigators/NavigatorDesktop'



type Anchor = 'top' | 'left' | 'bottom' | 'right';



const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {

 function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Courses', 'NewCourses', 'Statistic Hours', 'Statistic Cost', 'Login', 'Log Out', 'Generation'].map((text, index, Link) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 3 === 0 ? <AccessAlarm /> : <AddToQueue />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  ); 

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
 }

    //TODO
    //write implementation of a Navigator for mobile devices
    //Navigator should be based on Drawer
    return <div> 
      <div>
        
      </div>
      <div  >
        <label style={{fontSize: '2em'}}>  {TemporaryDrawer()} </label>
      </div>
    </div>
}
 
export default NavigatorMobile;
 