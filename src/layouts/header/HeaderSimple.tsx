import { useState } from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const Sun = () => (
<div className='sun'><svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 18a6 6 0 110-12 6 6 0 010 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
      />
    </svg></div>
)

const Moon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24}  height={24} viewBox="0 0 256 256"><path fill="currentColor" d="M240 96a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Zm-96-40h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16Zm72.77 97a8 8 0 0 1 1.43 8A96 96 0 1 1 95.07 37.8a8 8 0 0 1 10.6 9.06a88.07 88.07 0 0 0 103.47 103.47a8 8 0 0 1 7.63 2.67Zm-19.39 14.88c-1.79.09-3.59.14-5.38.14A104.11 104.11 0 0 1 88 64c0-1.79 0-3.59.14-5.38a80 80 0 1 0 109.24 109.24Z"/></svg>
)
const StyledButton = styled('div')`
 
  width: 32px;
  height: 32px; 
  border: 1px solid transparent;
  border-radius: 50%; 
  padding:3px;
  cursor: pointer;
  `;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.88rem; 
  margin: 0.444rem 0.888rem 0 0 ;
  height: 100%;
`;

export default function HeaderSimple() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      setMode('light');
      document.body.setAttribute('data-theme', 'light');
    }
  };

  return (
    <>
    <StyledBox>
    <StyledButton onClick={toggleMode} className='mode-toggle'>
     {mode === 'light' ? <Sun /> : <Moon />}
    </StyledButton>

    </StyledBox>
 
 </> )
}
