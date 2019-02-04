import React from 'react';
import { SvgIcon, IconButton, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

// function GitHubLink(props) {
//   return (
//     <a href="https://github.com/DoctorHowser" target="_blank" {...props}></a>

//   )
// }

function ExternalIconLink(props: Object) {
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