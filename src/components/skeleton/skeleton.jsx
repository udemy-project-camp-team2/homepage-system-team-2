import styled, { keyframes } from 'styled-components';

const loadingLogo = keyframes`
    0% {
        transform: translateX(0);
    }
    50%,
    100% {
        transform: translateX(168px);
    }
`;
const loadingContainer = keyframes`
    0% {
        transform: translateX(0);
    }
    50%,
    100% {
        transform: translateX(1220px);
    }
`;
const loadingNav = keyframes`
    0% {
        transform: translateX(0);
    }
    50%,
    100% {
        transform: translateX(160px);
    }
`;
const SkeletonWrapper = styled.div`
	padding: 30px 20px;
	margin: 0 auto;
`;

const SkeletonHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const SkeletonLogo = styled.div`
	width: 90px;
	height: 90px;
	margin-right: auto;
	background: #f3f3f3;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		height: 100%;
		background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
		animation: ${loadingLogo} 1s infinite linear;
	}
`;

const SkeletonNav = styled.div`
	display: flex;
	width: 150px;
	height: 90px;
	margin-left: auto;
	align-items: center;
`;

const Nav = styled.div`
	width: 70px;
	height: 25px;
	background: #f3f3f3;
	margin-left: auto;
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		height: 100%;
		background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
		animation: ${loadingNav} 1s infinite linear;
	}
`;
const SkeletonContainer = styled.div`
	width: 100%;
	height: 10vh;
	background: #f3f3f3;
	margin-bottom: 30px;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 120px;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
		);

		animation: ${loadingContainer} 1s infinite linear;
	}
`;

const SkeletonTab = styled.div`
	display: flex;
	width: 100%;
	gap: 1%;
	margin-bottom: 70px;
	position: relative;
	overflow: hidden;
`;
const Tab = styled.div`
	width: 50%;
	height: 10vh;
	background: #f3f3f3;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 120px;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
		);

		animation: ${loadingContainer} 1s infinite linear;
	}
`;
const Skeleton = () => {
	return (
		<SkeletonWrapper>
			<SkeletonHeader>
				<SkeletonLogo />
				<SkeletonNav>
					<Nav />
					<Nav />
				</SkeletonNav>
			</SkeletonHeader>
			<SkeletonTab>
				<Tab />
				<Tab />
			</SkeletonTab>
			<SkeletonContainer />
			<SkeletonContainer></SkeletonContainer>
			<SkeletonContainer></SkeletonContainer>
			<SkeletonContainer></SkeletonContainer>
		</SkeletonWrapper>
	);
};

export default Skeleton;
