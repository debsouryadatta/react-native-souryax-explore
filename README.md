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
14. Now I got the problem of the error with the MapView, actually I gave the name of the root dir same as the package name(i.e. react-native-maps), then I changed it
15. Copying the useEffect for location to the App.js from the docs
16. Creating a context to share the location data with the other components, geting the context in the GoogleMapView component andf using it

17. Adding google fonts in our app(Storing the downloaded fonts in our assets files), npx expo install expo-font, then using the useFont hook in the App.js to load the fonts in any component
18. Adding Marker on maps -> in the GoogleMapView component


### Other components in home screen
19. Creating the CategoryList and the CategoryItem components
20. npm i axios, creating a func for fetching the places api in the GlobalsApi.js and calling the func in the Home.js
21. Creating the Placelist and the PlaceItem components
22. Selecting the category using setSelectedCategory func in the Home.js and the CategoryList.js
23. Putting the place markers, passing the placeList as a props to the GoogleMapView component then Creating the PlaceMarker component and mapping the placelist with the PlaceMarker component


### Place Details Modal
24. Creating new Stack navigation for the PlaceDetails component(Modal type presentation), also creating the onPress navigate function in the PlaceList component passing the place as params
25. Creating the onDirectionClick func to open the directions in the PlaceDetails component
26. Creating the PlaceDetailItem component
27. Creating the SharePlace function in the Share.js, to use in the PlaceDetailItem component


### Search Page
28. Creating the Search Page, creating the GoogleMapViewFull component, creating the searchByText func in the GlobalsApi.js and using it in the Search.js
29. Creating the Searchbar component, npx expo install expo-linear-gradient -> For the gradient Searchbar
30. Creating the BusinessList and the BusinessItem components to show up the below cards, using the earlier made PlaceDetail component in the BusinessList component
31. Using the setSearchText func in the Search.js and the Searchbar component to search the places


### Publishing
32. npm install -g expo-cli, expo publish
Link of published app: exp://u.expo.dev/update/f75c5466-be6e-4540-8ba2-3c2574d122a1

### TODO: Fav Section and the Profile section  