import React from 'react'
import { Stack, Image } from '@chakra-ui/react'

import Im_2 from '../assets/Imágenes-web/Im_2.png'
import puntos from '../assets/Logos-Ads-Factory/puntos.png'
import xgrad from '../assets/Logos-Ads-Factory/xgrad.png'
import xgrissm from '../assets/Logos-Ads-Factory/xgrissm.png'

export const ImgAdsFactory = () => {
  return (
    <>
      <Stack>
        <Image
          zIndex="-1"
          left="1000px"
          top="200px"
          position="relative"
          width="260px"
          src={xgrissm}
        />
        <Image src={Im_2} />
        <Image
          bottom="500px"
          left="1200px"
          position="relative"
          width="260px"
          src={xgrad}
        />
        <Image
          bottom="1000px"
          left="50px"
          position="relative"
          width="260px"
          src={xgrissm}
        />
      </Stack>
    </>
  )
}
