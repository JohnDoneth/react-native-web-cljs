# Web & Mobile ClojureScript App Example

Example of a ClojureScript application targeting Web, Android, and iOS with a
single codebase with hot reloading for web and mobile at the same time.

Includes Storybook.js for previewing components.

## Running Web

```
npm install

npx shadow-cljs watch web
```

## Running Mobile (Android / iOS)

```
npm install

npx shadow-cljs watch mobile
```

In a separate shell

```
cd react-native
npm install
npm run start
```

In a separate shell

```
cd react-native
npm run android
# or
npm run ios
```
