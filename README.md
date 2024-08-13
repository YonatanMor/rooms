# Rooms

Rooms is a lightweight, mobile-oriented Remix CURD application for booking rooms.

## Main components

1. `_index.tsx`: Host most of the server side code, in charge of DB communications
2. `table.tsx`: Responsible for handling the cleint side data and table fontend UI
3. `event-dialog.tsx`: Displays the form interface and hnadle API calls to server

## Installation

1. Download and install Node.js from [@Node.js website](https://nodejs.org/e)

2. Clone the repository
   ```bash
   git clone https://github.com/YonatanMor/rooms
   ```

3. install dependencies
    ```bash
   npm install
   ```

4.  Run app 
    ```bash
    npm run dev
    ```
    
## Under the hood

- Rooms run `RemixJS` as framework
- Code in written in `TypeScript`
- Data storage utilise `PostgreSQL` DB along with `Prisma` for iprooved type safety
- `Framer motion` labrary for animations
- `tailwindcss` for styling
- `Zod` as a backend validation library


## Design

Rooms features an original design and is not a direct clone of any other app.
* The general layout was inspired by Google Calendar
* The grid styling is reminiscent of Apple Calendar

The styling has been revised multiple times from the original [Figma design](https://www.figma.com/design/qTJRg0AY0mg8tttuTCpZlC/rooms?node-id=0-1&t=VrXC8z4NGAD0TLF1-0)

Application [specifications sheet](https://sulfuric-mountain-a81.notion.site/Rooms-specifications-sheet-fdb0759608b74d718fe64819b4acc6f7?pvs=4)

