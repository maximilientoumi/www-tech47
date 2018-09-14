import React from 'react'
import Layout from '../../layouts'
import { Flex, Box, Text } from 'rebass'
import styled from 'react-emotion'
import Ourtech from './OurTech'
import LandingPage from './LandingPage'
import OurServices from './OurServices'
import Title from './Title'
import About from './About'
import OurTechnologies from './OurTechnologies'

const ourTechList = ['GatsbyJS, ReactJS, NodeJS, Prisma, Redux, NextJS'];

const Wrapper = styled('div')`
	box-sizing: border-box;
	margin:0px;
	overflow: hidden;
`
// const LandingPage = styled('div')`
// 	background-image: url('http://wpdemos.themezaa.com/h-code/wp-content/uploads/2015/08/agency-img1.jpg');
// 	width: 100%;
// 	position: relative;
// 	background-size: cover;
// 	min-height: 800px;
// `


export default class Home extends React.Component {
	render() {
		return (
			<Wrapper>
				  	<LandingPage
				  		imageUrl='http://wpdemos.themezaa.com/h-code/wp-content/uploads/2015/08/agency-img1.jpg'

				  	/>
				  	<Title 
				  	  title='About Us'
				  	  text='We think you’ll love working with us.'
				  	/>
					<About/>
					<OurServices/>
				  </Wrapper>
		);
	}
}

