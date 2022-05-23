import { Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'

import 'react-slideshow-image/dist/styles.css'
import alpha from '../assets/Logos-clientes/alpha.jpg'
import bigseo from '../assets/Logos-clientes/bigseo.jpg'
import david_rl from '../assets/Logos-clientes/david_rl.jpg'
import fuertafit from '../assets/Logos-clientes/fuertafit.jpg'
import impulse_it from '../assets/Logos-clientes/impulse_it.jpg'

export const About = () => {
  return (
    <>
      <Stack left="200px" position="relative" width="70%" marginRight="100px">
        <Stack
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Image boxSize="140px" src={alpha} />
          <Image boxSize="140px" src={bigseo} />
          <Image boxSize="140px" src={david_rl} />
          <Image boxSize="140px" src={fuertafit} />
          <Image boxSize="140px" src={impulse_it} />
        </Stack>

        <Stack>
          <Text fontWeight="bold">EXPERTOS EN COMPRA DE TRÁFICO ONLINE</Text>
          <Text fontWeight="bold" fontSize="28px">
            Trabajamos con un solo objetivo: aumentar las ventas de tu negocio.
          </Text>
          <Text fontSize="22px">
            Masterizar cada paso de tu embudo, sacar el máximo rendimiento a
            cada euro de tu inversión publicitaria y tener cada dato controlado
            al milímetro.
          </Text>
          <Text pb={20} fontSize="22px">
            Esos son nuestros tres mantras diarios
          </Text>
        </Stack>
      </Stack>
    </>
  )
}
