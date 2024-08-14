import { PrismaClient } from "@prisma/client"

// let db: PrismaClient

// declare global {
//   // eslint-disable-next-line no-var
//   var __db__: PrismaClient
// }

// // this is needed because in development we don't want to restart
// // the server with every change, but we want to make sure we don't
// // create a new connection to the DB with every change either.
// // in production we'll have a single connection to the DB.
// if (process.env.NODE_ENV === "production") {
//   db = getClient()
// } else {
//   if (!global.__db__) {
//     global.__db__ = getClient()
//   }
//   db = global.__db__
// }

// function getClient() {
//   // NOTE: during development if you change anything in this function, remember
//   // that this only runs once per server restart and won't automatically be
//   // re-run per request like everything else is. So if you need to change
//   // something in this file, you'll need to manually restart the server.
//   const client = new PrismaClient()
//   // connect eagerly
//   client.$connect()

//   return client
// }

const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})
db.$connect()

export { db }
