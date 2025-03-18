import React from 'react'
import { CallStatusContainer } from './style'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback'
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'

import {
  CRow,
  CCol,
  CWidgetStatsA,
} from '@coreui/react'

const CallStatus = ({ OnlineAgentList, CallAgentSummaries, ServiceCode, CallQueueList }) => {
  let callOffer = 0
  let CallAbandon = 0

  Object.keys(CallAgentSummaries).map((queueName) => {
    const item = CallAgentSummaries[queueName]

    if (ServiceCode === 'ALL') {
      callOffer += parseInt(item.CallOffer)
      CallAbandon += parseInt(item.CallAbandon)
    } else if (ServiceCode === queueName) {
      callOffer += parseInt(item.CallOffer)
      CallAbandon += parseInt(item.CallAbandon)
    }
  })

  let Counter = 0

  if (ServiceCode === 'ALL') {
    Counter = OnlineAgentList.length
  } else {
    const list = OnlineAgentList.filter((item) => {
      return item.Queue === ServiceCode
    })

    Counter = list.length
  }

  let QueueCounter = 0

  if (ServiceCode === 'ALL') {
    CallQueueList.map((item) => {
      QueueCounter += parseInt(item.ConcurrentCall)
    })
  } else {
    CallQueueList.map((item) => {
      if (item.Queue === ServiceCode) {
        QueueCounter += parseInt(item.ConcurrentCall)
      }
    })
  }

  return (
    <CRow className="mt-5 rounded-3 shadow-sm text-white" xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3} className="offerCall group">
        <CWidgetStatsA
          color="success"
          className="py-3 position-relative overflow-hidden"
          value={
            <>
              <div className="label">Offer Call</div>
              <div className="counter d-flex gap-2 align-items-center">
                <div className="icon opacity-25 position-absolute top-0 start-6 w-25">
                  <PhoneCallbackIcon style={{ fontSize: '7rem' }} />
                </div>
                <div className="h1">{callOffer}</div>
              </div>
            </>
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3} className="">
        <CWidgetStatsA
          color="danger"
          className="py-3 position-relative overflow-hidden"
          value={
            <>
              <div className="label">Abandon Call</div>
              <div className="counter d-flex gap-2 align-items-center">
                <div className="icon opacity-25 position-absolute top-0 start-6 w-25">
                  <PhoneMissedIcon style={{ fontSize: '7rem' }} />
                </div>
                <div className="h1">{CallAbandon}</div>
              </div>
            </>
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3} className="logged_agent group">
        <CWidgetStatsA
          color="info"
          className="py-3 "
          value={
            <>
              <div className="z-2">Agents</div>
              <div className="counter d-flex gap-2 align-items-center">
                <div className="icon opacity-50 position-absolute top-0 start-6 w-25">
                  <RecordVoiceOverIcon className='' style={{ fontSize: '7rem' }} />
                </div>
                <div className="h1">{Counter}</div>
              </div>
            </>
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3} className="total_call_queue group" xs={{ gutter: 4 }}>
        <CWidgetStatsA
          color="light"
          className="py-3"
          value={
            <>
              <div className="label text-dark"> Total Queue</div>
              <div className="counter d-flex gap-2 align-items-center text-dark">
                <div className="h1">{QueueCounter}</div>
              </div>
            </>
          }
        />
      </CCol>
    </CRow>
  )
}

export default CallStatus
