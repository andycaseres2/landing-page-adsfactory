import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './footer.css'
import '../app.css'

export const Footer = () => {
  return (
    <>
      <Stack
        className="footer-container"
        position="relative"
        bottom="560px"
        height="500px"
        justyfyContent="center"
        alignItems="center"
      >
        <Stack
          width="600px"
          justyfyContent="center"
          alignItems="center"
          position="relative"
          top="120px"
        >
          <Text
            fontSize="40px"
            color="white"
            fontWeight="bold"
            lineHeight="40px"
          >
            Las redes sociales han democratizado el mundo.
          </Text>
          <Text fontSize="18" color="white" pt={2} pb={6}>
            ¿Aún no estás en el mayor escaparate de la historia?
          </Text>
          <Button
            className="btn-footer"
            width="460px"
            color="black"
            p={7}
            borderRadius="999"
            backgroundColor="var(--yellow)"
            alignItems="center"
            justyfyContent="center"
          >
            VOY A "REVENTARLO" CON MI NEGOCIO
            <Text pl={3}>
              <AiOutlineArrowRight fontSize={22} />
            </Text>
          </Button>
        </Stack>
      </Stack>
    </>
  )
}
