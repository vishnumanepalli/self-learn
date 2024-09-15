Modularization:
 
private static Logger logger = Logged.getLogger(MySotingUtilConsumer.java)

List.copyOf(names)//to ake it immutable
other than files.read we can use file.readstring() we can bring in single String
predicate.negate() !boolean
or Predicate.not(isEven())

String str;
str.isbalnk()
strip removes spaces at front and end.
str.strip();//stripleading, striptrailing
str.replace(a,b);
str.lines()//returns stream
str.transform(lambda function)
.formatted("","");
str.isNull();

var s//can use to inference it. java specifies it at compile time
typicaly use var 
not initialized to isNull
var is not keyword
used for complex datatypes or often intermediate

Switch Expression: 
str = switch(day){case 0-> "Sunday"}//not needed any break;
"Sunday" -> {Sout();yield "Sunday";}

""" jtgy"\\ikolkm """ will directly without escapes
formatting can be possible

record just like struct in C 
Compact constructors are only allowed in records
person{
    ...//compacted
}
//other instance variables not allowed than specified

