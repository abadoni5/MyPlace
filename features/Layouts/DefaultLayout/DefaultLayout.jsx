import React from 'react'
import Navigation from 'features/common/modules/Navigation/Navigation.js'
import Footer from 'features/common/modules/Footer/Footer.jsx'


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
