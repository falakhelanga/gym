import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Title as TitleComponent } from "./Title";

const meta = {
  title: "Elements/Title",
  component: TitleComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof TitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => {
    return (
      <div className="">
        <TitleComponent {...args}>I am title</TitleComponent>
      </div>
    );
  },
};
