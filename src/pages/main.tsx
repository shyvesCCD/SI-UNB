import { makeStyles } from "@material-ui/core"
import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import routes from '../routes'

import styles from '../styles/main.layout'

const getRoute = () => {
  return window.location.pathname === '/main/login' || window.location.pathname === '/main/register';
}

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/main') {
        return (
          <Route path={prop.layout + prop.path} component={prop.component} key={key} />
        )
      }
      return null
    })}
    <Redirect from="/" to="/main/login" />
  </Switch>
)

const useStyles = makeStyles(styles)

export default function Main () {
  const  classes = useStyles()
  return (
    <div>
      {getRoute() ? (
      <div>
        {switchRoutes}
      </div>
    ) : (
      <div className={classes.content}>
        {switchRoutes}
      </div>
    )}
    </div>
  )
}
