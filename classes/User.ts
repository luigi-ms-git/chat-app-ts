import UsersStack from './UsersStack';
import Chat from './Chat';

class User {
	private _name: string;
	private _id: number;
	private _chats: Array<Chat>;
	private _contacts: UsersStack;

	constructor(name: string) {
		this._name = name;
		this._id = 0;
		this._chats = [];
		this._contacts = new UsersStack();
	}

	public sendMessage(chatId: number){}

	public openChat(chatId: number){}

	public deleteChat(chatId: number){}

	public addContact(){}

	public getContact(){}

	public deleteContact(){}

	public get name(): string {
		return this._name;
	}

	public set name(name: string){
		this._name = name;
	}

	public get id(): number {
		return this._id;
	}

	public set id(id: number){
		this._id = id;
	}

	public get chats(): Array<Chat> {
		return this._chats;
	}

	public set chats(chats: Array<Chat>){
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
