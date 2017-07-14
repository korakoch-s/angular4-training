interface Action {
    type: string;
    payload?: any;
}

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };

interface Reducer<T> {
    (state: T, action: Action): T;
}

let reducer1: Reducer<number> = (state: number, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state; // <-- dont forget!
    }
};

interface ListenerCallback {
    (): void;
}
interface UnsubscribeCallback {
    (): void;
}

class Store<T> {
    private _state: T;
    private _listerners: ListenerCallback[] = [];

    constructor(private reducer: Reducer<T>, initialState: T) {
        this._state = initialState;
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listerners.forEach((listener: ListenerCallback) => { listener(); });
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listerners.push(listener);
        return () => {
            this._listerners = this._listerners.filter(l => l !== listener);
        };
    }
}

let store = new Store<number>(reducer1, 0);
console.log(store.getState()); // -> 0
// subscribe
let unsubscribe = store.subscribe(() => {
    console.log('subscribed: ', store.getState());
});
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 1
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 2
unsubscribe();
store.dispatch({ type: 'DECREMENT' }); // (nothing logged)
// decrement happened, even though we weren't listening for it
console.log(store.getState()); // -> 1

function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    x.substr(1); // Error: There is no guarantee that `x` is a `string`
}

class Foo {
    foo = 123;
    common = '123';
}

class Bar {
    bar = 123;
    common = '123';
}

function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    if (arg instanceof Bar) {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }

    console.log(arg.common); // OK
    console.log(arg.foo); // Error!
    console.log(arg.bar); // Error!
}

doStuff(new Foo());
doStuff(new Bar());
