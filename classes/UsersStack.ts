import User from './User';

class UsersStack {
	private _list: Array<User>;
	private _length: number;

	constructor(){
		this._list = [];
		this._length = 0;
	}

	public userExists(userId: number): boolean {
		return this.list.some((usr: User) => usr.id === userId);
	}

	public push(newUser: User){
		this.length += 1;

		newUser.id = this.length;
		this.list.push(newUser);
	}

	public getUser(userId: number): User{
		let found: Array<User> = this.list.filter((user: User) => user.id === userId);
		return found[0];
	}

	public deleteUser(userId: number): string{
		if(this.userExists(userId)){
			let found: User = this.getUser(userId);
			this.list = this.list.filter((usr: User) => {
				return usr.id !== found.id;
			});

			return "User deleted";
		}else{
			return "User not found"
		}
	}

	public get length(): number {
		return this._length;
	}

	public set length(length: number){
		this._length = length;
	}

	public get list(): Array<User> {
		return this._list;
	}

	public set list(list: Array<User>){
		this._list = list;
	}
}

export default UsersStack;
