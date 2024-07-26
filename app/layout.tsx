import "todomvc-app-css/index.css";
import "./styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>React 19 TodoMVC</title>
      <body>{children}</body>
    </html>
  );
}
