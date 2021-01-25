# Unnamed Chat App

The goal is to make a chat application that ties into Github. It will allow users to chat with other contributors on code repos in real time.

## On download

Download postgres.

_TODO_ => This might be needed to be looked at as the code currently points towards my local postgresDB

Run `npm i` on both the frontend and backend directories.

Run `npx prisma studio` after Prisma is installed. Allows for GUI editing of the db.

## Available Scripts

In the project directory, you can run:

### Front End Scripts

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Back End Scripts

#### `npm run dev`

Runs the back end in development mode.
Does not compile or build any typescript files.
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

#### `npm start`

Runs the compiled backend code in server.
Code must have been built using the `build` script, as well as exist in the dist/ folder.

#### `npm run clean`

Deletes the dist/ folder.

#### `npm run build`

Deletes the old dist/ folder, generates prisma and nexus and then rebuilds the dist/ folder.

#### `npm run generate`

Generates both prisma and nexus code.

#### `npm run generate:prisma`

Generates the prisma schema into usable code.

#### `npm run generate:nexus`

Runs a uncompiled dev server with the updated graphql schema.

#### `npm run migrate:dev`

Migrates a preview version of the db for testing.

## To Do List

Front End:

- Everything. Will update when this bridge is crossed.

Back End:

- Continue building out relations and db structure.
- Write general queries and mutations.
- Write specific queries and mutations.
- Incorporate websockets w/ Apollo Server.
- Set up subscription for messages.
- Authentication with Github.
- Feel free to work on anything else that interests you,
  just make sure all other devs are on board with changes.
