import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ErrorBlock as ErrorBlockComponent } from "./ErrorBlock";

const meta = {
  title: "Elements/ErrorBlock",
  component: ErrorBlockComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ErrorBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorBlock: Story = {
  render: (args) => {
    return (
      <div className="">
        <ErrorBlockComponent {...args}>
          Oops something went wrong
        </ErrorBlockComponent>
      </div>
    );
  },
};
