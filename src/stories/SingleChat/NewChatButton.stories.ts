import type { Meta, StoryObj } from "@storybook/react";
import { NewChatButton } from "../../chat/LeftNavBar/LeftNavBar";

const meta = {
  title: "SingleChat/NewChatButton",
  component: NewChatButton,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NewChatButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
