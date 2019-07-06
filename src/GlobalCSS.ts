import { css } from "linaria"

export const globalCSS = css`
  :global() {
    @import "sanitize";
    @import "sanitize/typography";
    @import "sanitize/forms";

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      word-wrap: break-word;
      padding: 20px 20px;
      max-width: 650px;
      min-width: 320px;
      margin: auto;
    }

    a:link {
      text-decoration: none;
      color: black;
    }

    a:visited {
      color: purple;
    }

    a:active {
      color: red;
    }
  }
`
