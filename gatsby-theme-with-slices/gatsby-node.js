exports.createPages = ({actions})=>{
    const {createSlice} = actions
    createSlice({
        id: `header`,
        component: require.resolve(`./src/components/header.js`),
      })
}