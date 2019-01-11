import React from 'react'
import { Anchor, Box, Text } from 'grommet'

export const AppHeader = ({ appName, currentUser, handleLogin, handleLogout }) => (
  <Box
    flex={false}
    tag="header"
    direction="row"
    background="white"
    align="center"
    justify="between"
    response={false}
  >
    <Box
      pad={{ horizontal: "medium", vertical: "small" }}
      responsive={false}
      direction="row"
      align="center"
      gap="small"
    >
      <Text weight={600} color="dark-9">{appName}</Text>
    </Box>
    <Box
      margin={{ left: "medium" }}
      round="xsmall"
      background={{ color: "white", opacity: "weak" }}
      direction="row"
      align="center"
      pad={{ horizontal: "small" }}
    >
      { currentUser
          ? <Anchor onClick={handleLogout} label="Log Out" margin="small" />
          : <Anchor onClick={handleLogin} label="Sign In" margin="small" />
      }
    </Box>
  </Box>
)