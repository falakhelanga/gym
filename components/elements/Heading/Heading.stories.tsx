import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Heading as HeadingComponent } from "./Heading";
import React from "react";
import withFormik from "@gentslava/storybook-formik";

const meta: Meta = {
  component: HeadingComponent,

  title: "Components/Heading",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Heading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  render: (args) => {
    return (
      <>
        <HeadingComponent {...args}>Heading</HeadingComponent>
      </>
    );
  },
};
