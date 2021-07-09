import React from "react";
import { Button } from '@ferris/react/components/button/Button'; 
// import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button"
};
