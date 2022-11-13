import { Image, SimpleGrid, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'

import { useNavigate } from 'react-router-dom'





const PopularCat = ({data, path}) => {

 // console.log(data)
 const Navigation = useNavigate()



  return (

    
        <VStack justify="center" marginTop="5" w="full" >
        <Text fontSize="20" fontWeight="bold"  >TRENDING
 </Text>
          <SimpleGrid columns={[2,4,5]} spacing="8" paddingLeft={15} >

            {data.map((el)=>  (
                <Image src={el}   style={{cursor:"pointer"}} onClick={()=>Navigation(path)} />
                ) )}

          </SimpleGrid>
        </VStack >
      


  )
               
}

export default PopularCat
