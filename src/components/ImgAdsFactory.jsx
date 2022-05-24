import React from 'react'
import { Stack, Image } from '@chakra-ui/react'

import Im_2 from '../assets/Imágenes-web/Im_2.png'
import xgrad from '../assets/Logos-Ads-Factory/xgrad.png'
import xgrissm from '../assets/Logos-Ads-Factory/xgrissm.png'

export const ImgAdsFactory = () => {
  return (
    <>
      <Stack
        bottom="220px"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          zIndex="-1"
          left="300px"
          top="170px"
          position="relative"
          width="200px"
          src={xgrissm}
        />
        <Image src={Im_2} width="1100px" />
        <Image
          bottom="370px"
          left="460px"
          position="relative"
          width="200px"
          src={xgrad}
        />
        <Image
          bottom="750px"
          right="435px"
          position="relative"
          width="200px"
          src={xgrissm}
        />
      </Stack>
    </>
  )
}
