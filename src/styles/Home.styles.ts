import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	background-color: var(--blue);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 6rem 4rem;

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 14rem;
		padding: 1.6rem;
	}

	@media screen and (max-width: 1000px) {
		padding-top: 15rem;
	}
`
  