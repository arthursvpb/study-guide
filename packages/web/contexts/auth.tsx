import { createContext, useState, ReactNode } from 'react';

type User = {
	id: string;
	email: string;
	name: string;
	goals?: [];
};

type AuthContextData = {
	user: User | null;
	signIn: (user: User) => void;
	signOut: () => void;
};

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);

	function signIn(user: User) {
		setUser(user);
		localStorage.setItem('@studyguide:user', JSON.stringify(user));
	}

	function signOut() {
		setUser(null);
		localStorage.removeItem('@studyguide:user');
	}

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
