import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const NumberCard = ({item}) => {
  return (
    <Text minWidth='50px' minHeight='50px' bg='#fff' color='#000' cursor='pointer'  _hover={{bg:"skyblue"}} >
    <Center minHeight='50px' fontWeight='600' fontSize='20px'>
        {item}
    </Center>
    </Text>
  )
}

export default NumberCard