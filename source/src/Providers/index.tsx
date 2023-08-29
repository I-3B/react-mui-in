import { CssBaseline } from "@mui/material";
import MaterialThemeProvider from "Providers/MaterialThemeProvider";
import "lib/i18next";
import { FC } from "react";
import Direction from "./Direction";
import LanguageProvider from "./LanguageProvider";
import QueryClientContext from "./QueryClient";
import SnackbarProvider from "./SnackbarProvider";
import TopBarProgressProvider from "./TopBarProgressProvider";
const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <MaterialThemeProvider>
        <QueryClientContext>
          <SnackbarProvider>
            <Direction>
              <TopBarProgressProvider>
                <CssBaseline />
                {children}
              </TopBarProgressProvider>
            </Direction>
          </SnackbarProvider>
        </QueryClientContext>
      </MaterialThemeProvider>
    </LanguageProvider>
  );
};
export default Providers;
