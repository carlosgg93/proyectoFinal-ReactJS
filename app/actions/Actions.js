class Actions {

    constructor(dispatcher){
        this.dispatcher = dispatcher;
    }

    setScreen (screen) {
        this.dispatcher.dispatch({
            actionType: 'screen',
            playload: screen
        });
    }
   
}

export default Actions;