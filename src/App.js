import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
/*
import "./App.css";
import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import KeySearchProvider from "./providers/UserSearchContext"

function App() {
  const [keySearch, setKeySearch] = useState('')

  const updateKeySearchContext = (userInput) => { setKeySearch(userInput) }

  return (
    <BrowserRouter>
      <UserProvider>
        <KeySearchProvider.Provider value={{ handleKeySearchContext: updateKeySearchContext, keySearch }}>
          <CustomThemeProvider>
            <SnackbarProvider>
              <Layout>
                <Router />
              </Layout>
            </SnackbarProvider>
          </CustomThemeProvider>
        </KeySearchProvider.Provider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
*/