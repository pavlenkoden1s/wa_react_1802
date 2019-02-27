interface IMachine {
    isEnabled: boolean;
    tornOn: () => void;
}

interface ILoadeble {
    isLoading: boolean;
    loadeStart: () => void;
    loadEnd: () => void;
}

abstract class Machine implements IMachine, ILoadeble {
    public isEnabled: boolean = false;

    public tornOn() {
        this.isEnabled = true;
    }

    public tornOff() {
        this.isEnabled = false;
    }

    abstract toggle(): void;
}

class User {
    machine: IMachine;

    constructor(machine: IMachine) {
        this.machine = machine;
    }

    tornOnMachine() {
        this.machine.tornOn()
    }
}

class WashMachine extends Machine {
    toggle() {
        console.log('asdasd')
    }
}

class CoffeeMachine extends Machine {
    constructor(public waterAmount: number) {
        super();
    }

    public toggle() {
        console.log('asdasd!!!asdasd')
    }

    public tornOn() {
        this.check();
        this.cleanUp();
        this.hitWater();
        super.tornOn();
    }

    private check() {
        console.log('System checked!');
    }

    private cleanUp() {
        console.log('System is clean!');
    }

    private hitWater() {
        console.log('Water is 100deg by celcium!');
    }

}

class Unknown {
    
}

function add<T>(a: T): T {
    return a;
}

class ApiRequest {
    static get<T>(url): Promise<T> {
        return new Promise((res, rej) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://test.com');

            xhr.send();

            xhr.onreadystatechange = () => {
                const resp = JSON.parse(xhr.response);
                res(resp)
            }
           
        });
    }
}

interface Task {
    title: string;
    completed: boolean;
}

ApiRequest.get<Array<Task>>('http://localhost:4001/tasks').then((arrayOfTasks) => {

});

interface Client {
    name: string;
    age: string;
}

ApiRequest.get<Client>('http://localhost:4001/profile').then((userProfile) => {
    userProfile.age;
});



const u = new User(new WashMachine());

u.tornOnMachine();