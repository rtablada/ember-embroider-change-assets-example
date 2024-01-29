# Asset Conflict in Local Dev with Ember Serve

In our local development stack, we have a proxy using Nginx to serve our domains, https, cookies, etc across multiple Ember apps, other JS framework applications, as well as our server.
We're currently in the process of replacing route by route some of an older Ember application with a fresh Ember 5 app.
Note we are doing this across multiple root urls so we can't config `rootURL: '/admin'`, and call it a day since we already need to serve `/admin`, `/forum`, and a few other routes that all lie at the root of the application and on the same subdomain as the existing Ember app.

When booting our full stack, we were able to get `/admin` and `/forum` to point to the version 2 index.html and ember server. But... This html file then references `/assets/vendor.js` which is indistinguishable at the proxy or HTTP layer between `/assets/vendor.js` from the old or new app.

## Reproduction Steps

In this repo there are two bare ember applications and a docker-compose which acts as a proxy between the two apps.

To start the proxy run `docker compose up -d` which will start an nginx container on port `9876`.
Then start the two ember applications with `ember s` or `npm start` (the ports should already be set, but `legacy-app` should be running on port `4200` and `new-app` should be running on `4202`)

The following routes should all be valid:

1. http://localhost:9876 (routed to the legacy-app index route)
2. http://localhost:9876/a (routed to the legacy-app a route)
3. http://localhost:9876/b (routed to the legacy-app b route)
4. http://localhost:9876/c (routed to the new-app c route)
4. http://localhost:9876/d (routed to the new-app d route)