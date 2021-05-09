import styled, { css } from 'styled-components'

type FormProps = {
	loading: boolean
	isFormSent: boolean
}

export const Wrapper = styled.div<FormProps>`
	${({ loading, isFormSent }) => css`
		background-color: #F0F0F0;
    width: 65rem;
    margin: auto;
    text-align: center;
    padding: 2.4rem 3rem;
    border-radius: 0.5rem;
		opacity: ${loading ? '0.3' : null};

		h1 {
			opacity: ${!isFormSent ? '0.3' : null};
		}

		form {
			opacity: ${!isFormSent ? '0.3' : null};
    	display: flex;
    	flex-direction: column;
    	gap: 1rem;
		}

    div:last-child {
			position: fixed;
			top: 2rem;
			width: 60rem;
			left: 50%;
			transform: translateX(-50%);
			text-align: left;
			background-color: #06092B;
			padding: 2.4rem;
			border-radius: 0.5rem;

			span {
				text-align: left;
				font-size: 2.5rem;
				font-weight: 500;
				display: block;
				margin-bottom: 1rem;
				color: #F1F3FF;
			}

			button {
				padding: 0.8rem;
				font-size: 2rem;
				font-weight: 500;
				transition: 0.08s;
				background-color: #F1F3FF;
				cursor: pointer;
				color: #06092B;
				
				&:hover {
        	background-color: #9e9aa7;
        	color: white;
    		}
			}
    }
	`}
`

export const Button = styled.button`
	padding: 1rem;
	font-size: 2.4rem;
	font-weight: 700;
	background-color: #c8c8c8;
	transition: 0.08s;
	border: none;
	color: #3b3054;
	margin-top: 1.6rem;

	&:not(:disabled):hover {
		background-color: #9e9aa7;
		color: white;
		cursor: pointer;
	}
`