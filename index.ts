import App from './src/app';

/**
 *
 * Get app singleton and process passed arguments to retrieve
 * port number if given.
 */
const app = App.static();
app.server.setPort(3000);

/**
 *
 *
 * Start app
 */
app.start();
