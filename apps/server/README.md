# Server
Development reverse-proxy server for serving multiple single page applications from a root domain

## Adding Apps
To add an application, create a new Angular application following the Nx Workspaces style.

Once the application has been added, update the `config/routes.ts` file with the name of the app and the desired route for the root of the application.

Ensure that any routes 