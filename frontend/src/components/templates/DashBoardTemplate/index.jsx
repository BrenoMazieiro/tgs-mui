import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Div } from 'components'
import { useMyContext } from 'hooks'

const Container = styled(Div)`
  display: flex;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background[0]};
`
const StyledSidebar = styled(Div)`
  min-height: 100vh;
  min-width: 20%;
`
const StyledContent = styled(Div)`
  flex: 1;
  min-height: 100vh;
`

function DashBoardTemplate({ children, sidebar }) {
  const { theme } = useMyContext()
  return (
    <Container theme={theme}>
      <StyledSidebar theme={theme}>{sidebar}</StyledSidebar>
      <StyledContent theme={theme}>{children}</StyledContent>
    </Container>
  )
}

DashBoardTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  sidebar: PropTypes.any.isRequired,
}

export default DashBoardTemplate
