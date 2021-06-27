import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { default as MuiButton } from '@material-ui/core/Button'
import { useMyContext } from 'hooks'

const ButtonWrapper = styled(MuiButton)`
  margin: 5px;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  align-self: center;
  color: ${({ theme }) => theme.colors.text[1]} !important;  
  font-size: ${({ theme, size }) => theme.sizes.text[size]};
  background-color: ${({ theme, themetype }) => {
    const types = {
      primary: theme.colors.primary[1],
      secondary: theme.colors.secundary[0],
    }
    return types[themetype]
  }} !important;
  width: 98%;
  height: 98%;
`

const Button = ({
  className, type, size = 'large', children, onClick, themetype,
}) => {
  const { theme } = useMyContext()
  return (
    <ButtonWrapper
      className={className}
      type={type}
      theme={theme}
      size={size}
      onClick={onClick}
      themetype={themetype}
      variant="contained"
    >
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  onClick: PropTypes.func,
  themetype: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
