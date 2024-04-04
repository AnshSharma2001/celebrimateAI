import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CelebrimateAI - Avatar Chat",
  description: "Talk to your idols with AI.",
};

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-4xl h-full w-full">{children}</div>;
};

export default ChatLayout;
