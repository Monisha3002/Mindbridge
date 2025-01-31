
function createObservable() {
    let observers = [];
    let state;

    return {
        subscribe(observer) {
            if (typeof observer === 'function') {
                observers.push(observer);
            }
        },
        unsubscribe(observer) {
            observers = observers.filter(fn => fn !== observer);
        },
        notify() {
            observers.forEach(observer => observer(state));
        },
        setState(newState) {
            state = newState;
            this.notify();
        }
    };
}
const observable = createObservable();

function observer1(state) {
    console.log('Observer 1:', state);
}

function observer2(state) {
    console.log('Observer 2:', state);
}

observable.subscribe(observer1);
observable.subscribe(observer2);

document.getElementById('updateState').addEventListener('click', () => {
    observable.setState('Updated State!');
});
