import { v4 as uuidv4 } from 'uuid';

export const menuLists = {
	'웅진북클럽': [
		{
			id: uuidv4(),
			title: '웅진북클럽 소개',
			link: '/book-club-intro',
		},
		{
			id: uuidv4(),
			title: '내게 맞는 북클럽 찾기',
			link: '/book-club-search',
		},
		{
			id: uuidv4(),
			title: '웅진북클럽 전집',
			link: '/book-club-works',
		},
		{
			id: uuidv4(),
			title: '웅진북클럽 화상관리',
			link: '/book-club-manage',
		},
		{
			id: uuidv4(),
			title: '웅진북클럽 곰돌이',
			link: '/book-club-teddy',
		},
	],
	'웅진스마트올': [
		{
			id: uuidv4(),
			title: '웅진스마트올 소개 쿠키',
			link: '/smart-all-cookie',
		},
		{
			id: uuidv4(),
			title: '웅진스마트올 키즈',
			link: '/smart-all-kids',
		},
		{
			id: uuidv4(),
			title: '웅진스마트올 예비초',
			link: '/smart-all-phonics',
		},
		{
			id: uuidv4(),
			title: '웅진스마트올 초등',
			link: '/smart-all-elementary',
		},
		{
			id: uuidv4(),
			title: '웅진스마트올 중학',
			link: '/smart-all-middle',
		},
	],
	'출판/e러닝': [
		{
			id: uuidv4(),
			title: '웅진씽크빅 출판부문',
			link: '/e-learning-publish',
		},
		{
			id: uuidv4(),
			title: '웅진주니어',
			link: '/e-learning-junior',
		},
		{
			id: uuidv4(),
			title: '웅진책방',
			link: '/e-learning-bookstore',
		},
		{
			id: uuidv4(),
			title: 'Udemy Korea',
			link: '/e-learning-udemy',
		},
	],
};
