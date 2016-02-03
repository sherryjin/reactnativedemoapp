# reactnativedemoapp
afar demo android app, using react native

index.android.js is where all the react code is.

All the build stuff is in the android folder.

Pros:

* React Native syntax is pretty much exactly like React (with a smaller subset of available props). Very easy to use and elegant to write, especially coming from a React world.
* Debugging allows for updating JS to the emulator without having to rebuild the entire app

Cons:
* React Native documentation is spotty, at best, and the React Native environment is somewhat stripped down from the full-blown Android dev environment you'd get if you were working in Android Studio. This could lead to problems down the road, especially for developers not familiar with the Android dev environment. You'll end up having to set up a lot of things from scratch.
* Many RN UI components are not available for Android (or not working for Android). Many third party libraries have to be used instead.
* Because of the above, not a lot of shared UI components can be used cross platform. We'd still end up writing a lot of IOS- and Android-specific UI code.

