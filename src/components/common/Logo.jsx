import styled from 'styled-components';

const StyledLogo = styled.h1`
    display: inline-block;
    background : url(/images/woongjin.jpg) 0 0 no-repeat;
    width: 163px;
    height: 88px;
    cursor: pointer;
`;

const Logo = () => {
	return (
		<StyledLogo/>
	);
};

export default Logo;
