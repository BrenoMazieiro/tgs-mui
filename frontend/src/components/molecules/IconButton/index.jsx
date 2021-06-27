import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Icons } from 'components'
import { useMyContext } from 'hooks'

const StyledButton = styled(Button)`
  fill: ${({ theme }) => theme.colors.text[1]};
`
const StyledIcons = styled(Icons)``
const ChildrenWrapper = styled.span`
  margin-left: 16px;
`

function IconButton({
  children, icon, type, themetype,
}) {
  const { theme } = useMyContext()
  return (
    <StyledButton type={type} themetype={themetype} theme={theme}>
      <StyledIcons name={icon} size={20} />
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string,
  type: PropTypes.string,
  themetype: PropTypes.oneOf(['primary', 'secondary']),
}

export default IconButton
