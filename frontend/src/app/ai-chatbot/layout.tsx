import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AI CHAT",
  description: "Chat with AI Therapy Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        {children}
      </div>
  );
}
