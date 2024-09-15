Precedence:
(* / % ) > (+ - )

to just print answer:
System.out.println("")

escape literal: "rh\"hbtrgbtfdb"
example: \"     \\

shorcuts: \ n  \t


PrintStream and Formatting: // printf is used for both printstream and formatting
System.out.printf("5 * ").printf(2 = ).println(5*2);

MissingFormatArugumentException:
when no of arguments provided are less than required //more is okay

%d decimal
%s string
%f floating point

initial assignment  of int  = 0 if not specified
java is strongly typed 

Use camel case(start small leytter and then camelcase)
good name

Integer datatypes:
byte, short, int, long 
8 , 16, 32, 64 bytes

Float, Double, bool, char

float f = 4.6f;
double d = 5.5;//use it normally big decimal is next to it
Normally 4.5 is double to assign it to float we need to specify f at the end

bool values are true and false (all smalls no cpitals)

String concatenation is costly operation -------mind in

++ increment
-- decreemnt
+= compound( -= /= *= %= )

ctrl+ r - to search in history for jshell
/methods - to get all methods present in jshell
/save a.txt - save code till now
/edit <method_name> - to edit in a new editor 
/list <method_name> -  to get the code of method_name

post increemnt is done after operator next to it
precedence:
brackets, pre increment, post increment, (*, /, %), (+, -), bitwise shifts, relatinal(>, <, ==, >=, <= ), bitwise operators, logical and or, ternary operators, assignment operators

if not assigned it is null for primitive types


class, instances, member variables/fields, behaviours

this - for accessing instane variables of class

Encapsulation:
Only the class should access it's innner non static variables. other classes should access through the behaviours.
protecting instance variables

Abstraction:
Hiding inner implementation and details.


Deafault constrctor is noargsconstructor
Default constrtor is provided if not manullay declared
If specified it will hav eonly that one constrctor

Call constrctor manually:
Car() {
    this(parameters);
}

Datatypes characterstics:
Byte.BYTES, int.SiZE .... 

In Java, a wrapper class is a class that wraps one or more primitive data types. Wrapper classes are very common in java. For example, String, Integer and Boolean are wrapper classes. Wrapper classes are used to treat primitive data types as objects.
Primitive Wrapper DataTypes:(Converts them into objects to suit it to Object parameter sometimes)
Byte, Short, Integer, long

Derived Datatypes:
byte, short, int, long

Normal number is integer and it has limit 2^31(+,-)
We need to specify 'l' at the end to make it long //reverse possible
    long a = 5000000000l;
l represents 8 byte if we need to store 40l into int we need type casting
Float we need to mention f at end
By default 35.9 is taken as double
% worj normally for float and doubles 34.5%5 = 4.5 or 4.49999987

Type Casting: Explicit// implicit conversiion is done by compiler
int i = (int) 36l;

0x10 is hexadecimal representation lly 0b(binary), 
010 is octal representation

post and preincrement:
post happens after next operation lly pre happens vbefore

Big Decimal for finnacial calculations:
Float and double doesn't allow to get accurate calculation values.

BigDecimal d = new BigDecimal("34.5678322");4
bid decinla is immutable
if not used double quotes it store double inaccurate values
Big decimal op's are only eith same type, so, we need to create big decimal for integer and then do op's


shell command . and then <tab>

New BigDecimal("10").divide(new BigDecimal(11));
we can use mthods directly eith new

Short Circuit Operartions:
equation will break off if result is generated from half of expression

The difference comes &&, & 
&& - short circuit happens
& - short circuit not happens since result not yet finalised.

Don't put logic in short circuits

Character:
uni code : '\u0022'(uni code contains all characters in ser= veral launguages)
char ch = 65;//A
ch++ //B
Character.toLowerCase(ch) //lly lowercase

ch = '\n'
sout(ch) //prints new line

if() 
    if() stmt;
    else stmt;
else stmt;

if else loop is considered as sibngle stmt in upper if loop. so be craeful to tjink without brackets one stmt is considered.

cannot use integer in condition. normally any non-zero is treated as true; but not here 
We should inly give boolean to the conditions

SCanning input from editor:
Scanner scanner = new Scanner(System.in);
int num = scanner.nextInt();

switch(i){
    case 1:stmt;break;
    case 2:   "" 
    default: bn
}

case 1,2,3,4,5: //it is also possible

default can be placed anywhere can still work properly in a switch
byte, short, int, boolean, enums, strings are available in switch condiitions.
cannot have conditions in case sattement

Ternary Operartirs:
(condiiton)? true_stmt: false_stmt

Objects, Strings are reference variables.

primitive variables passed as values but reference varibles passed as refernce. so the update is also reflected by any any accessors.
heap is globally stored

class b = new class();
class s = b;
s.id = 10;// then b.id is also becomes 10 before of referenceing
// it directly tehe values in heap. and b, s have same referencing locations.

String is a Wrapper class
"Test".length() is one of accessor for string
For String u don't need constructor //special class
str.charAt(1)//str[1]
str.substring(5)
str.substring(5, 14) //5-13 string, 14 exclusive
if outof bounds StringOutOfBoundsException

str.indexOf("lot")// search for lot and starting indexOf
str.lastIndexOf("lot)
str.contains("again")//to check present or not
str.startsWith("tht")//lly endsWith
str.empty()
str.equals("scd")
str.equalsIgnoreCase("sCDa")

String is immutable:
str2 = str.concat("rbr") //str won't change

We cannot the value once it is created. if we chnage the object address is chnaged to new not overridded
str.toLowerCase()
str.toUpperCase()
str.trim()// trim white spaces at sstart and end

String.join(join_by,<list of str's>) //static method 
String.join(".", "A","B", "C")//result = "A,B,C"
str.replace(str1, str2) //replace all occurances of str1

s1+s2+s3+s4//6 instances of string objects
So, we stringbuilders, stringbuffers

StringBuffer sb = new StringBuffer("Tes");//mutable
sb.setChatAt(1,'e')// string buffer is thred safe
//stringbuilder is sequential and less expensive

Wrapper classed are important to give object appearence and no of methods, options, utility methods, collection
//collections accept only objects

Integer in1 = new Integer(23);
Integer in2 = Integer.valueOf(23);//2 types of constrcuting wrpper class objects
//check and reuse same object present or create one 
in2 == in4(constrct similarly) gives tru which gives if we use upper construtcor method
Integer in2 = Integer.valueOf("23");

AutoBoxing:
Integer x = 7 //autoboxing uses things again lly to valueOf
 
Date //from joda freamework:
LocalDate, LocalTime, LocalDateTime//llar to classes
//have amny behaviours
immutable class similar to string
//import java.LocalTime

LocalDate ld = LocalDate.now();
LocalDate yt = LocalDate.of(2018, 05, 01);
ctrl+o - list of methods

Character.isUpperCase(str.charAt(3));//check uppercase of string 3 locations

Arrays:
int[] a = {1,2,3,4,5,6,7,8,9} //new int[5]
a.length //proper not method
a[1]//acess

Array of objects:
Person[] persons = new Person[5];

we need to mention size before declaring
Arrays.toString(arr) //return string form of Array

Enhanced For loop:
for(mark in marks):
//

Arrays.fill(arr, 23);

compare arrays:
Array.equals(ar1, arr2)
Arrays.sort(arr)

Integer.MIN_VALUE
Integer.MAX_VALUE

if non terminating decimal we cannot print. So, in that case we use rounding(up/down)
new BigDecimal(number).divide(new BigDecimal(3), 3, Rounding.UP)

fun("dfvf", new int[]{1,2,3,4,5})

Variable Arguments:
fun("dfvf", 1,2,3,4,5)
fun("dfrtehvf", 1,2,3)
would it possible?? variable arguments

int sum(int... values) {}//values becomes an array
//variable argmet must be last parameter

Add and delete elements in array:
We cannot change size. So, we need to new array with size+1 and copy copy the size elements and change last number.
similarly for the delete
That's why we have arraylist to add and remove elemebst

ArrayList:
ArrayList arrl = new ArrayList();//in this we can can add all types
arrl.add();
arrl.remove();//index or literal or string

ArrayList<String> arrls = new Arrayalist<String>()//we can only add string types
arrl.size()
Collection.max(arrl);

String[] words = sentence.split("\\s+");//split string into array or arraylist


Objects:
While printing objects it will check for toString and print it automatically

public Strin toString() {
    return String.format("len-%d", len);//or use string concatenantion to return
}

implicitly parent constructor will be called at start

In java multiple inheritance is not supported

Supe class variable can hold sub class object
dog is a pet but pet cannot be a dog

instanceof //checking which class instance
dog is instance of dog, pet, animal
pet is instance of pet, animal

Abstract Class:
example: interface
we give outline of the class
abstract public int fun()// for methof=d abstract

abstract class Animal{}
abstract class can implement part of interfaxces maynot be full
concrete class extending that abstract needs to implement all methods in interface

interfaces can have comstants not variables
can face default method bodies// those need not be implemented

abstarct class provide high level structure and some pseudo implemenations
interface don't have variables just constants

class can implement multiple interfaces

Polymorphism:
same method name different implementations or behavioirs
method definition means method body

Use of Math.PI  = pie value

If we want mutiple classses in a file remove public in remainng class or create them in anither file
