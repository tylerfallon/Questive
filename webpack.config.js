module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + "/app",
        loader: 'babel',
        query: 
        {
          presets: ['react', 'es2015']
        }// close query
      }//close loader
      ]
    }// close mod
};
