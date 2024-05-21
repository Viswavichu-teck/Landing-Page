import React from 'react'
import Nav from './content/Nav'
import Head from './content/Head'
import Section from './content/Section'
import Info from './content/Info'
import Signup from './content/Signup'
import People from './content/People'
import Footer from './content/Footer'

function App() {
  return <>
    {/* <!-- Navigation--> */}
<Nav/>
        {/* <!-- Masthead--> */}
<Head/>
        {/* <!-- Icons Grid--> */}
<Section/>
        {/* <!-- Image Showcases--> */}
<Info/>
        {/* <!-- Testimonials--> */}
<People/>
        {/* <!-- Call to Action--> */}
<Signup/>
        {/* <!-- Footer--> */}
<Footer/>
  </>
}

export default App