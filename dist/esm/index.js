import e from"react";import i,{css as r}from"styled-components";const t=i.button`

font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;

${({variant:e})=>"primary"===e&&r`
color:white;
background-color:#1ea7fd;

`}

${({variant:e})=>"secondary"===e&&r`
color: #333;
background-color:transparent;
`}

${({size:e})=>"small"===e&&r`
font-size: 12px;
padding: 10px 16px;
`}

${({size:e})=>"medium"===e&&r`
font-size: 14px;
padding: 11px 20px;
`}

${({size:e})=>"large"===e&&r`
font-size: 16px;
padding: 12px 24px;
`}

`,o=({size:i="medium",variant:r="primary",title:o})=>e.createElement(t,{type:"button",variant:r,size:i},o);export{o as Button};
//# sourceMappingURL=index.js.map
