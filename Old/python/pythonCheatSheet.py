numbers
2 + 2
2 - 2
2 * 2
2 / 2
2 % 2
2 ** 2 # exponent
(2+2)*2
2 // 2 # floor

price = 2
cost = _ * 5 # _ in interactive mode is the previous result

Strings
'I am a string literal'
"I am also a string literal"
"""
I am a string literal spanning multiple lines!
"""

3 * 'un' = 'ununun' 
'py' 'thon' = 'python' # auto concat; only with two literals
prefix = 'py'
prefix + 'thon'

"abc"[1:2]

[1,2,3,4,5] + [6,7,8]
arr = [6,7,8]
arr[3]
arr[1:2]
arr[1:]
arr[:2]
len(arr)

if x < 0:
	pass
elif x == 0:
	pass
else:
	pass

for i in range(10):
	pass

while x < 10:
	x = x + 1













def functionName(n, y=1, persist=[], z = None):
	return x

functionName(1, z=2)

def function2(file, *args):
	# args are in tuple
	for arg in args:
		print arg
	return args

def f3():
	def f4():
		print 'blah'
	f4()













list.append(x)
list.extend(iterable) -- [], ()
list.insert(i, x)
list.remove(x)
list.pop([i])
list.clear()
list.index(x, [start], [end])
list.count(x)
list.sort(key=None, reverse=False)
list.reverse()
list.copy()

stack: list.append, list.pop
queue: list.append, list.pop(0)

del a[0]
del a[1:2]
del a

# set
blah = {'a', 'b', 'c', 'd'}
setABCDEF = set('abcdefabcdef')

# dictionary
dict([('a', 1), ('b', 2)])
blah = {'a': 1, 'b': 2}
blah['a'] = 1













try:
	raise Exception('msg here')
	raise NameError
	break

except TypeError as err:
	pass
except(RuntimeError, NameError):
	pass
except:
	pass
finally:
	print 'this always runs'


class className(parentClass, parentClass2):
	counter = 1

	def __init__(self, arg1):
		self.counter2 = 2
		pass

newClass = className('blah')




# regex
pattern = '[0-9A-Z]+'
regex = re.compile(pattern)
firstLocation = regex.search('test this string')
isAMatch = regex.match('test this string')
match = re.search(pattern, 'test this string')

# math
math.ceil(num)
math.floor(num)
math.pow(num, exp)
math.log(num, base)


# random
random.random() # 0 <= x < 1
random.uniform(min, max)
random.seed()

# threading
class thread1(threading.Thread):
	def __init__(self):
		pass

	def run(self):
		print 'this is the looping part'

lock = threading.Lock()
lock.acquire(blocking=True, timeout=1)
lock.release()

semp = threading.Semaphore(count)
semp.acquire(blocking=True, timeout=None)
semp.release()


if __name__ == '__main__':
	main()





















str(1) # turn into string
"This is a {noun}, {1}, {0}".format('test', 'first', 'second') # outputs "this is a test, second, first"







str.capitalize()
str.casefold()
str.center()
str.count(substring, start*, end*)
str.encode()
str.endswith()
str.expandtabs()
str.find(substring, start, end)
str.format()
str.index()
str.isalnum()
str.isalpha()
str.isdecimal()
str.isdigit()
str.isidentifier()
str.islower()
str.isnumeric()
str.isprintable()
str.isspace()
str.istitle()
str.isupper()
str.join()
str.ljust()
str.lower()
str.lstrip()
str.maketrans()
str.partition() # split but only one the first separator
str.replace()
str.rfind()
str.rindex()
str.rjust()
str.rpartition()
str.rsplit()
str.rstrip()
str.split()
str.splitlines(keepEnds)
str.startswith()
str.strip()
str.swapcase()
str.title()
str.translate()
str.upper()
str.zfill()