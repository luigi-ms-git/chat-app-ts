import Message from './Message';
import UsersStack from './UsersStack';
import Stack from './Stack';

class Chat extends Stack {
	private _users: UsersStack;
	private _id: number;

	constructor(id: number, users: UsersStack){
		super([], 0)
		this._users = users;
		this._id = id;
	}

	public itemExists(messageId: number): boolean {
		return this.getList().some((msg: Message) => msg.id === messageId);
	}

	public push(newMessage: Message): void{
		this.setLength(this.getLength() + 1);

		newMessage.id = this.getLength();
		this.getList().push(newMessage);
	}

	public getItem(messageId: number): Message {
		let found: Array<Message> = this.getList().filter((msg: Message) => msg.id === messageId);
		return found[0];
	}

	public removeItem(messageId: number): string {
		if(this.itemExists(messageId)){
			let found: Message = this.getItem(messageId);
			this.setList(this.getList().filter((msg: Message) => {
				return msg.id !== found.id;
			}));

			return "Message deleted";
		}else{
			return "Message not found"
		}
	}

	public getAmountOfUsers(): number {
		return this.users.getLength();
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
