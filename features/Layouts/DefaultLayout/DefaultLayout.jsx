import React from 'react'
import Navigation from 'features/data/common/modules/Navigation'
import Footer from 'features/data/common/modules/Footer/Footer.jsx'


const DefaultLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            { children }
            <Footer />
        </>
    )
}

export default DefaultLayout
