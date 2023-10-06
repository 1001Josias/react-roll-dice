import Dice from '.'
import 'jest-canvas-mock'
import { render } from '@testing-library/react'

describe('Dice', () => {
  it('renders without crashing', () => {
    render(<Dice />)
  })
})
