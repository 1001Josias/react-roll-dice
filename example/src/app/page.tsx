import Dice from '../../../src/components/Dice' // or import Dice from "react-roll-dice" if package is installed

export default function Home() {
  return (
    <div>
      <h1>Default:</h1>
      <Dice />
    </div>
  )
}
