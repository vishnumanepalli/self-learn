Collections:
ArrayList is a Collection. //there are main==ny in collections
msin are List, set, Queue, Map 

list<string> a = List.of("Array", "Bat", ...)
a.size()
a.isEmpty()
a.get(0)
a.contain("Dog")
a.indexOf("cat")//-1 if not
list.removeIf(element -> element.equals("y"))

List.of() //immutable
List<String> al = new ArrayList(words);//now mutable
//or any list required vectorlist, linkedlist


Vcetor vs arraylist:
schronized is mostly used in vectors. (thread-safe)

Iterator el = words.iterator();
el.next()//return next element and shift  to next
el.hasNext()//boolean
//we will also stream 

craete a list.of and add them to array list

It's not best to enchanced for loop don't modify the list
use iterator if needs to modify in between loop
iterator.remove();

List cannot primitive. it stores objects or wrpper classes
//Autoboxing to enchnaced to object in list 
if need homogenous, then generics <String>
int has precendece than integer object while not mentioned
Integer.valueOf(101);

ArrayList<String> al = new ArryaList<String> (List.of('','',''));
compareTo() compoares 2 objects

Sort: without comparator
Collection.sort(list); //chnages values only takes comparable integer

implements comaparable interface//meeds to be used
public statis int comapreTo(<class> that) {
    return Integer.compare(this.id, that.id);
}
Collections.sort(sts);

explicit compare and sort:
Class DComparator implements Comaparator<Students> {
    compare(st1, st2){
        return integer.compare(st1.id, st2.id)
    }
}
Collections.sort(sts, new DComparator())//1 method
sts.sort(new Dcokmparator())

Collections is common for almost all types structures
list, set, map, queue is one ofthem


Set interface:
single occurance and no posiition acess
HashSet, TreeSet //similar to list characterstics

HAshing is combi of bucket and linkedlist
Tree (RB tree) always stores data in sorted amnner.

HashSet is unordered iteartes in random order //uses hashcode
LinkedHashSet stores in order of added or inseted //uses hashcode
TreeSet stores sorted order //uses navigable set

TreeSet: nearest number 4 below
floor <=
lower<
ceiling >=
higher >
subset(30,80)//30-79 numbers
subset(30, t=false, 40, true)//31-40
headset\\before 50
tailset\\after 50

Queue:
order of processing.
PriorityQueue with also compareartoe=r availabke// adds in right position of ascending order
poll//remove next
offer//add
addAll//adds in sorted order

Custom ordering in Pqueue:
craete comparatoras usual //use @override in function

Queue<String> q = new PriorityQueue(new Comparator());


Map Interface:
Key value doesn't extend Collection
HashMap, HashTable, LinkedHash, TreeHash

HashMap: HashTable //doesn't allow null key value
Hashtable: hash table with thred-safe + allows null key value
LineedHAsh: insertion ordr maintatined //slower insertion and deletion but faster iteration

Map<String, Integer>  ff= Map.of("A", 3, "B", 4);
Map<String, Integer>   ff=  new Hashmap<>(map);


Char[] cha = str.toCharArray();
int r = map.get(char);
map.put(char, r+1); //if r ==null then keep it 1

To check equals in arraysArrays.equals(ch[], ch[])

StringBuilder reversedSentence = new StringBuilder();

        for (String word : words) {
            String reversedWord = new StringBuilder(word).reverse().toString();
            reversedSentence.append(reversedWord).append(" ");
        }

        // Remove the trailing space
        return reversedSentence.toString().trim();



Generics:
public class MyList<T> {
    ArrayList<T> ....
}

T extends Number //allows only integre, byte, long .. not chars, strings

to use sttaic generic 
static <x> x fun(x val) {
    return val;
}

static <x extends List> x fun(x li) {
    return li;
}

Wild Cards:
static <T> Number sumofaa(List<? extends Number> number){ // upper bounded wild card
    double  sum = 0.0;
    for(NUmber num: numbers) {
        sum += num;
    }
}

Number x = Long or Integer Variable//possible without exception 

List<? super Number> //any or all types of Number mixed combination
//lower bounded wild card
