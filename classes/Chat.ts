import Message from './Message';
import UsersStack from './UsersStack';

class Chat {
	private _messages: Array<Message>;
	private _users: UsersStack;
	private _messagesAmount: number;
	private _id: number;

	constructor(id: number, users: UsersStack){
		this._users = users;
		this._messages = [];
		this._messagesAmount = 0;
		this._id = id;
	}

	public messageExists(messageId: number): boolean {
		return this.messages.some((msg: Message) => msg.id === messageId);
	}

	public pushMessage(newMessage: Message){
		this.messagesAmount += 1;

		newMessage.id = this.messagesAmount;
		this.messages.push(newMessage);
	}

	public getMessage(messageId: number): Message {
		let found: Array<Message> = this.messages.filter((msg: Message) => msg.id === messageId);
		return found[0];
	}

	public deleteMessage(messageId: number): string {
		if(this.messageExists(messageId)){
			let found: Message = this.getMessage(messageId);
			this.messages = this.messages.filter((msg: Message) => {
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

	public get messages(): Array<Message> {
		return this._messages;
	}

	public set messages(messages: Array<Message>){
		this._messages = messages;
	}

	public get messagesAmount(): number {
		return this._messagesAmount;
	}

	public set messagesAmount(messagesAmount: number){
		this._messagesAmount = messagesAmount;
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
