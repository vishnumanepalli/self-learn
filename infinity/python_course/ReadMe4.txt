we cannot append to add list of list of items
caeds.append(list) //[a,b,list]
t add lit of items command is:
cards.extend(list)

Functionas are objects that can pass to other functions.
we can defnie functions in functions.
scope of inner functions is only inner
We can use functions as variables
we can return functions.

def <fun>(n=0):
    def a1():
        return "a1"
    def a2:
         return "A2"
    
    if n==0:
        return a1
    else:
        return a2

Then, we can use function. otherwise cannot let it use.

Decorators:
@new_decorator: inner implemenataion:
def new_dexorator(fun):
    def wrap_fun():
        print("some code beg=fore fun")

        fun()

        print("Some code after fun")
    
    return wrap_fun

@new_decprator
def fun():
    print("func") 

directly adds add before and after code
if not needed just comment it

Generators:
range is a generator 
it just remembers last mumber it sent and resume if needed next
//suspend and and resume at last point of value genarrtion.
rather than storing in memory upfront, it's just gives whenever needed.
if needed it as a list, transform into list


Normal Function:
def create_cuv=bes(n):
    for i in range(n):
        result = []
        result.append(n**3)
    return result

Generator function;
def create_cubes(n);
    for i in range(n):
        yield i**3

this will calculate give next number whenever needed.

for i in create_cubes(10):
    print(i)

after prinitng one letter it will calculate cube for another and then print here.
rather than storing every ouput upfront.
print(next(g)) //print next number in generator
remberes last executed one and give next ouput.
at end it throws stop iteration.

To convert str in generator use iter(str)

fibonacci sequence:
a, b = b,a+B

generator = (list for list in my_list)//[] used for list, () for generator.
