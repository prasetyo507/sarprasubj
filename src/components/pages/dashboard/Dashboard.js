import React, { Component } from 'react';
import Section from '../../common/Section';
import Master from '../Master';

class Home extends Component {
    render() {
        return (
            <Master>
                <Section pageName={'Dashboard'} pageSubject={'Control panel'}>
                    <h1>Hello, Kardinah indriana meutia!</h1>
                </Section>
            </Master>
        )
    }
}

export default Home;