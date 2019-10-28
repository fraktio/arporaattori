import React from "react";
import { Provider } from "react-redux";
import App from "./components/App";

import typography from "./services/typography";
import { BrowserRouter } from "react-router-dom";
import { TypographyStyle, GoogleFont } from "react-typography";
import { Global } from "@emotion/core";
import normalize from "emotion-normalize";

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <Global
        styles={[
          normalize,
          {
            body: {
              backgroundColor: "#31302e",
              color: "rgb(0, 0, 0)",
              height: "100vh",
              width: "100vw",
              padding: "1em"
            },

            "a:link, a:visited, a:active, a:hover": {
              color: "rgb(255, 255, 255)",
              textDecoration: "underline"
            }
          }
        ]}
      />
      <BrowserRouter>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
