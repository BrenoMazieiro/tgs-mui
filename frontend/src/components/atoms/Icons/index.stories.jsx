import React from 'react'

import Icons from '.'

export default {
  title: 'components/atoms/Icons',
  component: Icons,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Icons {...args} />
export const SimpleIcon = Template.bind({})
SimpleIcon.args = {
  name: 'logo',
  size: 20,
}
