import React from 'react'

import './statistics.css'

import { BsCheckCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {
  Stack,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  Image,
  Button,
} from '@chakra-ui/react'
import Im_3 from '../assets/Imágenes-web/Im_3.png'

export const Statistics = () => {
  return (
    <>
      <Stack>
        <Stack
          position="relative"
          bottom="600px"
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
        >
          <Stack width="460px">
            <Box width="460px" position="relative" left="30px">
              <Text
                textAlign="left"
                fontWeight="bold"
                fontSize="26px"
                pb={4}
                lineHeight="30px"
              >
                Eres infoproductor o vendes servicio a través de embudos de
                venta
              </Text>
              <Text textAlign="left" fontSize="18px" pb={4}>
                Las palabras funnel, lead magnet y masterclass no te suena a
                chino. Tienes tu propio sistema de captación, pero…
              </Text>
            </Box>
            <Stack
              width="500px"
              textAlign="left"
              justifyContent="center"
              alignItems="center"
            >
              <List
                width="500px"
                spacing={3}
                flexDirection="row"
                color="gray.500"
              >
                <ListItem
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  left="3px"
                >
                  <ListIcon
                    color="var(--pink)"
                    as={BsCheckCircleFill}
                    width="50px"
                  />
                  No estás obteniendo los resultados que te gustaría tener.
                </ListItem>
                <ListItem
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  left="10px"
                >
                  <ListIcon
                    color="var(--pink)"
                    as={BsCheckCircleFill}
                    width="50px"
                  />
                  Sabes que le puedes sacar mucho más partido a tu embudo y tus
                  anuncios.
                </ListItem>
                <ListItem
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  left="10px"
                >
                  <ListIcon
                    color="var(--pink)"
                    width="50px"
                    as={BsCheckCircleFill}
                  />
                  Quieres atraer a nuevos potenciales clientes pero no sabes
                  cómo.
                </ListItem>
              </List>
            </Stack>
          </Stack>

          <Stack
            width="50%"
            justifyContent="center"
            alignItems="center"
            position="relative"
            top={20}
          >
            <Box boxSize="550px" position="relative" left="70px" top="60px">
              <Image src={Im_3} />
            </Box>
          </Stack>
        </Stack>
        <Stack position="relative" bottom="670" right="300px">
          <Text fontSize="20px" position="relative">
            Apunta bien este combo: tráfico y embudos de venta.
          </Text>
          <Button
            className="btn-statistics"
            color="black"
            p={6}
            borderRadius="999"
          >
            QUIERO MULTIPLICAR MIS RESULTADOS
            <Text pl={3}>
              <AiOutlineArrowRight fontSize={18} className="icon-btn" />
            </Text>
          </Button>
        </Stack>
      </Stack>
    </>
  )
}
