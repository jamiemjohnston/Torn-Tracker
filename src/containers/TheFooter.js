import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2020 Untouchable</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by Magic</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
