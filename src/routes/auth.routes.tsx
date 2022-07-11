import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { Books } from "../screens/Books";
import { BookDetails } from "../screens/BookDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="books" component={Books} />
      <Screen name="booksdetails" component={BookDetails} />
    </Navigator>
  );
}
