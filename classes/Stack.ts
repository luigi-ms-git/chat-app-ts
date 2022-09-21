abstract class Stack {
	_list: Array<any>;
	_length: number;

	constructor(list: Array<any>, length: number){
		this._list = list;
		this._length = length;
	}

	public get list(): Array<any> {
		return this._list;
	}

	public set list(list: Array<any>){
		this._list = list;
	}

	public get length(): number {
		return this._length;
	}

	public set length(length: number){
		this._length = length;
	}

	public itemExists(itemId: number): boolean {
		return this.list.some((it: any) => it.id === itemId);
	}
	
	public push(newItem: any): void {
		this.length += 1;
		newItem.id = this.length;
		this.list.push(newItem);
	}
	
	public getItem(itemId: number): any {
		let found: Array<any> = this.list.filter((it: any) => {
			return it.id === itemId;
		});
		return found[0];
	}
	
	public removeItem(itemId: number): void {
		if(this.itemExists(itemId)){
			let found: any = this.getItem(itemId);
			this.list = this.list.filter((it: any) => {
				return it.id === itemId;
			});
		}
	}
}

export default Stack;
