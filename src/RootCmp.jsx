import '../src/assets/style/main.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

import { store } from './store/store.js'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Home } from './pages/Home.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Started } from './pages/Started.jsx'
import { About } from './pages/About.jsx'


export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<Home />} >
                <Route path="/started" element={<Started />} />
                <Route path="/about" element={<About />} />
              </Route>
              <Route path="/toy" element={<ToyIndex />} />
              <Route path="/edit/:toyId" element={<ToyEdit />} />
              <Route path="/edit" element={<ToyEdit />} />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/user/:userId" element={<UserInfo />} /> */}

            </Routes>
          </main>
          <AppFooter />
        </div>
      </Router>
      <UserMsg />
    </Provider>
  )
}

