import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonSpinner as SpinnerComponent } from "./ButtonSpinner";
import { Button } from "../Button/Button";

const meta = {
  title: "Elements/ButtonSpinner",
  component: SpinnerComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof SpinnerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  render: (args) => {
    return (
      <div className="">
        <Button>
          <SpinnerComponent {...args} />
        </Button>
      </div>
    );
  },
};
