import React from 'react';
import { Flex, Box, Heading, Border, Text } from 'rebass';
import styled from 'react-emotion'

const Section = styled('section')`
	clear: both;
	padding:0px;
	width: 100%;
	height: 900px;
	margin: 0px;
	padding-top:20vw;
	margin-bottom: -15vw;
	background-color: #444;
	clip-path: polygon(0 10vw, 100%  20vw, 100% 100%, 0 100%);
`

const About = (props) => {
  return (
    	<Section>
			<Flex
				flexWrap='wrap' 
				justifyContent= 'space-between'  
				flexDirection ='column' 
				style={{paddingBottom: '120px', paddingTop: '120px', textAlign: 'center'}}>
				<Box 
					my={[30]} 
				>
					<Text
						my={[30]}
					>tech47</Text>
					<Heading
						is='h1'

					> A DIGITAL STUDIO CRAFTING <br/> BEAUTIFUL EXPERIENCES.
					</Heading>     
				</Box>
				<Text>We’ve been crafting beautiful websites, launching stunning brands <br/>
					and making clients happy for years. With our prestigious craftsmanship, <br/>
					 remarkable client care and passion for design.
				</Text>		
			</Flex>
		</Section>
  )
}

export default About;