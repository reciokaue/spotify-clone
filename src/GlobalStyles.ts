import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiasing;
    }
    html,body, #root{
        height: 100vh;
        width: 100vw;
        background: #0e0e0e;
        color: var(--c04);
        overflow: none
    }
    *, button, input{
        border:0;
        outline:0;

        font-family: 'Roboto', sans-serif;
    }

    :root{
    --primary: #1db954;
    --c00: #000;
    --c01: #b3b3b3;
    --c02: #282828;
    --c03: #535353;
    --c04: #121212;
    --c05: #181818;
    --c11: #fff;
    }

    ::-webkit-scrollbar-thumb{
	    background: var(--c03);
	}
	::-webkit-scrollbar-track{
	    background: var(--c04);
	}
    ::-webkit-scrollbar {
        height: 14px;
        width:  14px;
    }
`;