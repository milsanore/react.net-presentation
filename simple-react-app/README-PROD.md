Once you've built the app using `npm run build`, you’ll have a production-ready version of your app that is located in the `dist` directory. To serve this static content (i.e., the built app), you can use a static file server.

Here are a few different ways to run the app:

### Option 1: Using `webpack-dev-server` (during development)
If you’re still in development mode and want to serve your production build, you can use `webpack-dev-server`:

1. **Run the build command**:
   ```bash
   npm run build
   ```

2. **Use `webpack-dev-server` to serve the `dist` folder**. You can modify your `webpack.config.js` to serve from the `dist` folder, but for a simple solution, you can install a static file server:

### Option 2: Using `serve` (a simple static server)

1. Install `serve` globally (if you don’t have it already):
   ```bash
   npm install -g serve
   ```

2. After building your app, run `serve` on the `dist` folder:
   ```bash
   serve -s dist
   ```

3. This will start a local server (by default on port 5000) and serve your production build. You can visit your app by going to `http://localhost:5000`.

### Option 3: Using `http-server` (another static server option)

1. Install `http-server` globally:
   ```bash
   npm install -g http-server
   ```

2. Then, run it from the `dist` folder:
   ```bash
   http-server ./dist
   ```

3. This will also start a server (by default on port 8080), and you can access your app at `http://localhost:8080`.

### Option 4: Using any web server (e.g., Nginx, Apache)
If you have access to a web server (like Nginx or Apache), you can simply copy the contents of the `dist` directory to the server’s root directory and configure the server to serve static files from there.

### Summary

For quick local testing of the production build, I recommend using either `serve` or `http-server` as they are simple and fast to set up. The commands are:

- **With `serve`**:
  ```bash
  npm install -g serve
  serve -s dist
  ```

- **With `http-server`**:
  ```bash
  npm install -g http-server
  http-server ./dist
  ```

Let me know if you need more guidance or run into any issues!