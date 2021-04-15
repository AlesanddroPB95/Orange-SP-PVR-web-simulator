import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { scheduleTimeState } from '../../../atoms/timeState'
import Colors from '../../../data/Colors'
import { formatTimingHeader } from '../../../helpers/timeFormattings'

const useStyles = makeStyles({
  timingHeader: {
    color: Colors.accent,
    lineHeight: 1.25,

    '&:first-child': { textAlign: 'right' },
    '&:not(:first-child)': {
      gridColumnEnd: 'span 30',
    },
  },
})

const TimingHeaders: React.FC = () => {
  const { scheduleStartTime } = useRecoilValue(scheduleTimeState)
  const classes = useStyles()

  return (
    <>
      <span className={classes.timingHeader}>Today</span>
      {/* Spacer */}
      <span />
      <span className={classes.timingHeader}>{formatTimingHeader(scheduleStartTime)}</span>
      <span className={classes.timingHeader}>{formatTimingHeader(scheduleStartTime.add(30, 'minutes'))}</span>
      <span className={classes.timingHeader}>{formatTimingHeader(scheduleStartTime.add(60, 'minutes'))}</span>
    </>
  )
}

export default TimingHeaders
