import React from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";

const options = [
  'View Events',
  'Create Event',
  'QR',
  //'Scan QR',
];
const routes = str =>{
  switch (str) {
    case 'QR':
      return '/qr';
    case 'Create Event':
      return '/createevent';
    case 'View Events':
      return '/eventlist';
    /*case 'Scan QR':
      return '/scanqr';*/
    default:
      return '/';
  }
}

const ITEM_HEIGHT = 48;

export default function OptionMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {options.map(option => (
          <Link to={routes(option)} key={`route ${option}`}><MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem></Link>
        ))}
      </Menu>
    </div>
  );
}