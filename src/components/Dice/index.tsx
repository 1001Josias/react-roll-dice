'use client'
import React from 'react'
import SideOne from '../SideOne'
import SideTwo from '../SideTwo'
import SideThree from '../SideThree'
import SideFour from '../SideFour'
import SideFive from '../SideFive'
import SideSix from '../SideSix'

const Dice: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <SideOne {...props} />
      <SideTwo {...props} />
      <SideThree {...props} />
      <SideFour {...props} />
      <SideFive {...props} />
      <SideSix {...props} />
    </>
  )
}

export default Dice
