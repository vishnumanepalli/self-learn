It’s important to realize that this is, in a real sense, an illusion: the value in the machine is not exactly 1/10, you’re simply rounding the display of the true machine value. This fact becomes apparent as soon as you try to do arithmetic with these values

>>> 0.1 + 0.2
0.30000000000000004

Note that this is in the very nature of binary floating-point: this is not a bug in Python, and it is not a bug in your code either. You’ll see the same kind of thing in all languages that support your hardware’s floating-point arithmetic (although some languages may not display the difference by default, or in all output modes).

Other surprises follow from this one. For example, if you try to round the value 2.675 to two decimal places, you get this

>>> round(2.675, 2)
2.67
The documentation for the built-in round() function says that it rounds to the nearest value, rounding ties away from zero. Since the decimal fraction 2.675 is exactly halfway between 2.67 and 2.68, you might expect the result here to be (a binary approximation to) 2.68. It’s not, because when the decimal string 2.675 is converted to a binary floating-point number, it’s again replaced with a binary approximation, whose exact value is

2.67499999999999982236431605997495353221893310546875
Since this approximation is slightly closer to 2.67 than to 2.68, it’s rounded down.

If you’re in a situation where you care which way your decimal halfway-cases are rounded, you should consider using the decimal module. Incidentally, the decimal module also provides a nice way to “see” the exact value that’s stored in any particular Python float

>>> from decimal import Decimal
>>> Decimal(2.675)
Decimal('2.67499999999999982236431605997495353221893310546875')
Another consequence is that since 0.1 is not exactly 1/10, summing ten values of 0.1 may not yield exactly 1.0, either:

>>> sum = 0.0
>>> for i in range(10):
...     sum += 0.1
...
>>> sum
0.9999999999999999




Rules for variable names:
Names can not start with a number.
There can be no spaces in the name, use _ instead.
Can't use any of these symbols :'",<>/?|\()!@#$%^&*~-+

Python uses Dynamic Typing
This means you can reassign variables to different data types.
This makes Python very flexible in assigning data types, this is different than other languages that are “Statically-Typed”

len(str): length of string

   Character :    h     e     l       l     o
      Index :     0     1     2       3     4
Reverse Index:    0    -4    -3      -2    -1

Slicing allows you to grab a subsection of multiple characters, a “slice” of the string.
This has the following syntax:
[start:stop:step]

Dict:key value pairs.
d ={a:b, c:d} //a, c keys, nd b, d are values
Mutiple types allowed for key and values.
d.keys()//values(), items(), 

Tuples:
d = (1,2,3)//list with immutability
cannot be reassigned and remamining works as list
d.count(), index()
these are the only 2 funxtions

Sets: unordered, unique
s =set()
s.add()//mutliple input allowed
set("rjtdycf")//split into chars and finalise
s.add("giua")//add string

Booleans:
True, False 
type: bool
All relational responses

String Operations:
upper, lower, split(' ')

Format:
f'"vishnu {s}"
'vishnu {}'.format(x)
'vishnu {0} {1}'.format(x,y)
'Vishnu {f}'.format(f=a,g = h)
'vishnu {0:1.3f} {1}'.format(x,y)
"vishnu %s",%'name'

Lists:
append, pop(), pop(i), sort()
//pop remove last element
//sort returnd NOne it will chnage inplace
type(s):list

Type casting:
int(x)