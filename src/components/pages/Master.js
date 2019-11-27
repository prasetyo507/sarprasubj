import React from 'react'

import Header from "../common/Header";
import Menu from "../common/Menu";
import Footer from "../common/Footer"
import Wrapper from "../common/Wrapper";

const Master = (props) => {
    return(
        <>
            <Header />
            <Menu />
            <Wrapper>
                {props.children}
            </Wrapper>
            <Footer />
        </>
    )
}

export default Master;