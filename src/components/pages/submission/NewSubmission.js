import React, { Component } from 'react';

import Section from '../../common/Section';
import Master from '../Master';
import Datatable from '../../table/Datatable';

class NewSubmission extends Component {
    constructor() {
        super();
        this.state = {
            tableHead: [
                {
                    column0: 'Nama Barang',
                    column1: 'QTY',
                    column2: 'Keterangan',
                    column3: 'Aksi',
                }
            ],
            tableContent: [
                {
                    name: 'Barang 1',
                    qty: '7',
                    note: 'this is keterangan',
                    action: <button class="btn btn-success"><i class="fa fa-plus"></i></button>
                },
                {
                    name: 'Barang 2',
                    qty: '74',
                    note: 'this is keterangan 2',
                    action: <button class="btn btn-success"><i class="fa fa-plus"></i></button>
                }
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