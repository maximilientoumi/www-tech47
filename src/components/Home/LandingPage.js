import React from 'react';
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { Parallax } from 'react-scroll-parallax';
import { Box, Heading, Button, Relative, Absolute, ButtonTransparent, Flex} from 'rebass'
import chevron from './chevronsDown.svg'

const backgroundImg = 'http://wpdemos.themezaa.com/h-code/wp-content/uploads/2015/08/agency-img1.jpg'

const Root = styled(Flex)`
	clear: both;
	padding-left: 0px;
	padding-right: 0px;
	margin: 0px;
	margin-bottom: -15vw;
	position:relative; 
	overflow: hidden;
  	background-image: url('${backgroundImg}');
  	background-size: cover;
  	background-position: fixed top;
  	background-attachment: fixed;
  	background-repeat: no-repeat;
  	max-width: 100%;
  	min-height:100vh;
  	align-items: center;
  	justify-content: center;
  	flex-direction: column; 
  	

  	
`
const Line = styled(Box)`
    clip-path: polygon(0% 0%, 100% 10, 100% 60%, 0 0%);
    min-height:100px;
    positio:absolute;
    bottom:0px;
    width: 100vw;
    background-color: #000;
  
`
const Wrapper =styled(Flex)`
	position:relative;
	justify-content: center;
	align-items:center; 

`
const LandingPage = () => {
  return (
	    <Root>
	    	<Wrapper>
	    		<Box>
	    			<Heading
						is='h1'
						fontSize={[4,5,6,7]}
						textAlign='center'
					>
					    Don't create <br/> limitations
					</Heading>
	    		</Box>
				<Box width={[0, 25]} style={{
						position: 'absolute',
						borderRadius: '50%',
						bottom: '-230px', 
						height: '50px', 
						width: '50px', 
						backgroundColor: 'darkorchid',
						textAlign: 'center',
						zIndex:'10',
					}}>
					<ButtonTransparent
						is='a'
						href='#about'
						px={0}
						mx={0}
						border={0}
						textAlign='center'
						style={{zIndex:'10'}}
					>
					  	<img src={chevron} width="24px" alt='chevron down'/>
					</ButtonTransparent>
				</Box>
	    	</Wrapper>
			
	    </Root>
	
  )
}

LandingPage.contextTypes = {
    parallaxController: PropTypes.object.isRequired,
};
export default LandingPage;