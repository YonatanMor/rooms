import { useMatches } from "@remix-run/react"
import { IndexLoaderData } from "~/routes/_index"

export function useIndexData() {
  const matches = useMatches()
//   console.log(matches)
  const indexRoute = matches.find((m) => m.id === "routes/_index")
  return indexRoute?.data as IndexLoaderData
}

//   useMatchesData: get data from any loader function


//   Returns the current route matches on the page. This is useful for creating layout abstractions with your current routes.
//   function SomeComponent() {
//     const matches = useMatches();

//     // ...
//   }


// matches has the following shape:
// [
//     { id, pathname, data, params, handle }, // root route
//     { id, pathname, data, params, handle }, // layout route
//     { id, pathname, data, params, handle }, // child route
//     // etc.
//   ];