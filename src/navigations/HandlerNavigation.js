import React from "react";
import { View, Text } from "react-native";
import { AuthNavigation, AppNavigation } from "./stacks";
import { useAuth } from "../hooks";

export function HandlerNavigation() {
  const { user } = useAuth();
  //console.log(useAuth());
  //const user = null;

  return user ? <AppNavigation /> : <AuthNavigation />;
}
