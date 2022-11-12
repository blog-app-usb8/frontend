import React from 'react'
import UserInfo from './UserInfo'
import { Link } from 'react-router-dom'

import { Button, AppBar, Toolbar, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const NavBar = () => {
  // const padding = {
  //   paddingRight: 5,
  //   paddingLeft: 5
  // }

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#004494',
        mainGradient: 'linear-gradient( #004494, #0050ad )',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
  })

  return (
    // <div style={{ clear: 'both', backgroundColor: 'gray' }}>
    //   <Link style={padding} to="/">blogs</Link>
    //   <Link style={padding} to="/writers">writers</Link>
    //   <UserInfo />
    // </div>
    <div>
      <ThemeProvider theme={theme}>
        {/* <AppBar position="static" color="primary" elevation={0}> */}
        <AppBar position="static" style={{ background: theme.palette.primary.mainGradient }} elevation={0}>
          <Toolbar>
            <Button color="inherit" component={Link} to="/">blogs</Button>
            <Button color="inherit" component={Link} to="/writers">writers</Button>
            {/* {user
              ? <em>{user} logged in</em>
              // : <Button color="inherit" component={Link} to="/login">
              //     login
              //   </Button>
              : <></>
            } */}
            <UserInfo />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default NavBar