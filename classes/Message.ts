import User from './User';

class Message {
	private _id: number;
	private _text: string;
	private _author: User;
	private _timestamp: Date;
	private _wasSeen: boolean;

	constructor(text: string, author: User){
		this._id = 0;
		this._text = text;
		this._author = author;
		this._timestamp = new Date();
		this._wasSeen = false;
	}

	public get text(): string {
		return this._text;
	}

	public get author(): User {
		return this._author;
	}

	public get timestamp(): Date {
		return this._timestamp;
	}

	public get wasSeen(): boolean {
		return this._wasSeen;
	}

	public set wasSeen(wasSeen: boolean){
		this._wasSeen = wasSeen;
	}

	public get id(): number {
		return this._id;
	}

	public set id(id: number){
		this._id = id;
	}
}

export default Message;
