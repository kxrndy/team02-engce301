import React from 'react'
import { Header } from './style'
import { useState } from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import DateTime from './dateTime'

import wallboard_logo from './../../assets/images/react.png'

import { CRow, CCol, CWidgetStatsA } from '@coreui/react'

const WallboardHeader = ({ title, serviceChange, ServiceCode }) => {
  const [age, setAge] = React.useState('10')

  const serviceCode = [
    'ALL',
    'Team1',
    'Team2',
    'Team3',
    'Team4',
    'Team5',
    'Team6',
    'Team7',
    'Team8',
    'Team9',
  ]

  const handleChange = (event) => {
    setAge(event.target.value)
    serviceChange(event.target.value)
  }

  return (
    <CRow className="mt-5 text-white" xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3} className="offerCall group">
        <img src={wallboard_logo} style={{ maxWidth: '200px', width: 'auto' }} />
      </CCol>
      <CCol sm={6} xl={4} xxl={3} className="offerCall group">
        <div className="h1 text-info">{title}</div>
      </CCol>
      <CCol sm={6} xl={4} xxl={3} className="offerCall group">
        <div className="h1" style={{ color: "#999" }}>
          <DateTime></DateTime>
        </div>
      </CCol>
      <CCol sm={6} xl={4} xxl={3} className="offerCall group">
        <div style={{ color: "#999" }}> Call Queue</div>
        <div>
          <FormControl className='bg-light rounded-4' sx={{ width: '150px' }}>
            <Select value={ServiceCode} onChange={handleChange}>
              {serviceCode.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </CCol>
    </CRow>
  )
}

export default WallboardHeader
