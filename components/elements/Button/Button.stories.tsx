import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button as ButtonComponent } from "./Button";

const meta = {
  title: "Elements/Button",
  component: ButtonComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  render: (args) => {
    return (
      <div className="">
        <ButtonComponent {...args}>Click me</ButtonComponent>
      </div>
    );
  },
};
