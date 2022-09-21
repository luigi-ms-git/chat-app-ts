import Chat from './Chat';
import Stack from './Stack';

class ChatStack extends Stack{
	constructor(){
		super([], 0);
	}

	public itemExists(chatId: number): boolean {
		return this.getList().some((ch: Chat) => ch.id === chatId);
	}
	
	public push(newChat: Chat): void {
		this.setLength(this.getLength() + 1);

		newChat.id = this.getLength();
		this.getList().push(newChat);
	}
	
	public getItem(chatId: number): Chat {
		let found: Array<Chat> = this.getList().filter((ch: Chat) => ch.id === chatId);
		return found[0];
	}

	public removeItem(chatId: number): string {
		if(this.itemExists(chatId)){
			let found: Chat = this.getItem(chatId);
			this.setList(this.getList().filter((ch: Chat) => {
				return ch.id !== found.id;
			}));

			return "Chat deleted";
		}else{
			return "Chat not found";
		}
	}
}

export default ChatStack;
