import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle;
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
*focus: {
    outline: 0;
}
HTML, body, #root {
    height: 100%;
}
body {
    background-color: purple;
    -webkit-font-smoothing: antialiased;
}
