import Message from './Message';
import User from './User';
import UsersStack from './UsersStack';
import Stack from './Stack';

class Chat extends Stack {
	private _users: UsersStack;
	private _id: number;

	constructor(id: number, users: UsersStack){
		super([] as Array<Message>, 0)
		this._users = users;
		this._id = id;
	}
	
	public sendMessage(authorId: number, text: string){
		if(this.users.itemExists(authorId)){
			let author: User = this.users.getItem(authorId);
			let msg: Message = new Message(text, author);
			super.push(msg);
		}
	}

	public deleteMessage(msgId: number){
		super.removeItem(msgId);
	}

	public getAmountOfUsers(): number {
		return this.users.length;
	}

	public get users(): UsersStack {
		return this._users;
	}

	public set users(users: UsersStack){
		this._users = users;
	}

	public get id(): number {
		return this._id;
	}

	public set id(id: number){
		this._id = id;
	}
}

export default Chat;
