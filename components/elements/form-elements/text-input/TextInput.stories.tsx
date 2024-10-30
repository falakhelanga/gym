import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Input from "./TextInput";
import React from "react";
import withFormik from "@gentslava/storybook-formik";

const meta: Meta = {
  component: Input,
  decorators: [withFormik],
  title: "Inputs/Text Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  render: (args) => {
    return <Input containerClassName="text-white" {...args} />;
  },
};
export const TextInputWithError: Story = {
  render: (args) => {
    return (
      <Input
        containerClassName="text-white"
        error="Oops I have error"
        {...args}
      />
    );
  },
};
