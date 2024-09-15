Modules:
Collections
os module and Datetime
math, random
python debugger
timeit
regular Expressions
unzip and zip Modules

Collections: counter
Counter(list)//return dixt of occurances
//str also input

Counter(str.lower().split())//occuramances of words
//most_common(n)//order it and give that many if not present it will give all

Counter:
sum(c.values())                 # total of all counts
c.clear()                       # reset all counts
list(c)                         # list unique elements
set(c)                          # convert to a set
dict(c)                         # convert to a regular dictionary
c.items()                       # convert to a list of (elem, cnt) pairs
Counter(dict(list_of_pairs))    # convert from a list of (elem, cnt) pairs
c.most_common()[:-n-1:-1]       # n least common elements
c += Counter()                  # remove zero and negative counts

defaultdict: dict which assigns defualt value if accessed without assigned
d =defaultdict(lambda:0)

namedtuple:
from Collections import namedtuple
Dog = nametuple('Dog', [*arg])
we can use oops classes with tuples

/for slash \ back slash
inmport os
os.getpwd() //get dir 
os.listdir() //ls command param or non-param

import shutlil
shutil.move(src, dest)

os.unlink(path)
os.rmdir(path)
shutil.rmtree(path)
//difficult to reove the file/folder

send2Trash//to send to trashbin
for folders, sub-folders, files in os.walk(path)

DateTime module:
impoert datetinme
my_time = datetime.time()//datetime.time type
datetime.date()
a = datetime.datetime()
a.replace()

MAth And Random Variables:
impart math 
math.floor()//ceil, 
round(4.3)
math.pi//e, inf, nan
math.log(math.e)//base generally e 
math(100, 10)//100 base 10 log
math.sin(10)//radians
math.degrees()[pi radians   =180 degrees]
help(math)

Random: psueod-random number generators:
psueodo-seed

random.seed(101)
random.randint(0, 100)
random.choice(list)

sample with replacement and without it
random.choices(popularity = list, k =10) //may be repeated.
//with replacement
random.sample(popularity = list, k =10)
without replacement //

random.shuffle(list)//shuffling
random.uniform(a=1, b=100)//gives floating point numbers
random.guass(mu=0, sigma =1)

import pdb
pdb.set_trace()//q to quit

Regualr Expressions:
'in' for normal strings.
what if search foir emails or phone strings if not emial or phone number is knowm.
re library
r"(\d{3})-\d{3}-\d{4}"
match = re.search(pattern, text)
match.span()//(start, end)
//for multiples 
re.finaall(patt, tgext)

for match im re.finditer(pat, text):


Character	Description	Example Pattern Code	Exammple Match
\d	A digit	file_\d\d	file_25
\w	Alphanumeric	\w-\w\w\w	A-b_1
\s	White space	a\sb\sc	a b c
\D	A non digit	\D\D\D	ABC
\W	Non-alphanumeric	\W\W\W\W\W	*-+=)
\S	Non-whitespace	\S\S\S\S	Yoyo

match.group() //return actual string that matches


Character	Description	Example Pattern Code	Exammple Match
+	Occurs one or more times	Version \w-\w+	Version A-b1_1
{3}	Occurs exactly 3 times	\D{3}	abc
{2,4}	Occurs 2 to 4 times	\d{2,4}	123
{3,}	Occurs 3 or more	\w{3,}	anycharacters
\*	Occurs zero or more times	A\*B\*C*	AAACC
?	Once or none	plurals?	plural

phone_pattern = re.compile(r'(\d{3})-(\d{3})-(\d{4})')
//group denoted by parentheses
//only work with compile

cat|dog //or
. //to match any Character - wildcard
^ start,$end
[^\d] //exclude
[^\d!.? ]//max only words
(abc|cde|efg) one of three match

Timing: time elasped
imprt time
time before and after 
time.time()

timeit:
timeit.timeit(stmt, setup, number)//stmt, setup are passed as strings.


Zipping and unzip files:
import zipfile
comp_file = zipfile.ZipFile('comp_file.zip','w')//r for read
comp_file.write("new_file.txt",compress_type=zipfile.ZIP_DEFLATED)
comp_file.write('new_file2.txt',compress_type=zipfile.ZIP_DEFLATED)
comp_file.close()

comp_zip.extractall()

shutil.make_archive(ouputfilename, 'zip', path)

shutil.unpack_archive(zip file, final unzip, zip)
