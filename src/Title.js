import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Title(props,link) {
  console.log(props);
  return (
    <>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
        <IconButton aria-label="open in new" href={props.link} target="_blank">
          <OpenInNewIcon />
        </IconButton>
    </Typography>

        </>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
