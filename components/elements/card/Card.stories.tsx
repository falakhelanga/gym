import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Card as CardComponent } from "./Card";
import React from "react";
import withFormik from "@gentslava/storybook-formik";
import TextInput from "../form-elements/text-input/TextInput";

const meta: Meta = {
  component: CardComponent,

  title: "Components/Card",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: (args) => {
    return (
      <>
        <CardComponent {...args}>
          <TextInput label="Email" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />
        </CardComponent>
      </>
    );
  },
};
