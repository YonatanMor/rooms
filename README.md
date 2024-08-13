# Rooms

Rooms is a small Remix CURD application for room booking.

## Main components

1. `_index.tsx`: Host most of the server side code, charge of DB communications
2. `table.tsx`: Responsible for handling the cleint side data and table fontend UI
3. `event-dialog.tsx`: user input and api call to server, input form UI
4. `select.tsx`:

## Installation

1. Download and install Node.js from [@Node.js website](https://nodejs.org/e)

2. Clone the repository:
   ```bash
   git clone https://github.com/YonatanMor/rooms
   ```
3. Run `npm install`
4. Run `npm run dev`
5. grabz is that all? will the DB work?

## Under the hood

- Rooms run RemixJS as framework
- Code in written in TypeScript
- Data storage utilise PostgreSQL DB along with Prisma for iprooved type safety
- Framer motion labrary for animations
- tailwindcss for styling
- Zod as a backend validation library

file stracture 
