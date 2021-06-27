import React from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Div, Icons, IconButton } from 'components'

const Wrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`
const genericDesign = css`
  margin-top: 40px;
`
const LogoWrapper = styled(Div)`${genericDesign}`
const ButtonWrapper = styled(Div)`${genericDesign}`
const MenuWrapper = styled(Div)`${genericDesign}`

function Sidebar() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Icons name="logo" size={53} />
      </LogoWrapper>
      <ButtonWrapper>
        <IconButton icon="squares" type="button" themetype="primary">Dashboard</IconButton>
      </ButtonWrapper>
      <MenuWrapper>
        {/* <SideBarMenu /> */}
      </MenuWrapper>
    </Wrapper>
  )
}

// Sidebar.propTypes = {
//   children: PropTypes.any,
// }

export default Sidebar
