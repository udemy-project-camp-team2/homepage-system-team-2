import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialType = {
	isLoggedIn: boolean;
	user: { email: string; pw: string } | null;
};

const initialState: InitialType = {
	isLoggedIn: false,
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<{ email: string; pw: string }>) => {
			state.isLoggedIn = true;
			state.user = action.payload;
			// 로그인 성공하면 로컬스토리지에 유저 정보를 저장
			localStorage.setItem('user', JSON.stringify(action.payload));
		},

		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
			// 로그아웃 하면 로컬 스토리지에서 유저 정보를 삭제
			localStorage.removeItem('user');
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
