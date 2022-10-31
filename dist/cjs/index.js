"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(e);const a=r(t).default.button`

font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;

${({variant:e})=>"primary"===e&&t.css`
color:white;
background-color:#1ea7fd;

`}

${({variant:e})=>"secondary"===e&&t.css`
color: #333;
background-color:transparent;
`}

${({size:e})=>"small"===e&&t.css`
font-size: 12px;
padding: 10px 16px;
`}

${({size:e})=>"medium"===e&&t.css`
font-size: 14px;
padding: 11px 20px;
`}

${({size:e})=>"large"===e&&t.css`
font-size: 16px;
padding: 12px 24px;
`}

`;exports.Button=({size:e="medium",variant:t="primary",title:r})=>i.default.createElement(a,{type:"button",variant:t,size:e},r);
//# sourceMappingURL=index.js.map
