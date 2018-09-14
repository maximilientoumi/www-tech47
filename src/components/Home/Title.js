import React from 'react';
import { Flex, Box, Heading, Border, Text } from 'rebass';
import styled from 'react-emotion'


const Section = styled('section')`
	clear: both;
	width: 100%;
	margin: 0px;
	height: 900px;
	padding:0px;
	margin-bottom: -30vw;
	background-color: #fff;
	clip-path: polygon(0 15vw, 100%  0, 100% 100%, 0 100%);
	border-top: 3px solide red;
	padding-top: 20vw;

`

const Title = ({ title, text }) => {
  return (
    <Section id='about'>
		<Flex 
			
			justifyContent='space-between'
			flexWrap='wrap'
			p={10}
		>
			<Border
				borderColor='#e6af2a'
				border={3}
				borderTop={0}
				borderBottom={0}
				borderRight={0}
				
			>
				<Heading
					is='h1'
					mx={[3]}
				>{ title }</Heading>
			</Border>
			<Text
			 my={3}
			> { text } </Text>
		</Flex>
	</Section>
  )
}

export default Title;