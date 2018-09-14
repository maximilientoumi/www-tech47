import React from 'react';
import { Box, Flex, Text } from 'rebass'
import styled from 'react-emotion'

const Section = styled('section')`
	clear: both;
	padding:0px;
	width: 100%;
	height:900px;
	margin: 0px auto;
`

const Span = (props) => {
  return (
    <React.Fragment>{
    	props.last ==='yes' ? <span>{props.tech  }</span> :<span> {props.tech + " " + "/"}</span>
    }
    </React.Fragment>
  )
}



const OurTechnologies = ({ techList }) => {
	const listLength = techList.length
  return (
    <Section bg='#e6af2a'>

    	<Text
    		bg='#e6af2a'
    		px={5}
    		textAlign='center'
    		style={{paddingTop: '30px', paddingBottom: '30px'}} 
        >
			{
				techList.map((tech, index) => {
					if(index === listLength){
						return <Span tech={tech} key={tech} last='yes'/> 
					} else {
						 return <Span
							tech={tech}
							key={tech}
							last='no'
						/>
					}
				})
			}
		</Text>
	</Section>	
  )
}

export default OurTechnologies;