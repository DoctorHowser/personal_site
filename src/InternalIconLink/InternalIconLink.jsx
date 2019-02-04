import React from 'react';
import { SvgIcon, IconButton, Tooltip, Avatar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import { Button, Icon } from '@material-ui/core'


// function internal(props) {
//   return (
//     <a href="https://github.com/DoctorHowser" target="_blank" {...props}></a>

//   )
// }

function InternalIconLink(props: Object) {
  return (
    <Tooltip title={props.title}>

      <IconButton component={RouterLink} to={props.to} className="github_menu_icon" color="inherit">
        {props.avatar && <Avatar>{props.avatar}</Avatar>}
        {!props.avatar && <SvgIcon {...props}>
          <path d={props.svg} />
        </SvgIcon>
        }
      </IconButton>
    </Tooltip>

  );
}

export default InternalIconLink;