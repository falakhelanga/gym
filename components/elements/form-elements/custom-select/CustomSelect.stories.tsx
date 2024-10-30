import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Select from "./CustomSelect";
import React from "react";
import withFormik from "@gentslava/storybook-formik";

const meta: Meta = {
  component: Select,
  decorators: [withFormik],
  title: "Inputs/Custom Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    label: "Name",
    // placeholder: "Enter your name",
  },
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

export const SelectInput: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("1");
    return (
      <Select
        onChange={(e) => setValue(e.target.value)}
        value={value}
        containerClassName="text-white"
        options={options}
        {...args}
      />
    );
  },
};
export const TextInputWithError: Story = {
  render: (args) => {
    return (
      <Select
        containerClassName="text-white"
        error="Oops I have error"
        options={options}
        {...args}
      />
    );
  },
};
