import { createGlobalStyle } from "styled-components"; // 글로벌 스타일 적용을 도와주는 styled-components내장 메서드
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
	body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

	
`;
