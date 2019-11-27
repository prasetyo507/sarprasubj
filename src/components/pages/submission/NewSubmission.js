import React, { Component } from 'react';

import Section from '../../common/Section';
import Master from '../Master';
import Datatable from '../../table/Datatable';

class NewSubmission extends Component {
    constructor() {
        super();
        this.state = {
            tableHead: [
                {name: 'Nama Barang'},
                {name: 'QTY'},
                {name: 'Keterangan'},
                {name: 'Aksi'}
            ],
            tableContent: [
                {content: 'Barang 1'},
                {content: '7'},
                {content: 'this is keterangan'},
                {content: <button class="btn btn-success"><i class="fa fa-plus"></i></button>}
            ]
        }
    }
    render() {
        return(
            <Master>
                <Section pageName={'Formulir Pengajuan'} pageSubject={'Buat pengajuan barang baru'}>
                    <Datatable 
                        headContent={this.state.tableHead}
                        content={this.state.tableContent} 
                    />
                </Section>
            </Master>
        )
    }
}

export default NewSubmission;