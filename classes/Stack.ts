import IStack from './IStack';

abstract class Stack implements IStack {
	_list: Array<Object>;
	_length: number;

	constructor(list: Array<Object>, length: number){
		this._list = list;
		this._length = length;
	}

	public getList(): Array<Object> {
		return this._list;
	}

	public setList(list: Array<Object>): void {
		this._list = list;
	}

	public getLength(): number {
		return this._length;
	}

	public setLength(length: number): void {
		this._length = length;
	}

	abstract itemExists(itemId: number): boolean;
	abstract push: (item: Object) => void;
	abstract getItem: (itemId: number) => any;
	abstract removeItem: (itemId: number) => string;
}

export default Stack;
