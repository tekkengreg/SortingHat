# Application that choose a random houses for a given name

## initialization of React app

Use `create-react-app` to generate a new app called `choixpeau`.

## Concept and Redux install

### Installation Redux

```js
npm install --save redux react-redux
```

### Create store and provide it

in `App` we have to `createStore`, the global state of the application. The store will be generated from a function which return the state N+1 from state N with an action applied.
And then wrap our application `Provider` that provide the `store`:

```js
//...
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
//...
const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];
const reducer = (state, action) => ({
  houses,
  selectedHouses: houses[Math.floor(Math.random() * 4)]
})
const store = createStore(reducer);
//...
<Provider store={store}>
    //...
    <Result />
    //...
</Provider>
```


### Website Structure

`App` will display `Result` that call `Message` component.
List of houses and selected one are global variables, global states of the application. They are provided by redux throught the `Provider`.
As we will need those information from `Result`, we will `connect` the component to become a Redux Container.

The standard propose to separate components from containers and place them into coreespondant folders. So we have:

```shell
App.js
Containers/Result.jsx
Components/Message.jsx
```

### Connect Result

To make Result a Redux container we need to call `Result` from `connect`. In `Containers/Result.jsx` will have at the end of file:

```js
//...
export default connect()(Result)
```

`connect` will only pass `dispatch` function as props of `Result`. `dispatch(action)` will pass `action` to the `reducer` define in `App` component.

To get store information we need to pass the store to the `Result` props. We do that with a function that take the store (also name as state) as argument and return the props:

```js
//...
export default connect(store=>store)(Result)
```

As we want all information we pass the full store to `Result` props.

Now if we print in console props object, we will get the store available:

```js 
//...
render() {
    console.log(this.props)
    return (
        <Message />
    )
  }
//...
```

will print:

```shell
dispatch: ƒ dispatch(action)
houses: (4) ["Serpentard", "Griffondor", "Serdaigle", "Pouffsoufle"]
selectedHouses: "Serdaigle"
```

### Render information

Now we can for example print `houses` in `Result` and the `selectedHouse` in `Message`.

in `Result`:

```js
return (
  <div>
    <ul>
      {this.props.houses.map(house => <li key={house}>{house}</li>)}
    </ul>
    <Message message={this.props.selectedHouse} />
  </div>
)
```

in `Message`:

```js
return (
  <div>
    <b>{message}</b>
  </div>
)
```

### Update the selected house

So we have the list of houses printed and just below the selected one. This happen just once.

If we want to get a new `selectedHouse` every second, we will call `dispatch` from `setInterval`.

In constructor, we put:

```js
setInterval(() => this.props.dispatch({ type: '' }), 1000)
```

Nevermind what we pass as argument, we just recall random function that define `selectedHouse`.

Now each second a new house is displayed.