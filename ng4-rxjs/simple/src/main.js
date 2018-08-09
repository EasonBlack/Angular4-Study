
 import Rx  from 'rxjs';
 import { startWith, scan } from 'rxjs/operator';

 const source = Rx.Observable.fromPromise(new Promise(resolve => resolve(1)));
 const example = source.map(val => val + 10);
 example.subscribe(val => console.log(val));


 const source1 = Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
  });
 const source11 = source1.map(val => `hello ${val}`);
 const subscription = source11.subscribe(value => console.log(value));  
 subscription.next('foo1');



const a1= Rx.Observable.of("from source")
a1.startWith("first", "second")
  .subscribe(x => console.log(x));


const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})
mashup.subscribe(val => console.log( val ))

const mashup1 = Rx.Observable.from([1,2,3,4])
mashup1.subscribe(val => console.log( val ))


const clicks = Rx.Observable.fromEvent(document, 'click')

clicks
  .map(e => Math.random() * 100 )
  .scan((totalScore, current) => totalScore + current)
  .subscribe(x=>console.log(x))