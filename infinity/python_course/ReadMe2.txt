Comparison operators:>,==,<, <=, >=,!=, ...
2.0 == 2 //true
'bye' == 'bye' //true
x in list //gives bool True or False
key in dict
char in string

Logical Operators: chaining compariison operartpors
and, or, not
readability add ()//parenthesis

True in comparision = 1

Control Flow:
ifelse(if, elif, else)

For loop
for i in range(0, 12):
for _ in same:
for in in list://string, tuple, map, ...
    print(i)

//tuples list or mixed object
t = [(0,1),(2,3),(4,5)]
for (a,b) in t:
    print(a, b)

d= {a:b, c:d}//dict
for t in d://d.items() gives list of [(key-value),()] all pairs
    print(t)//printskey values
for k, v in d,items()
    print(k, V)

While Loop:
we can combine while with else
else will run after condition fails.//will run once at end compulsory
while x<5:
    x+=1
else:
    print("dummy condi")
Final Result:
1
2
3
4
dummy condi

while inner stamts: break, continue, pass 
pass oes nothing. just a stmt 
pass used if no stmts are present. otherwise gives error

Operators:
range(strat, end, step)//end is not included
range is generator. if u print, it prints same "range(x, y z)"
we need to type cast it list(range....)

enumerate(list/string/dixt..)
gives tuples with location and value
for index, val in enumnerate(list):
    print(f'"array {index} - {value}")

zip(list1, list2 ) //it will tuples (list[i], list2[i])
ignore everything that's extra
for a, b in zip(list1, list2):
    #code
    pass 

list(Zip(list1, list2))//list is also generator

min max:
min(list) //max 

Imports:
from Random import <tab>//shuffle, randint

shuffle(my_list) //randomly reorders or shuffles
//inplace chnage just like sort
randint(0, 100)

Scanner:
input("Enter")//always takes it as string
int(input("Enter")) //type cast into int

List comprehensions:
flatten:
s = 'hello'
t = list(s)//M-1
t = [char for char in s]//M-2
g = [x**2 for x in range(0, 11) if x%2 == 0]
h = [x ifx%2 ==0 else 'ODD' for x in range(0, 11)]
k = [x*y for x in [0,2,4] for y in [1,10,100]]

 