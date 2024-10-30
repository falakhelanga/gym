import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Search from "./Search";

const meta = {
  title: "Elements/Search",
  component: Search,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchComponent: Story = {
  render: (args) => {
    return (
      <div className="">
        <Search {...args} />
      </div>
    );
  },
};
