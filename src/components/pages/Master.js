import React from 'react'

import Header from "../common/Header";
import Menu from "../common/Menu";
import Footer from "../common/Footer"
import Wrapper from "../common/Wrapper";
import { connect } from 'react-redux';

const Master = (props) => {
    if (localStorage.getItem('userInfo')) {
        return (
            <>
                <Header />
                <Menu />
                <Wrapper>
                    {props.children}
                </Wrapper>
                <Footer />
            </>
        )
    } else {
        localStorage.clear();
        window.location.href = "/"
        return false;
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth.authForm
    };
};
export default connect(mapStateToProps, null)(Master);