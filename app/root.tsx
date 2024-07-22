import ContextProvider from "./app-context"
import type { LinksFunction } from "@remix-run/node"
import tailwind from "~/styles/tailwind.css?url"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwind }]
}

export default function App() {
  return (
    <html lang="en" dir="ltr" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ContextProvider>
          <Outlet />
        </ContextProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
