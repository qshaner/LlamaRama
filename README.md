# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. If you're in Windows
* After launching the backend, flask will ell you "Running on http://172.X.X.X".
* In Powershell (as administrator), run `netsh interface portproxy add v4tov4 listenport=5000 listenaddress=0.0.0.0 connectport=5000 connectaddress=172.X166.X.X`
   * What you got from flask
   * You will have to run this as Administrator
* You can test everything first by running the application on the web version

4. Running the app externally (Not Linux)
* To get the application running on an external device through Expo, you need to create an **Inbound Rule** in your firewall
* Whatever port you're using for your backend, and the Expo default port of 8081 need to be enabled by your firewall
