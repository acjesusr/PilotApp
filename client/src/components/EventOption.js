import React from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";

const options = [
  'Edit Event',
  'Check for attendance',
];
const routes = str =>{
  switch (str) {
    case 'Edit Event':
      return '/createevent';
    case 'Check for attendance':
      return '/scanqr';
    default:
      return '/';
  }
}

const ITEM_HEIGHT = 48;

export default function EventOption() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
    //console.log(anchorEl);
  }

  function handleClose() {
    //console.log(anchorEl);
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