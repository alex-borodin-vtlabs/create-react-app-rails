# Create React App on Rails

Just clone and use routing, admin interface, API requests and others.

## Technologies

See package.json and Gemfile for versions

1. [Ruby on Rails 5](http://rubyonrails.org/)
1. [Create React App](https://github.com/facebookincubator/create-react-app)
1. [Devise](https://github.com/plataformatec/devise/)
1. [ActiveAdmin](https://github.com/activeadmin/activeadmin)
1. [React](http://facebook.github.io/react/)
1. [Redux](https://github.com/reactjs/redux)
1. [react-router v4](https://github.com/reactjs/react-router)
1. [Semantic UI React](https://react.semantic-ui.com/introduction)
1. esLint

## Installation

1. Be sure that you have Node installed! We suggest [nvm](https://github.com/creationix/nvm), with node version `v6.0` or above.
1. `git clone https://github.com/vacuumtubedriver/create-react-app-rails.git`
1. `cd create-react-app-rails`
1. `gem install foreman`
1. `bundle install`
1. `brew install yarn`
1. `cd client`
1. `yarn`
1. `cd ..`
1. `rake db:migrate`
1. `rake db:seed`
1. `rake start`

## How To


+ **Router**: just add new route in `client/app/bundles/MainApp/routes/routes.jsx`  


+ **API**
  + in component:
  ```
    this.props.actions.callApi(url, method, storeKey);
  ```
  + access response:
  ```
   store.appReducers.get(storeKey)
  ```
  + urls `/api/v0/`

 + **Linting**:
    ```
      cd client
      yarn lint
    ```

 ## Contributors
  [VT Labs](https://www.vtlabs.org)
