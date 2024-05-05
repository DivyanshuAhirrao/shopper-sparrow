import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { BorderAll } from '@mui/icons-material';

export const ProfileTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
      width : 300,
      backgroundColor: '#f5f5f5', // Change background color
      color: '#333', // Change text color
      padding: '10px', // Add padding
      fontSize: '14px', // Change font size
      border: '1px solid #cccccc89',
    //   borderRadius: '8px', // Add border radius for rounded corners
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add box shadow for depth
      transition: 'background-color 0.3s, color 0.3s',
      position : 'relative',
      top : '-6.5px',
    }
  });

  export const NavHeaderTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 800,
      width : 790,
      height : 400,
      backgroundColor: '#f5f5f5', // Change background color
      color: '#333', // Change text color
      padding: '20px', // Add padding
      paddingLeft: '50px',
      fontSize: '14px', // Change font size
      border: '1px solid #cccccc89',
    //   borderRadius: '8px', // Add border radius for rounded corners
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add box shadow for depth
      transition: 'background-color 0.3s, color 0.3s',
      position : 'relative',
      top : '6.5px',
      left: '50px'
    }
  });

const CustomTooltip = () => {
  return (
    <div>CustomTooltip</div>
  )
}

export default CustomTooltip