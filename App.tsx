import { StatusBar } from "expo-status-bar";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";

import AppNavigator from "./src/navigation/AppNavigator";

const queryClient = new QueryClient();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3ED1D2",
      secondaryContainer: "rgba(62, 209, 210,0.7)",
      onSecondaryContainer: "#FFF",
      outline: "#3ED1D2",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </PaperProvider>
  );
}
