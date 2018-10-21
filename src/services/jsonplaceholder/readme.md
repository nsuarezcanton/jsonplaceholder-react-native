# JSONPlaceholder Service

An HTTP service to interact with [JSONPlaceholder](https://jsonplaceholder.typicode.com/)'s endpoints. Note that each resource has a dedicated file. For example, within `AlbumsService.js` there are functions that send requests to `/albums`. As of now, there is only one function (`getAlbums()`), but, as the application requirements grow, there will be a need for others (e.g., `getAlbumsById(albumId)`). This explains the need for `/* eslint-disable import/prefer-default-export */` at the top of each service file.
