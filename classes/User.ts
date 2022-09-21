import UsersStack from './UsersStack';
import ChatStack from './ChatStack';
import Message from './Message';
import Chat from './Chat';

class User {
	private _name: string;
	private _id: number;
	private _chats: ChatStack;
	private _contacts: UsersStack;

	constructor(name: string) {
		this._name = name;
		this._id = 0;
		this._chats = new ChatStack();
		this._contacts = new UsersStack();
	}

	public get id(): number {
		return this._id;
	}

	public sendMessage(chatId: number, text: string){
		let msg: Message = new Message(text, this);

		this.chats.getItem(chatId).push(msg);
	}

	public addContact(name: string){
		let newUser: User = new User(name);
		this.contacts.push(newUser);
	}

	public getContact(contactId: number): User {
		return this.contacts.getItem(contactId);
	}

	public deleteContact(contactId: number): string {
		return this.contacts.removeItem(contactId);
	}

	public get name(): string {
		return this._name;
	}

	public set name(name: string){
		this._name = name;
	}	public set id(id: number){
		this._id = id;
	}

	public get chats(): ChatStack {
		return this._chats;
	}

	public set chats(chats: ChatStack){
		this._chats = chats;
	}

	public get contacts(): UsersStack {
		return this._contacts;
	}

	public set contacts(contacts: UsersStack){
		this._contacts = contacts;
	}
}

export default User;
