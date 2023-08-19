import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
// import { Provider } from "react-redux"
// import Store from "./redux tool kit/Store"
// import ContextProvider from "./contextapi/ContextProvider"

// createRoot(document.getElementById("root")).render(
// <Provider store={Store}>
//   <App/>
//   </Provider>

  //  {/* .render.(<ContextProvider>
  //    <App/>
  //    </ContextProvider>) */}
// )

createRoot(document.getElementById('root')).render(<App/>)