import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SideBar from "./SideBar";

const meta = {
  title: "Elements/SideBar",
  component: SideBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBarComponent: Story = {
  render: (args) => {
    return (
      <div className="flex w-full h-screen">
        <SideBar {...args} />
      </div>
    );
  },
};
