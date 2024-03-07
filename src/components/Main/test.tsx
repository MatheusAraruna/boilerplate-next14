import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o componente
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Boilerplate React Apps Router/i })
    ).toBeInTheDocument()
  })
})
