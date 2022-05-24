import React from 'react'

import { FiXCircle } from 'react-icons/fi'
import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { Box, Stack, Text } from '@chakra-ui/react'

export const Advertising = () => {
  return (
    <>
      <Stack
        backgroundColor="gray.100"
        alignItems="center"
        justifyContent="center"
        bottom="600px"
        position="relative"
        paddingBottom={50}
      >
        <Stack pt={5} alignItems="center" justifyContent="center">
          <Box pb={2} width="900px">
            <Text fontWeight="bold" fontSize="20" paddingBottom={5}>
              ¿HACES PUBLICIDAD EN REDES SOCIALES?
            </Text>
            <Text fontWeight="bold" fontSize="40" lineHeight="40px">
              O te anuncias por Internet, o te quedas fuera de juego. Tú lo
              sabes y por eso has decidido tomar acción.
            </Text>
            <Text p={5} color="grey" fontSize="20px" fontWeight="bold">
              Estas cansado de:
            </Text>
          </Box>
        </Stack>

        <Stack
          fontSize="22px"
          flexDirection="row"
          alingItem="center"
          justifyContent="center"
        >
          <Box textAlign="left" width="50%" paddingLeft={20} paddingRight={20}>
            <List width="600px" spacing={3} flexDirection="row">
              <ListItem
                pb={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ListIcon as={FiXCircle} width="50px" />
                Tener un embudo que funciona pero que podría estar obteniendo
                mejores resultados.
              </ListItem>
              <ListItem
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ListIcon width="50px" as={FiXCircle} />
                Necesitas nuevos clientes y no sabes cómo conseguirlo. Quieres
                delegar la compra de tráfico a alguien de confianza.
              </ListItem>
            </List>
          </Box>
          <Box width="50%" pl={10} textAlign="left">
            <List width="600px" spacing={3}>
              <ListItem
                pb={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ListIcon
                  width="50px"
                  justifyContent="center"
                  alignItems="center"
                  as={FiXCircle}
                />
                Agobiarte por no tener controlado todos los datos y sentir que
                algo se te está escapando, mientras ves como tu competencia
                sigue creciendo
              </ListItem>
              <ListItem
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ListIcon width="50px" as={FiXCircle} />
                No saber cómo conectar con tu cliente ideal y tener la sensación
                de que no tienen interés en tu producto o servicio.
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
