import "../styles/app.scss";
import Header from "./Header";
import { ContextProvider } from "../components/Clients";
export const metadata = {
  title: 'Todo App',
  description: 'This is a Todo App project made by gaurav',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  )
}
