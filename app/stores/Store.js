import {EventEmitter} from 'events';
// import Immutable, {Map} from 'immutable';

// import request from 'request';

// let pathArray = location.href.split('/');
// let protocol = pathArray[0];
// let host = pathArray[2];
// let url = protocol + '//' + host;

// let r = request.defaults({baseUrl: url});

class Store extends EventEmitter {
    constructor(dispatcher) {
        super();

        this.state = {
            screen: "todolist",
        };

        dispatcher.register(action => {
            switch (action.actionType) {
                case 'screen':
                    this.setScreen(action.playload);
                    break;
            }
        });

    }

    setState(state) {
        this.state = state;
        this.emit("CHANGE", this.state);
    }

    setScreen(screen) {
        this.state.screen=screen;
        // let state = this.state.set('screen', screen);
        this.setState(this.state);

        console.log("state: "+JSON.stringify(this.state));
    }

}

export default Store;