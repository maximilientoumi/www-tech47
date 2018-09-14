import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../layouts'
import Home from '../components/Home'
import { Provider } from 'rebass'


class  HomePage  extends React.Component{
	render(){
		return(
			<ParallaxProvider>
				<Layout location={location}>
				  <Provider>
				  	<Home />
				  </Provider>
				</Layout>
			</ParallaxProvider>
			)
	}
}




export default HomePage;