// Define slices to be looped through below
const slices = [{ id: "header", component: "./src/components/header.js" }];

exports.createPages = ({ actions }) => {
  const { createSlice } = actions;
  // Loop through slices and prefix `id` to avoid name collisions
  for (let slice in slices) {
    createSlice({
      id: `gatsby-theme-with-slices-${slices[slice].id}`,
      component: require.resolve(slices[slice].component),
    });
  }
};
