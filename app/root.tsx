import type { Song, User } from "@prisma/client"
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { typedjson } from "remix-typedjson"
import type { UseDataFunctionReturn } from "remix-typedjson/dist/remix"
import tailwind from "~/styles/tailwind.css?url"
import { authenticator } from "./models/auth.server"
import {
  findAllSongs,
  findMostPopularSongs,
  findRecentlyAddedSongs,
  findUserPlayHistory,
} from "./models/song.server"
import { findUserByIdOrThrow } from "./models/user.server"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
  ]
}

export default function App() {
  return (
<html lang="he" dir="rtl" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
