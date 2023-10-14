## Steps of Development

### Initiation & Navigation
1. npx create-expo-app 
2. npm install @react-navigation/native, npx expo install react-native-screens react-native-safe-area-context -> For Navigation
3. npm install @react-navigation/stack -> For Stack Navigation, npm install @react-navigation/bottom-tabs -> For Bottom Tab Navigation
4. Creating the Home.js,Fav.js,Profile.js,Search.js in the App/Screens dir
5. Creating the TabNavigation following the documentation of react-navigation and also including the icons from expo/vector, Putting NavigationContainer in the App.js


### Creating the Home Screen
6. Downloading the assets from github
7. Creating the Home page, creating the Header component
8. Creating a shared folder to define the names of the colors(to mainain a consistency)

### Google Maps
9. Enabling the Android Maps Sdk and Places Api in the console.cloud.google.com and also creating a new API key
10. Copying the api key in the app.json file
11. npx expo install react-native-maps - to get the map view
12. Creating the GoogleMapView component inside the Home page
13. Issue in MapView component -> Solved by downgrading the react-native-maps version
13. npx expo install expo-location -> For accessing my location, following the docs for using this package
