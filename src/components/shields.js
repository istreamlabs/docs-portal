import React from 'react';

import Github from "@material-ui/icons/Github"
import MenuBook from "@material-ui/icons/MenuBook"

// Shields is a basic component to draw a row of shields for a project that
// link to GitHub for code and various sites for documentation for SDKs.
export default function Shields({github, docs}) {
  return (<div className="shields">
    <a className="shield" href={github}><Github fontSize="small"/> GitHub</a>
    <a className="shield" href={docs}><MenuBook fontSize="small"/> Documentation</a>
  </div>);
}
