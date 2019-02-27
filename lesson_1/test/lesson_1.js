var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Machine = /** @class */ (function () {
    function Machine() {
        this.isEnabled = false;
    }
    Machine.prototype.tornOn = function () {
        this.isEnabled = true;
    };
    Machine.prototype.tornOff = function () {
        this.isEnabled = false;
    };
    return Machine;
}());
var User = /** @class */ (function () {
    function User(machine) {
        this.machine = machine;
    }
    User.prototype.tornOnMachine = function () {
        this.machine.tornOn();
    };
    return User;
}());
var WashMachine = /** @class */ (function (_super) {
    __extends(WashMachine, _super);
    function WashMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashMachine.prototype.toggle = function () {
        console.log('asdasd');
    };
    return WashMachine;
}(Machine));
var CoffeeMachine = /** @class */ (function (_super) {
    __extends(CoffeeMachine, _super);
    function CoffeeMachine(waterAmount) {
        var _this = _super.call(this) || this;
        _this.waterAmount = waterAmount;
        return _this;
    }
    CoffeeMachine.prototype.toggle = function () {
        console.log('asdasd!!!asdasd');
    };
    CoffeeMachine.prototype.tornOn = function () {
        this.check();
        this.cleanUp();
        this.hitWater();
        _super.prototype.tornOn.call(this);
    };
    CoffeeMachine.prototype.check = function () {
        console.log('System checked!');
    };
    CoffeeMachine.prototype.cleanUp = function () {
        console.log('System is clean!');
    };
    CoffeeMachine.prototype.hitWater = function () {
        console.log('Water is 100deg by celcium!');
    };
    return CoffeeMachine;
}(Machine));
var Unknown = /** @class */ (function () {
    function Unknown() {
    }
    return Unknown;
}());
function add(a) {
    return a;
}
var ApiRequest = /** @class */ (function () {
    function ApiRequest() {
    }
    ApiRequest.get = function (url) {
        return new Promise(function (res, rej) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://test.com');
            xhr.send();
            xhr.onreadystatechange = function () {
                var resp = JSON.parse(xhr.response);
                res(resp);
            };
        });
    };
    return ApiRequest;
}());
ApiRequest.get('http://localhost:4001/tasks').then(function (arrayOfTasks) {
});
ApiRequest.get('http://localhost:4001/profile').then(function (userProfile) {
    userProfile.age;
});
var u = new User(new WashMachine());
u.tornOnMachine();
