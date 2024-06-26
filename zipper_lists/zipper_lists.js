const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c


const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z


zipperLists(a, x);
// a -> x -> b -> y -> c -> z
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f


const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z


zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f
const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4


zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4
const w = new Node("w");


// w


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 


zipperLists(w, one);
// w -> 1 -> 2 -> 3
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 


const w = new Node("w");
// w


zipperLists(one, w);
// 1 -> w -> 2 -> 3
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const zipperLists = (head1, head2) => {
  let head = head1;
  let tail = head
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while(current1 !== null && current2 !== null){
    if(count % 2 === 0){
      tail.next = current2;
      current2 = current2.next;
    
    }else{
      tail.next = current1;
      current1 = current1.next
    
    }
   
    tail = tail.next;
       count += 1
  }
  if(current1 !== null) tail.next = current1;
  if(current2 !== null) tail.next = current2;


  return head;
};


module.exports = {
  zipperLists,
};

