import { Subject } from 'rxjs/Rx';

export class BaseClass {
    constructor(public first: string, public last: string) {
    }

    fullName() {
        return this.first + ' ' + this.last;
    }
}

export class ChildClass extends BaseClass {
    public actionSubject: Subject<string> = new Subject<string>();

    static defaultChild() {
        return new ChildClass('Korakoch', 'Singkam', 0);
    }

    constructor(public first: string, public last: string, private age: number) {
        super(first, last);
    }


    info() {
        return this.fullName() + '(' + this.age + ')';
    }

    getValueFromLongProcess() {
        console.log('Value will return after 3 seconds (inside class method.)');
        return new Promise(resolve => {
            setTimeout(function () {
                resolve('Value return after 3 seconds.');
            }, 3000);
        });
    }

    startActions() {
        let count = 0;
        const iid = setInterval(() => {
            if (count > 100) {
                clearInterval(iid);
            }
            this.actionSubject.next('Action at ' + count);
            count++;
        }, 1000);
    }
}

export class Foo {
   foo = 456;
   common = '123';
}
export class Bar {
   bar = 789;
   common = '123';
}
