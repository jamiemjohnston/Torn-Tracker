import React, { Component } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import usersData from '../../users/UsersData';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['name','id','refilled','refills','deleted','notified','comment']

class Gamblers extends Component {
  constructor() {
    super();
    this.state = {
      gamblers: []
    }
  }

  componentDidMount() {
    fetch('api/gamblers')
      .then(res => res.json())
      .then(gamblers => {
        delete gamblers['watcher'];
        delete gamblers['last_updated'];
        this.setState({gamblers})
      })
  }

  render() {

  return (
    <>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Known Gamblers
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={this.state.gamblers}
              fields={fields}
              dark
              hover
              striped
              bordered
              sorter="true"
              tableFilter="true"
              size="sm"
              itemsPerPage={25}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
    
  }

}

export default Gamblers
