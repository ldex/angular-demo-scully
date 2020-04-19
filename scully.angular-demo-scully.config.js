exports.config = {
  projectRoot: "./src",
  projectName: "angular-demo-scully",
  outDir: './dist/static',
  routes: {
    '/products/:id': {
        type: 'json',
        productId: {
            url: 'http://storerestservice.azurewebsites.net/api/products/',
            property: 'id'
        }
    }
  }
};