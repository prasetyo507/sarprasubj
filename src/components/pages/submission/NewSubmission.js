import React, { Component } from 'react';

import Section from '../../common/Section';
import Master from '../Master';

class NewSubmission extends Component {
    render() {
        return(
            <Master>
                <Section pageName={'Formulir Pengajuan'} pageSubject={'Buat pengajuan barang baru'}>
                    <h1>Pengajuan baru</h1>
                </Section>
            </Master>
        )
    }
}

export default NewSubmission;