import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "./Button"


export default {
  title: "Renderonix/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: "Button",
}

export const Glass = Template.bind({})
Glass.args = {
  title: "Button",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
  title: "Button",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  title: "Button",
}
