import User from './User';
import Stack from './Stack';

class UsersStack extends Stack {
	constructor(){
		super([] as Array<User>, 0);
	}
}

export default UsersStack;
