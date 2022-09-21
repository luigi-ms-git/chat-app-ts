import User from './User';
import Stack from './Stack';

class UsersStack extends Stack {
	constructor(){
		super([], 0);
	}

	public itemExists(userId: number): boolean {
		return this.getList().some((usr) => usr.id === userId);
	}

	public push(newUser: User): void {
		this.setLength(this.getLength() + 1);

		newUser.id = this.getLength();
		this.getList().push(newUser);
	}

	public getItem(userId: number): User {
		let found: Array<User> = this.getList().filter((user: User) => user.id === userId);
		return found[0];
	}

	public removeItem(userId: number): string {
		if(this.itemExists(userId)){
			let found: User = this.getItem(userId);
			this.setList(this.getList().filter((usr: User) => {
				return usr.id !== found.id;
			}));

			return "User deleted";
		}else{
			return "User not found"
		}
	}
}

export default UsersStack;
