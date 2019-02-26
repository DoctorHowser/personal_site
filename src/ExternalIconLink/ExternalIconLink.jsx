import React from 'react';
import { SvgIcon, IconButton, Tooltip } from '@material-ui/core';


function ExternalIconLink(props) {
  return (
    <Tooltip title={props.title}>
      <IconButton target="_blank" href={props.link} className="github_menu_icon" color="inherit">

        <SvgIcon {...props}>
          <path d={props.svg} />
        </SvgIcon>
      </IconButton>
    </Tooltip>

  );
}

export default ExternalIconLink;