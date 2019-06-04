var myFunc = {
    name : "yisan",
    age : 28,
    sex: "male",
    health: 100,
    smoke : function () {
        console.log("i am smoking");
        this.health --;
    },
    drink : function () {
        console.log('i am drinking');
        this.health ++;
    }
};

myFunc.house = "bieshu";
delete myFunc.house