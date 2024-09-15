Functional Programming:
return function 

list.stream().forEach(element->System.out.println(element));
//lambda expression
we are function code to execute

int sum = numbers.stream().reduce(0,(num1, num2) -> num1 + num2);
//reduce every pair to single value

Structured PRogramming:

    public int basicSum(List<Integer> numbers) {
    int sum=0;
    for(int num:numbers) {
    sum += num;
    }
    return sum;
    }

Functional Programming:
    public int fpSum(List<Integer> numbers) {
    int sum = numbers.stream()
    .reduce(0, (num1, num2) -> num1 + num2);
    return sum;
    }
//if multiple lines need return statement

Terminal Commands:
.max((n1, n2) -> Integer.compare(n1, n2)).get()
//min
//reduce
.collect(Collectors.toList())

INtermediate commands:
distinct, sorted, map
//map modifies each element by sme operation
//in for each we don't chnzge va;ue, we use it for printing or other op' 

to get range stream for int 
InteSream.range(1,10) //not stream, it is a IntPipeline

.boxed() method to convert an IntPipeline to a Stream
.collect(Collectors.toList()) //converts stream to list

Optional //isPresent, isEmpty, .orElse(2), .get(), 
//orElse is if empty to assign a default value

Back-end of Lambda Functions:
.filter(n -> n%2 ==0) // filter accepts predicate
//predicate is a funtion interface.

class EvenNumberPredicate implements Predicate<Integer> {
    @Override
    public boolean test(Integer number) {
        return (number%2 == 0);
    }
}
In the back it implements something object like this
We are providing implementationfor specific method in a class

forEach//it takes consumer. donot return 

class NumberSquareMapper implements Function<Integer, Integer> {
    @Override
    public Integer apply(Integer number) {
        return number * number;
    }
}//for map

Simplifing lambda Functions: Method References
System.out::println // shortcut s->System.out.println(s);
str -> str.length() << String::length

predictae<? super Integer> evenPredicate = n->n%2==0; and pass it to filterStoring function in variables
//return and pass functions.
imperative style -> declaring style

mapToObj return pipeline into objects to convert to list
it is combination of map().boxed()

maptoLong(returns long after calculation.)
maxEven.orElse(-1);//optional if null
