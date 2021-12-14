import "swagger-ui-react/swagger-ui.css";
import "./api-reference.css";

import React, { useState } from "react";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import SwaggerUI from "swagger-ui-react/swagger-ui";

export default function () {
  let defaultOrg = "";
  let ready = false;

  if (ExecutionEnvironment.canUseDOM) {
    // Only try to render when in a browser since we need access to `window`
    // this prevents errors during server-side rendering (SSR).
    defaultOrg = localStorage.getItem("org");
    ready = true;
  }

  const [org, setOrg] = useState(defaultOrg);

  if (!ready) {
    return <div>Loading...</div>;
  }

  // Initialize SwaggerUI, but we don't use the official component way because
  // we need access to set up custom auth. This does that and then finds the
  // underlying component to render onto the page.
  const tmp = SwaggerUI({
    url: "https://api.istreamplanet.com/openapi.json",
  });
  tmp.initOAuth({
    clientId: "9joico3xz7UKKSn3HiCcI2RJWkqs1INQ",
    additionalQueryStringParams: {
      audience: `https://platform.dtc.istreamplanet.net/${org}`,
    },
    usePkceWithAuthorizationCodeGrant: true,
  });
  const Component = tmp.getComponent("App", "root");

  return (
    <div>
      Organization:{" "}
      <input
        value={org}
        onChange={(e) => {
          localStorage.setItem("org", e.target.value);
          setOrg(e.target.value);
        }}
      />
      <Component />
    </div>
  );
}
