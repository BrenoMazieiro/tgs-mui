import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { MdPanTool } from 'react-icons/md'
import Div from '../Div'
import Logo from './assets/Logo'
import Squares from './assets/Squares'
import Search from './assets/Search'

const genericStyle = css`
  width: 100%;
  height: 100%;
  fill: inherit;
`
const Wrapper = styled(Div)`
  min-height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
`
const LogoIcon = styled(Logo)`${genericStyle}`
const SquaresIcon = styled(Squares)`${genericStyle}`
const SearchIcon = styled(Search)`${genericStyle}`
const HandIcon = styled(MdPanTool)`${genericStyle}`

const icons = {
  logo: <LogoIcon />,
  hand: <HandIcon />,
  squares: <SquaresIcon />,
  search: <SearchIcon />,
}

function Icons({ name, size }) {
  return (
    <Wrapper size={size}>
      {icons[name] || 'INF'}
    </Wrapper>
  )
}

Icons.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
}

export default Icons
