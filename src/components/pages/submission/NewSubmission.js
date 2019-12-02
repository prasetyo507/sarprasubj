import React, { Component } from 'react';

import Section from '../../common/Section';
import Master from '../Master';
import Datatable from '../../table/Datatable';
import FormHeader from './FormHeader';

class NewSubmission extends Component {
    constructor() {
        super();
        this.state = {
            tableContent: []
        }
    }

    handleInputChange(e) {
        
    }

    render() {
        const tableHeader = [
            {
                column0: 'Nama Barang',
                column1: 'QTY',
                column2: 'Keterangan',
                column3: 'Aksi',
            }
        ];

        const tableContent = [
            {
                column0: <input type="text" name="item_name" onChange={e => this.handleInputChange(e)} />,
                column1: <input type="text" name="item_qty" />,
                column2: <input type="text" name="item_note" />,
                column3: <button className="btn btn-success btn-sm" onClick={this.handleAddContent}><i className="fa fa-plus"></i></button>,
            }
        ]

        return(
            <Master>
                <Section pageName={'Formulir Pengajuan'} pageSubject={'Buat pengajuan barang baru'}>
                    <FormHeader />
                    <Datatable 
                        headContent={tableHeader}
                        content={tableContent} 
                    />
                </Section>
            </Master>
        )
    }
}

export default NewSubmission;