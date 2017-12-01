1 + 1
1 - 1
2 * 2
2 / 4
2 ** 5 # exponent
2 // 5 # floor div
1.1
1.1e+10
0xFF
077




'here\'s a string'
"here's another string"
str = "abc"
str[0]
str[1:2]
str[:2]
str[1:]
str[-1]

str.format()
str.split()
str.index()
str.endswith()
str.startswith()
str.find()
str.count()










if x < 0:
	pass
elif x > 0:
	pass
else:
	pass

for i in range(10):
	pass

while True:
	pass

def f(*argList, arg2=None, persist=[]):
	for arg in argList:
		print arg

def f2(**argMap):
	for key,value in argMap.items():
		print key, value
	return 1,2,3

a,b,c = f2()







lister = [1,2,3]
	append()
	remove()
	extend(list)
	insert(i, x)
	pop(i)
	index(x)
	sort()
	reverse()
	as stack:
		pop() - last
		append() - last
	as queue:
		append() - last
		pop(0)
tuple = (1,2,3)
dict = {'a': 1, 'b': 2}
	keys()
	values()
	[key,value] items()
	get(key)
	pop(key)
	update({key: value})



try:
	pass
	raise Exception("msg")
	raise Exception

except KeyboardInterrupt as err:
	pass
except (TypeError, NameError):
	pass
except:
	pass
finally:
	pass





class className(parent1, parent2):
	var = 1

	def __init__(self, arg):
		self(arg, 1)

	def __init__(self, arg, arg2):
		super().parent1Method()
		super(className, self).__init__() # calls self.__init__, then parent1, parent2
		super()
		pass

blah = className(1)




pattern = '/w+'
string = 'hello world'
re.match(pattern, string)

math
math.pow()
math.log()
math.ceil()
math.floor()

random.seed()
random.random() #[0,1)
random.range(min, max) #[min, max]

threading
class async(threading.Thread):
	def __init__(self):
		self.isRunning = True
		pass

	def run(self):
		while isRunning:
			pass

lock = threading.Lock()
	lock.acquire()
	lock.release()
semp = threading.Sempaphore(10)
	semp.acquire()
	semp.release()
sleep(second)

signal.getsignal(signalNum)
signal.setitimer(second)  #interval timer
signal.alarm(second)
signal.signal(signalNum, handlerFunction)