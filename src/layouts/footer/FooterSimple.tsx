import React from 'react'
import Link from 'next/link'
import { Box, Container, Typography, Stack } from '@mui/material';
import styles from './footer.module.css'; 

const Heart:any = () => ( 
  <div className={styles.heart}>
  <svg xmlns="http://www.w3.org/2000/svg" width={8.88*3} height={8.88*3} viewBox="0 0 24 24"><path fill="currentColor" fillOpacity="0" d="M12 20L20.5 11V7L17 5.5L12 7L7 5.5L3.5 7V11L12 20Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/></path><path fill="none" stroke="currentColor" strokeDasharray="30" strokeDashoffset="30" strokeLinecap="round" strokeWidth="2" d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="30;0"/></path></svg> 
  </div>
)



export default function FooterSimple() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Container maxWidth={'xl'}> 
      <Stack direction="row" sx={{display:'flex', alignItems:'center', justifyContent:'center', mt:2, height:'24px' }} spacing={0.88}   >
      <Typography variant='body1' component={'span'}>Made with </Typography>
       <Heart /> 
       <Typography variant='body1' component={'span'} >by <Link target="_blank" style={{fontWeight:'bolder'}} href="https://github.com/NFTGDevs">nftgdevs</Link></Typography>       
        </Stack>  
        <Stack direction="row" sx={{display:'flex', alignItems:'center', justifyContent:'center', mt:1, height:'24px' }} spacing={0.88}   >
        <Typography variant='caption' component={'span'} >Many thanks to the <Link  target="_blank" style={{color: '#1cb095', fontWeight:'bolder'}} href="/">Wharf</Link> team</Typography>
        </Stack>
    </Container>
    </Box>
  )
}
