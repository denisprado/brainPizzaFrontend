import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    body{
        background: #F2F1E7;
        -webkit-font-smoothing: antialiased;
    }

    html{
        font: 62.5% sans-serif;
    }

    #root{
        margin:0 auto;
    }
`;
