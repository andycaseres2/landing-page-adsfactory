import React from 'react'
import { Stack, Image, Text, Box, Button } from '@chakra-ui/react'

import logo from '../assets/Logos-Ads-Factory/logos_ads_factory_vector_main_blanco-1024x224.png'

export const Navbar = () => {
  return (
    <>
      <Stack
        backgroundSize="cover"
        justifyContent="center"
        flexDirection="row"
        paddingTop={5}
        position="relative"
        right="100px"
      >
        <Box
          position="relative"
          top="28px"
          alignItems="center"
          justifyContent="center"
        >
          <Image height="55px" src={logo} alt="Ads Factory" />
        </Box>

        <Stack
          fontSize="14px"
          paddingLeft={5}
          color="white"
          flexDirection="row"
          justifyContent="center"
          marginRight={5}
        >
          <Text position="relative" top="8px" p={6}>
            EQUIPO
          </Text>
          <Text p={6}>SERVICIOS</Text>
          <Text p={6}>CASOS DE ÉXITO</Text>
          <Text p={6}>ÚNETE A NOSOTROS</Text>
        </Stack>
      </Stack>
    </>
  )
}
