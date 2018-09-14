import React from 'react'
import { Box, Flex, Text, Heading} from 'rebass'
import styled from 'react-emotion'

const Section = styled('section')`
	clear: both;
	padding:0px;
	width: 100%;
	height: 600px;
	margin: 0px;
	background-color: #e4e4e5;
	padding-top: 15vw;
	clip-path: polygon(0 5vw, 100%  15vw, 100% 100%, 0 100%);

`
const OurServices = () => {
	return(<Section>
			<Flex  flexWrap='wrap' justifyContent= 'center' alignItems='center'>
			<Box  
				 width={[1,1/2,1/3]}
   				 p={4} 
   				 textAlign='center' 
   			>
			  Our Services 1
			</Box>
			<Box width={[1,1/2,1/3]} p={4} textAlign='center'>
			  Our Services 2
			</Box>
			<Box width={[1,1/2,1/3]} p={4} ml='auto'>
			  Our Services 3
			</Box>
		</Flex>
		<Heading
			is='h1'
			bg='goldenrod'
			fontSize={[3,4,5]}
			textAlign='center'
			py={[2,4,8]}
		>
		WE CREATE DIGITAL <br/> EXPERIENCES FOR BRANDS.
		</Heading>
		</Section>
		)
}

export default  OurServices;