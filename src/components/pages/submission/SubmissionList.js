import React, { useState } from 'react'
import Master from '../Master'
import Section from '../../common/Section'
import Datatable from '../../table/Datatable'

const SubmissionList = () => {
    const [itemState, setState] = useState({
        items: []
    })

    const tableHead = [
        {
            column1: 'No',
            column2: 'Nomor Referensi',
            column3: 'Tanggal',
            column4: 'Lihat'
        }
    ]

    const tableContent = [
        ...itemState.items
    ]

    return(
        <Master>
            <Section pageName={'Daftar Pengajuan'} pageSubject={'Daftar seluruh pengajuan'}>
                <Datatable tableKind="data-table" headContent={tableHead} content={tableContent} />
            </Section>
        </Master>
    )
}

export default SubmissionList