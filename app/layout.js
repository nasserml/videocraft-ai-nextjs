import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { dark } from "@clerk/themes";
import Provider from "./provider";

export const metadata = {
  title: "VideoCraft AI | Your AI Short Video Generator",
  description: "Create short videos with AI",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark hydrated">
        <body>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
