import Message from './Message';
import UsersStack from './UsersStack';
import IStack from './IStack';

class Chat implements IStack {
	private _list: Array<Message>;
	private _length: number;
	private _users: UsersStack;
	private _id: number;

	constructor(id: number, users: UsersStack){
		this._users = users;
		this._list = [];
		this._length = 0;
		this._id = id;
	}

	public itemExists(itemId: number): boolean;
	public itemExists(messageId: number): boolean {
		return this.list.some((msg: Message) => msg.id === messageId);
	}

	public push(item: Object): void
	public push(newMessage: Message): void{
		this.length += 1;

		newMessage.id = this.length;
		this.list.push(newMessage);
	}

	public getItem(itemId: number): any;
	public getItem(messageId: number): Message {
		let found: Array<Message> = this.list.filter((msg: Message) => msg.id === messageId);
		return found[0];
	}

	public removeItem(itemId: number): string;
	public removeItem(messageId: number): string {
		if(this.itemExists(messageId)){
			let found: Message = this.getItem(messageId);
			this.list = this.list.filter((msg: Message) => {
				return msg.id !== found.id;
			});

			return "Message deleted";
		}else{
			return "Message not found"
		}
	}

	public getAmountOfUsers(): number {
		return this.users.length;
	}

	public get list(): Array<Message> {
		return this._list;
	}

	public set list(list: Array<Message>){
		this._list = list;
	}

	public get length(): number {
		return this._length;
	}

	public set length(length: number){
		this._length = length;
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
