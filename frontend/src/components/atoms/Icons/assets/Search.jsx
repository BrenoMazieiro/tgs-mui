import React from 'react'
import PropTypes from 'prop-types'

/**
 * Dont Forget to remove the fill in every path, and the fill='none' in the svg
 */
const Search = ({ className }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6.56999 0C2.9415 0 0 2.9415 0 6.56999C0 10.1985 2.9415 13.14 6.56999 13.14C10.1985 13.14 13.14 10.1985 13.14 6.56999C13.1368 2.94279 10.1972 0.00314217 6.56999 0ZM6.56999 10.8548C4.20358 10.8548 2.28521 8.9364 2.28521 6.56999C2.28521 4.20358 4.20358 2.28521 6.56999 2.28521C8.9364 2.28521 10.8548 4.20358 10.8548 6.56999C10.8516 8.93512 8.93512 10.8516 6.56999 10.8548Z" />
      <path d="M15.6593 14.0484L13.3741 11.7631C12.9276 11.3167 12.2038 11.3167 11.7573 11.7631C11.3108 12.2096 11.3108 12.9335 11.7573 13.3799L14.0425 15.6651C14.489 16.1116 15.2128 16.1116 15.6593 15.6651C16.1058 15.2187 16.1058 14.4948 15.6593 14.0484Z" />
    </svg>
  )
}

Search.propTypes = {
  className: PropTypes.string,
}

export default Search
