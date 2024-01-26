import { DefaultTheme,NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";

export function Routes() {

    const navTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      };

    return(
        <NavigationContainer theme={navTheme}>
            <AppRoutes />
        </NavigationContainer>
    )
}