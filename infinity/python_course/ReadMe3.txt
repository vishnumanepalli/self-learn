help(list.pop) //gives definition of function
x in s
x not in s 
s*5 joins s 5 times

Functins:
def fun(name = 'Default'):
    '''

    Vishnu Exaplnantion of doc

     '''
    print("Hello "+name)
    return name

Type Error if arguments are missing for a function
default is used if no arg are sent 
non-default argument follows default argument

def add(num1, num2=1, num3 = 2):
    return num1+num2-num3
add(1, num3 = 3)

Tuple UNpacking:
(a, b) = (2, 4)
a,b unpack the Tuple
if more qrduments re there it gives value error expected n got m 

*args and **kwargs:arguments, keyword arguments takes key value pairs
sum((1,2)) =3

def fun(*args)://allows tuple of args
    sum(args)
fun(1,2,3,4,56,78)

def fun(**kwargs)://takes key value pairs - dict
    if 'fruit' in kwargs:
        print(kwargs['fruit'])

posiitional argument follows keyword argument 
''.join(result)//appemd list at empty string
string.lower()

str.capitalize()//makes first letter capitalize
reverse list = wprd[::-1] or list.reverse()
'aa'.join(result)// concatenate by joiinig with aa blw every 2
abs return absolute of number

nums[i:i+2] == [3,3] //consecutive 3's

match game
s =[a, b, c ,d, 'x']
for i in nums:
    if i==code[0]:
    code.pop(0)
return len(s) == 1


//Prime numbers:
prime = [2]
for i in range(3, n,2):
    for y in primes:
        if i%y ==0
            break;
    else:
        primes.append(i)

for else loop //no need to check all atleast one exceuted

Lambda Expressions:map and filter
for i in map(<fun_name>, list):
    print(item)

or list(map(<fun_anme>, list))

filter by function returning true, False:
list(filter(<fun_name>, list)) //return filtered list

def square(num): return num**2;//can also be remodiifed as 
square = lambda num: num**2
map(lambda num: num**2, list)//for ine time functiosn

Scope: which variable is active at which nested loop
LEGB: local or lambda>enclosed or lambda>global>built-in

we can declare functions inside functions:
def fun:
    def fun2:
        pass
    fun()

if u need to use global variable. declare it
def fun():
    global x//best not to use
    x = 5 //chnage gloval variable

return num in range(low, high+1) //gives true if present in range

char.isupper() //true if char is uppercase
d = {'upper':0, 'lower':0}

list(set(list))//return unique elements

REmove spaces: str.replace(' ', '')
reverse string: s[::-1]
return s == s[::-1] //palindrome check

set(str) //stores all unique char's

int(invalid number string) //gives ValueError

Validating INput:
try expec is one method:
isdigit() will work for +ve num's 
//isdigit return true if all chars are digits
