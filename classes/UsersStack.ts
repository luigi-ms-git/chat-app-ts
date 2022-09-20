import User from './User';
import Stack from './Stack';

class UsersStack extends Stack {
/*	private _users: Array<User>;
	private _size: number;
*/
	constructor(){
		super([], 0);
	}

	public itemExists(userId: number): boolean {
		return this.getList().some((usr) => usr.id === userId);
	}

	public push = (newUser: User) => {
		this.setLength(this.getLength() + 1);

		newUser.id = this.getLength();
		this.getList.push(newUser);
	}

	public getItem(userId: number): User{
		let found: Array<User> = this.list.filter((user: User) => user.id === userId);
		return found[0];
	}

	public removeItem(userId: number): string{
		if(this.itemExists(userId)){
			let found: User = this.getItem(userId);
			this.list = this.list.filter((usr: User) => {
				return usr.id !== found.id;
			});

			return "User deleted";
		}else{
			return "User not found"
		}
	}
}

export default UsersStack;
