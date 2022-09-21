import IStack from './IStack';

abstract class Stack implements IStack {
	_list: Array<any>;
	_length: number;

	constructor(list: Array<any>, length: number){
		this._list = list;
		this._length = length;
	}

	public getList(): Array<any> {
		return this._list;
	}

	public setList(list: Array<any>): void {
		this._list = list;
	}

	public getLength(): number {
		return this._length;
	}

	public setLength(length: number): void {
		this._length = length;
	}

	abstract itemExists(itemId: number): boolean;
	abstract push(item: any): void;
	abstract getItem(itemId: number): any;
	abstract removeItem(itemId: number): string;
}

export default Stack;
