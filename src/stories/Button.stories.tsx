import React from 'react';
import type { Meta,StoryFn } from '@storybook/react';
import { Button } from '../components';
import {ButtonProps} from "../components/Button/Button"

const meta:Meta = {
  title: 'Button',
  component: Button,
} 
export default meta;



const Template : StoryFn<ButtonProps>= (args)=> <Button {...args}/>

export const Primary=Template.bind({});
Primary.args={
  children:"Click me"
}

export const Secondary= Template.bind({})

Secondary.args={
  variant:'secondary',
  children:"secondary"
}
