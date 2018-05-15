import React from 'react'
import {Link, Route} from "react-router-dom"
import Masters from './Masters'
import Home from './Home'
import Contacts from './Contacts'
import './index.css'

const HomeView = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/masters" component={Masters} />
    <Route path="/contacts" component={Contacts} />
  </div>
)

export default HomeView

