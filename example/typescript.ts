function foo() {

}

const foo = function () {

};

const bar = () => {

};

class Foo {
    a:number;
    foo() {}
    bar() {}
    foo(a:string, b:string, c:any) {
        const f:string = 'string';
    }
    b:string;
}

let a = 10 * 3;

class Bar {
    foo(a) {
        const f = 'foo';

        window.console.log(f);

        return f;
    }
}
