# Rails API + React
* Step by step guide in creating a Rails API only application with React JS as front-end

## Rails API

### Prerequisite
1. Download `Postman` Google Chrome Application to test API Endpoints

### Guide
1. Install `rails-api` gem
  * `gem install rails-api`
  
1. Generate a new Rails API application
  * `rails-api new [app_name]`
  * check `rails-api new --help` for other options
  * Note of the structure of your new rails-api application, the `view` directory is missing since this is an API only application

1. Generate `models` as you usually do on a normal rails application
  * `rails g model [model_name]`

1. Generate `controllers` as you usually do on a normal rails application
  * `rails g controller [controller_name]`
  * Note that this generator will not create any view files
  * Note also that `ApplicationController` inherits from `ActionController::API` instead of `ActionController::Base`

1. Define `routes` as a usual rails application
  * most probably you won't be needing `new` and `edit` routes
  
1. Return for each controller action should be `json` object
  ```ruby
    def index
      render :json => User.all
    end
  ```

1. Start your rails server and test your API Endpoints using `Postman`
  * Take note of the responses, it is not pretty and not formatted
  * To adjust the formatting of the responses, we can use `Active Model Serializers`

1. Install `active_model_serializers`
  * Add `gem 'active_model_serializers', '~> 0.9.3'` to your `Gemfile` and run bundle install

1. Generate Serializers for your resource
  * `rails g serializer [resource]`
  
1. Define the serializer for your resource
  ```ruby
    class UserSerializer < ActiveModel::Serializer
    
      attributes :name, :email
    
    end
  ```
  
1. Include Serialization module in `ApplicationController`:
  ```ruby
    class ApplicationController < ActionController::API
      include ActionController::Serialization
    end
  ```
  
1. Restart your server and test your API Endpoint again, you should see the defined attributes only

### References:
1. https://rubygems.org/gems/rails-api/versions/0.4.0
2. http://www.rubydoc.info/gems/active_model_serializers
2. https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en

## React

### Prerequisite
1. Install `Node`
2. Install `npm`

## Guide
1. In your `Rails API` application root directory run `npm init`. Supply needed information
  * Running `npm init` will generate `package.json` in your app's root directory
  * `package.json` is similar to `Gemfile` in Rails. It will contain packages to build our frontend such as react

1. Create `client` folder in root directory

1. Create our entry point which is `index.jsx` under `client` directory

1. In root directory, run the following:
  * `npm install webpack --save-dev`
  * `npm install webpack-dev-server --save-dev`

1. Create `webpack.config.js` in root directory. Enter the following:
  ```js
  module.exports = {
    entry: ['./client/index.jsx'],
    output: {
      path: './public',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
      ]
    },
    plugins: [
    ]
  };
  ```

1. Update `package.json` and add the following under `scripts`:
  ```json
  {
    "name": "something"
    ...
    "scripts": {
      "devserve": "webpack-dev-server -d --config webpack.config.js --content-base public/ --progress --colors --host 0.0.0.0 --port 8080"
    }
  }
  ```

1. Run `npm run devserve` in your console
  * This run up our client server at port `8080`

1. Install `react` package: `npm install react --save`

1. Install `react-dom` package: `npm install react-dom --save`

1. Install `babel`
  1. `npm install babel-core --save-dev`
  1. `npm install babel-loader --save-dev`
  1. `npm install babel-preset-react —-save-dev`

1. Update `webpack.config.js` to add `babel-loader` in the `loaders`:
  ```js
  module.exports = {
    entry: ['./client/index.jsx'],
    ...
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react']
          }
        }
      ]
    }
  }
  ```

1. For our first React component, create `components` directory under `client`

1. Create `[first_component].jsx` under `client/components` directory

1. Modify our first `[first_component].jsx` and add the following:
  ```js
  var React = require('react');
  
  module.exports = React.createClass({
    render: function(){
      return (
        <div>Hello World!</div>
      )
    }
  });
  ```

1. Modify our entry point `client/index.jsx` andd add the following:
  ```js
  var React = require('react');
  var ReactDOM = require('react-dom');
  var FirstComponent = require('./components/[first_component].jsx');

  ReactDOM.render(<FirstComponent />, document.getElementById('container'));
  ```

1. Create `index.html` under `public` directory and modify it with the following:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Sample APP</title>
    </head>
    <body>
      <div id='container'></div>
      <script type='text/javascript' src='/bundle.js'></script>
    </body>
  </html>
  ```

1. Visit `localhost:8080` and you should see `Hello World!`

1. To connect to our API, let us first install `reqwest`: `npm install reqwest --save`

1. Update `[first_component].jsx` so we can connect to our API
  ```js
  var React = require('react');
  var Reqwest = require('reqwest');

  module.exports = React.createClass({
    _tasks: function(){
      var rows = this.state.tasks.map(function(task){
        return (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.done}</td>
          </tr>
        );
      });

      return rows;
    },

    _loadTasksFromServer: function(){
      var _this = this;

      Reqwest({
        url: 'http://localhost:3000/tasks',
        type: 'json',
        content_type: 'application/json',
        method: 'GET',
        success: function(response){
          _this.setState({ tasks: response.tasks });
        },
        error: function(error){
          console.log(error);
        }
      });
    },

    componentDidMount: function(){
      this._loadTasksFromServer();
    },

    getInitialState: function(){
      return {
        tasks: []
      }
    },

    render: function(){
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this._tasks()}
          </tbody>
        </table>
      );
    }
  });
  ```

1. Update `routes.rb` to add `preflight` requests:
  ```ruby
  match '*all', :to => 'application#preflight', :via => [:options]
  ```

1. Update `ApplicationController` to allow:
  * cross origin requests
  * preflight requests
  
  ```ruby
  class ApplicationController < ActionController::API
    include ActionController::Serialization

    before_action :allow_cross_origin_requests, :if => proc { Rails.env.development? }
    
    def preflight
      render :nothing => true
    end

    protected

    def allow_cross_origin_requests
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Request-Method'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      headers['Access-Control-Max-Age'] = '1728000'
    end
  end
  ```

1. Changes can be seen in `localhost:8080`

### References
1. http://www.openmindedinnovations.com/blogs/3-ways-to-integrate-ruby-on-rails-react-flux
2. http://fancypixel.github.io/blog/2015/01/28/react-plus-flux-backed-by-rails-api/
3. http://fancypixel.github.io/blog/2015/01/29/react-plus-flux-backed-by-rails-api-part-2/
4. http://fancypixel.github.io/blog/2015/01/30/react-plus-flux-backed-by-rails-api-part-3/
5. http://fredguest.com/2015/03/06/building-a-stateless-rails-api-with-react-and-twitter-oauth/
