import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    window.configureStore = configureStore
    ReactDOM.render(configureStore, root);
})


// document.addEventListener("DOMContentLoaded", function(){
//   window.reducer = reducer
//   ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
// });
