import Chat from './Chat';
import Stack from './Stack';

class ChatStack extends Stack{
	constructor(){
		super([] as Array<Chat>, 0);
	}
}

export default ChatStack;
