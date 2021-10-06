# Web & Mobile ClojureScript App Example

Example of a ClojureScript application targeting Web, Android, and iOS with a
single codebase with hot reloading for web and mobile at the same time.

Does not use Expo.

## Running Web

```bash
npm install

npx shadow-cljs watch app
```

In a separate shell (Launches webpack dev server)

```bash
npm run web
```

## Running Mobile (Android / iOS)

Watch ClojureScript for changes.

```bash
npm install

npx shadow-cljs watch app
```

In a separate shell (run metro to bundle the mobile application)

```bash
cd react-native
npm install
npm run start
```

In a separate shell (launch the application on a device/emulator)

```bash
cd react-native
npm run android
# or
npm run ios
```
