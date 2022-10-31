# Example theme that creates slices

Set up using the minimal theme yarn workspace. Clone the whole repo, and from the root run `yarn && yarn workspace example develop` to run locally.

This example is very basic, creating 1 static slice from `src/components/header.js`. The logic in `gatsby-node.js` makes it such that slices created by this theme are prefixed with the name of the theme - `gatsby-theme-with-slices-`. For example the 1 starting slice from this theme is created as `gatsby-theme-with-slices-header`.
