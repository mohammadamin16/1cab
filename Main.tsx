import { View } from "react-native"
import { Route } from "./src/router/router.slice"
import { useAppSelector } from "./src/store"
import { Text } from "react-native"
import React from "react"
import { Login } from "./src/components/screens/login/login"
import { Home } from "./src/components/screens/home/Home"

function getComponent(route: Route) {
  if (route === Route.Login) {
    return Login
  } else if (route === Route.Home) {
    return Home
  }
  else {
    return () => <Text>404</Text>
  }

}

export function Main() {
  const { currnetRoute } = useAppSelector((state) => state.router)
  const Component = getComponent(currnetRoute)

  return (
    <Component />
  )
}
