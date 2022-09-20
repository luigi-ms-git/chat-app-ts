import Chat from './Chat';
import IStack from './IStack';

class ChatStack implements IStack{
	private _list: Array<Chat>;
	private _length: number;

	constructor(){
		this._list = [];
		this._length = 
	}

	public get list(): Array<Chat> {
		return this._list;
	}

	public set list(list: Array<Chat>){
		this._list = list;
	}
}

export default ChatStack;
