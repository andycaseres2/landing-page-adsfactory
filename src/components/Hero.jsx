import { Stack, Text, Button, Box } from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import '../App.css'
import './hero.css'

export const Hero = () => {
  return (
    <>
      <Stack marginLeft="180px" marginTop="150px">
        <Text
          textAlign="justify"
          fontWeight="bold"
          color="white"
          position="relative"
          bottom="30px"
        >
          AGENCIA ESPECIALISTA EN FACEBOOK ADS Y EMBUDOS DE VENTA
        </Text>
        <Text
          position="relative"
          bottom="20px"
          lineHeight="1.1"
          textAlign="left"
          color="var(--pink)"
          fontWeight={700}
          fontSize="50px"
          className="texto-hero"
          width="540px"
        >
          Tú pones el producto o servicio, nosotros escalamos los resultados
        </Text>
      </Stack>

      <Box right="300px" position="relative" marginTop="80px" bottom="60px">
        <Button className="btn-hero-btn" color="black" p={7} borderRadius="999">
          QUIERO MULTIPLICAR MIS RESULTADOS
          <Text pl={3}>
            <AiOutlineArrowRight />
          </Text>
        </Button>
      </Box>
    </>
  )
}
