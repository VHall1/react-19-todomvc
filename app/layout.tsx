import type { Metadata } from "next";
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
      <body>
        {children}
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by <a href="http://github.com/vhall1">Victor Hall</a>{" "}
            <a href="http://github.com/vhall1/react-19-todomvc">(Source)</a>
          </p>
          <p>
            Inspired by <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
