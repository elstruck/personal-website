import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';

function Home() {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item size={{xs:12, md: 4}} sx={{display: 'flex', justifyContent: 'center'}}>
            <img 
              src={require('../assets/profile.jpg')} 
              alt="Profile" 
              style={{             
                width: '100%',
                height: 'auto',
                maxWidth: '300px',
                borderRadius: '5px',
                border: `5px solid ${theme.palette.primary.main}`,
                margin: '25px 0px'
              }}
            />
        </Grid>
        <Grid item size={{xs:12, md: 8}}>
          <h1>Elliott Wittstruck</h1>
          <p>I spend too much time working on stuff I shouldn't be working on.</p>
          <p>Born, raised, and still living in Tennessee.</p>
          <p>I have a degree in Music Education and taught elementary and high school.</p>
          <p>Buy, flip, and hold real estate.</p>
          <p>I like to write code at night, it relaxes me.</p>
          <p>Own a residential remodeling construction company.</p>
          <p>I've recently started helping other construction companies build out their technology infrastructure.</p>
          <p>Reach out, let's work on something.</p>
          <Button variant="contained" color="primary" href="/contact">Contact Me</Button>
        </Grid>
        <Grid item size={{xs:12}}>
            
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;