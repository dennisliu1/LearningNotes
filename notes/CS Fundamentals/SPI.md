Scenario 1 Scenario,2 Scenario 3 Scenario 4
Hackathon Finale cram Tenn proiect Algorithms class
3 days 7 days 1 month 4 months
c0 c1 c2 c3 c4
4.1 4.7 4.8 4.3,4.11 4.9
5.1, 5.6 5.12,5.18 5.2,5.17 5.5,5.9 5.3,5.10, 5.15
6.1 6.2,5.4 6.5,6.6 6.7,6.8 6.9,6.1,1
7.1 7.2,7.3 7.4,7.7 7.10 7.11
8.1 8.6 8.2,8.7 8.3,8.8 8.4
9.1 9.4 9.2,9.12 9.11 9.13,9.16
10.1 10.4 10.3 10.5 10.6
11.1 11.4,11.8 11.3,11,.9 11.5,11.10 11.6,11.7
12.2 12.3,12.5 12.1,12.5 12.4,12.6 12.9
13.1 13.2 13.5 13.7, 13.10 13.8
14.1 14.2, 14.3 14.4 14.5,14.8 14.7
15.1 15.2 15.3 15.4 15.9 15.6 15.10
16.1 15.2 16.3 16.6 16.5 16.7 16.12
17.4 17.6 17.5 17.7 17.8
18.1 18.7 18.2 18.3 18.5
19.3 19.6 19.8 19.9 20.9
20.13 20.15 20.16 20.1 20.2

# 1. Introduction
# 4. Primitive Types
## 4.1. Computing the parity of a word
# 5. Arrays
# 5.1. The Dutch National Flag problem
# 6. Strings
# 6.1. Interconvert strings and integers
# 7. Linked Lists
# 7.1. Merge two sorted lists
# 8. Stacks and Queues
# 8.1. Implement a stack with max API
# 9. Binary Trees
# 9.1. Test if a binary tree is height-balanced
# 11. Searching
# 11.1.
# 12. Hash Tables
# 12.2.
# 13. Sorting
# 13.1.
# 14. Binary Search Tree
# 14.1.
# 15. Recursion
# 15.1.
# 16. Dynamic Programming
# 16.1.
# 17. Greedy Algorithms & Invariants
# 17.4.
# 18. Graphs
# 18.1.
# 19. Parallel Computing
# 19.3.
# 20. Design Problems
# 20.13.

---


# 1. Introduction

# 4. Primitive Types
- all built-in types in Python are objects
- sys.maxsize == max integer in a word; maximum integer = f(max_available memory)
- sys.float_info
- a & b, a | b, a >> b, -a >> b, a << b, ~a, a^b
    - negative numbers == 2's complement value

- be very comfortable with bitwise operators, especially XOR
- understand how to use and create masks in an machine independent way
- know fast ways to clear & set the lowermost set bit
- understand signedness and what happens to shifting
- how to cache to accelerate operations for brute-forced small inputs
- commutativity & associativity used to perform parallel operations & reorder operations

key syntax
- abs(a), math.ceil(a), math.floor(a), min(a,b), max(a,b), pow(a,b) == a ** b, math.sqrt(a)
- str(123), int('123'), float('123.0')
- floats do not have infinite precision, use float('inf') and float('-inf') == pseudo max and min int
- math.isclose() for comparing floating point values
- random methods: random.randrange(28), random.randint(a,b), random.random(), random.shuffle(A), random.choice(A)

## 4.1. Computing the parity of a word
- x & (x-1) = x with its lowest set bit erased.
- x & ~(x-1) = get only the lowest set bit in x.
- caching
    - you can hard code an array with index 0-15 (16 bits) with the answers
    - for example, for 4 bits: 00, 01, 10, 11 == 0, 1, 2, 3
        - arr[0] = 0
        - arr[1] = 1
        - arr[2] = 1
        - arr[3] = 0
    - assume x = 8 bit word
    - so for the first pair, you can do arr[x >> 6] = arr[#]
    - but for 2nd pair and beyond, you need to remove the first pair's value!
        - use a bit mask to get only the pair you want: (x >> 4) & 3
    - the last pair doesn't need any shifting, only the BIT_MASK: x & 3
    - and then you can XOR all the pairs to get the final result
    - then do lookup:
        MASK_SIZE = 2
        BIT_MASK = 
        arr[x >> (3 * MASK_SIZE)] ^ arr[x >> (2 * MASK_SIZE) & BIT_MASK]
    - O(n/L) where L = width of MASK_SIZE == you're dividing the number into L sized chunks for lookup
- processing multiple bits at once (pseudo bisection technique)
    - since you're checking for parity, it doesn't matter what the order you check the bits is
    - so you can check lots of bits at the same time by doing XOR in batches!
    - x ^ (x >> 4) == first 4 bits XOR second 4 bits
        - so the "useful" part of the result is the 4 bits
    - repeat in powers of 2 until you reach the last bit
    - x & 0x1 == we ignore the non useful parts, so to extract the answer we use a BIT_MASK of 1
    - O(logn) == dividing size by 2 per operation
- you can combine these two optimizations
    - process multiple bits at once until a threshold (say 16 bits)
    - once you reach 16 bits, do the caching lookup
    - O(logn - logX + X/L) where X = processed bits remaining after doing the multiple bit processing

# 5. Arrays
- list, tuple (immutable)
- dynamic resize, not bounds, values can be deleted and inserted at arbitrary locations

- [a,b,c], [a] + [b] * 10, list(range(100))
- len(A), A.append(a), A.remove(a), A.insert(a, pos)
- 2D arrays: [ [0], [1], [2] ]
- a in A: O(len(A))
- difference between B = A and B = list(A)
    copy.copy(A) vs copy.deepcopy(A)
- min(A), max(A), bisect.bisect(A, 6), bisect.bisect_left(A, 6), bisect.bisect_right(A,6)
    - A.reverse() == in-place
    - reversed(A) == returns an iter
    - A.sort() (in-place)
    - sorted(A) = returns a copy
    - del A[i] (deletes the ith element)
    - del A[i:j] (deletes a slice)
- A[i:j:k]
    - negative values
    - rotating the array == A[k:] + A[:k]
    - B = A[:] (shallow copy)
- list comprehension
    - [x + 1 for x in range(10) if x > 10]
    - [(x,y) for x in A for y in B]

# 5.1. The Dutch National Flag problem
- problem: do the quicksort partition submethod
- given array A and an index i, sort elements into smaller, equal, greater than the pivot A[i].
- naive solution: use 3 lists, and for each element add into the smaller, equal, great than list.
    - O(n) time, O(n) space
- solution 2: 
    - loop and group smaller elements to the start via bubble sort?
    - loop and group larger elements to the end via bubble sort
    - On^2) time, O(1) space
- solution 2.5: improving on solution 2
    - loop and swap smaller elements to the start O(n)
    - loop and swap larger elements to the end O(n)
    - O(n) time, O(1) space, 2 passes though
- solution 3: in place naive solution
    - 3 indexes: smaller, equal, larger
    - 4 buckets: smaller, equal, unclassified, larger
        - smaller = A[:smaller]
        - equal = A[smaller:equal]
        - unclassified = A[equal:larger]
        - larger = A[larger:]
    - starting: smaller = 0, equal = 0, larger = len(A)
    - loop all elements, swap to the correct bucket and increase bucket size by changing the index
    - current element = equal index
    - O(n) time, O(1) space

# 5.6. Buy and sell a stock once
- given a list of stock prices over a date range, find the maximum profit you can get from buying and selling 1 share.
- naive solution
    - for each day you could potentially sell at, you want to find the cheapest price you could have bought the share at earlier
    - inversely, you could look up the highest price to sell given a purchase date
    - either way works
    maxProfit = 0
    for i in range(len(A), 0):
        profit = A[i] - min_of_arr(A[:i])
        if profit > maxProfit:
            maxProfit = profit
    return maxProfit
    - the expensive operation is the min_of_arr which could be faster using a O(n) cache storing the cheapest share seen so far that day.
- better solution
    - single loop: store cheapest price seen so far, get the profit and save the max profit
    max_profit = 0, min_price = sys.maxsize
    loop i = start .. end
        price = A[i]
        profit = price - min_price
        max_profit = max(profit, max_profit)
        min_price = min(price, min_price)

# 6. Strings
- palindrome

- s[2], len(s), s + t, s[2:4], s in t, s.strip(), s.startswith(prefix), s.endswith(suffix), s.split(',')
- 3 * 'a', ','.join(('a', 'b', 'c')), s.tolower(), '{a}'.format(a='blah')
- strings are immutable: operations create a new string

- lots fo simple brute-force solutions using O(n) space, with subtler solutions using O(1)
- know the implications of immutable strings and how to get around it (lists)
- updating a mutable string from the front is slow; know how to write values from the back

# 6.1. Interconvert strings and integers
- implement int() and str()

int(s)
- read character by character
    def int(s):
        r = 0
        for i in range(len(s)):
            c = s[i]
            r *= 10
            r = r + c
        return r
- optimize 1: fill it right to left, and fill it by bits?
    - but since it's power of 10s, not powers of 2, how would you do this?
    - it's easier to add r + c * (10 ** i)
    - the expensive part is the r *= 10
- need to handle negatives

str(i)
- read digit by digit
    def str(i):
        s = []
        v = i
        while v > 0:
            d = v % 10
            s.append(d)
            v = v / 10
        return str(reversed(s))
- need to handle negatives

# 7. Linked Lists

- implement the basics: search, insert, delete for singly linked list
- list problems have O(n) space brute force solutions with subtler solutions using existing nodes so it uses O(1) space
- problems are conceptually simple and more about cleanly coding what's specified
- use a dummy head (sentinel) to avoid checking for empty lists
- easy to forget to update next for the head and tail
- a lot of algorithms can benefit from using 2 iterators, one ahead of the other

- get head, tail, arbitrary node
- insert at head, tail, arbitrary location
- delete head, tail, arbitrary node

# 7.1. Merge two sorted lists
- add the smaller element from each list to the merged list


# 8. Stacks and Queues
- Stack = push and pop and peek (last in, first out = LIFO)
    - great for reverse iterators for sequences so you can go back
    - great for parsing
    - identifying where a stack would help is essential
    - augment the stack to do more features when needed
- s.append(e) == push
- s[-1] = peek
- s.pop()
- len(s) == 0 (check for empty)


- Queue = (first in, first out = FIFO)
    - enqueue = add to tail
    - dequeue = remove from head
- Deque = double ended queue
    - insert and delete from head or tail
    - front: push & pop
    - back: inject & eject
- great for when you need the order of the elements inserted
- collections.deque
    q.append(e)
    front:
        q[0]
        q.popleft()
    back:
        q[-1]
        q.pop() (?)

# 8.1. Implement a stack with max API
- design a stack that incldues a max operation. returns maximum value stored in stack.

- store the stack and store the max seen so far at that element level
    - so store element = (value, max)
- since we know values are inserted as LIFO, you only need to check the newly inserted number > existing max
- so you can store a max array storing (value, count)
    - the count is so you can count duplicates
    - add when new number > max
    - delete when popping max number
- O(n) time and O(1) max() function, with O(1) handling max setup
- O(n) at most space used for helper max array (insert a unique value sorted stack)

# 9. Binary Trees

- recursive algorithms great for tree problems; remember function call stack space allocation used!
- some problems can be done with brute force using O(n) space but subtler solutions can do it in O(1)
- left & right skewed trees can be used for doing complexity analysis
    - O(h) complexity == O(logn) for balanced trees, O(n) for skewed trees
- tree nodes with parent field is easier to work with
- easy to mistake a node with a single child as a leaf
- tree traversal
    - inorder, preorder, postorder (recursive, so it's actually depth first search)

# 9.1. Test if a binary tree is height-balanced
- height balance == left and right subtrees have height +/- 1 of each other
- solution: do depth first search and store whether the current node is height; bubble up!
    - use post-order traversal

# 10. Heaps
- specialized complete binary tree
- heap property: node.key > children[i].key (max heap)
- can be implemented as an array:
    - node[i].child = node[2*i + 1], node[2*i + 2]
- O(logn) insertion, O(1) lookup for max element, O(logn) deleting max element, O(n) for arbitrary node
- also known as priority queue
- Heaps are great for getting the k largest or k smallest elements in a collection.
- python
    - heapq module == min-heap only!?
    - heapq.heapify(L)
    - heapq.nlargest(k, L), heapq.nsmallest(k, L)
    - heapq.heappush(h, e)
    - heapq.headpop(h)
    - heapq.headpushpop(h, a)
    - e = h[0] 

# 10.1. Merge Sorted Files
- use a min-heap so you always can pop the next smallest number
- so whatever number you add, you can always get the next smallest number
- that lets you get them in sorted order.

# 11. Searching
- this chapter is on searching static data in an array.
- Binary Search
    - great for sorted arrays where you compare interval of numbers
    - consider the time/space tradeoffs, especially if have to make multiple passes
- python
    - bisect library
    - bisect.bisect_left
    - bisect.bisect

# 11.1. search a sorted array for first occurrence of k
- naive = binary search and linear search for the first occurence index
- better = create a binary search variant: constraint the search space to find it, and take the left from [left, right] constraints.
    That will be the first occurence.

# 12. Hash Tables
- best theoretical and real-world performance for lookup, insert & delete O(1)
- it takes O(n) to rehash if you need to reallocate the data into a larger/smaller hash table, but amortized the hit will still get you O(1)
- the hash code can be used as a signature to enhance performace (filter out candidates)
- use a precomputed lookup table for doing mappings char -> value or value -> char.
- the hash function is the hardest part to write: make sure every input ALWAYS returns the same output!
- multimap == map that contains multiple values for a single key.
    - open addressing
    - separate chaining
- library in python
    - set, dict, collections.defaultdict, collections.Counter
    - set stores keys, all others store key & value pairs
    - KeyError Exception if key is not present
        - collections.defaultdict returns a default if key is not present.
    - collections.Counter = counting # of occurrences of keys
    - set.add(42), set.remove(42), set.discard(42), x in set, s <= t (s is a subset of t), s - t (remove elements from s that are not in t)

# 12.1. test words for palindromic permutations
- test whether a string can be permutated to become a palindrome.
- if you could rearrange a string to become a palindrome, technically you just need pairs of letters, with an optional single mid character if the string is odd.
- so count the number of characters in the string with a hash table Counter.
- Then check if each character is even.
- If the string is odd, one character will have count = 1.

# 12.2. Is an anonymous letter constructible?
- given an anonymous letter we want to write and a magazine we would cut letters out of and paste together to make the anonymous letter, check if you can write the anonymous letter.
- The anonymous letter is a string of characters.
- The magazine is a string of characters.
- Remember, the magazine can run out of characters for you to cut out and use in the letter!
Solution
- same as 12.1
- store a hash table counter with counters of all the letters you need from the anonymous letter.
- iterate through the magazine and every character you see that matches, subtract one.
- if you successfully reduce all the counters to zero, return true. Otherwise return false.
- you'll iterate through both the letter and magazine once, so it'll be O(n+m).
- optimization:
    - you could technically stop counting once you finish the hash table counters. So if you track a letter_total_letters, you can stop.

# 13. Sorting
- we want to sort elements in an array to a natural order.
- By being sorted, you can search faster, lookup elements faster, etc.
- efficient sorts are O(nlogn) but each with a drawback:
    - heapsort == equal elements are not sorted in same order as they were before sorting.
    - mergesort == uses Nx more memory.
    - quicksort == worst case can take O(n^2) time.
- there's also special cases:
    - with small amounts of elements, just use insertion sort.
    - if the elements are at most k indexes away from their final sorted position, use min-heap for O(nlogk).
    - with lots of repeated numbers, use radix (bucket) sort.
    - with lots of duplicates, use a BST with an inorder traversal to get the values.
    - specialized inputs can get O(n) sorting time.
Python
- sort() == sort a list in-place.
- sorted() == sort an iterable.

# 13.1. Compute the intersection of two sorted arrays
- given two sorted arrays, return the elements that are in both the arrays, without duplicates.
Solution
- merge sort and return matches.
- if the value exists already, it'll be the last element in the result.
- runtime = O(m+n)

# 14. Binary Search Tree
- BST is great for searching and lookups
- O(n) using inorder traversal to do linear reading of the BST.
- O(logn) doing binary search to find an element.
- The BST lookup, insert, delete can take worst case O(n), but with proper height management using self balancing BST, you can ensure the height is O(logn).
- treat the BST elements as immutable, because it's sorted by the BST property!
    - the keys the BST uses must be immutable.
- BST goes great with hash tables: use BST to do search, hash tables to get the result.
    - the BST stores a small key for each element, and the hash table stores the complex full element.
    - The BST may need to be augmented depending on the data.

# 14.1. Test if a tree satisfies the BST property
- 

# 15. Recursion
- 

# 15.1.
- 

# 16. Dynamic Programming
# 16.1.
# 17. Greedy Algorithms & Invariants
# 17.4.
# 18. Graphs
# 18.1.
# 19. Parallel Computing
# 19.3.
# 20. Design Problems
# 20.13.





# --- 4.1 4.7 4.8 4.3,4.11 4.9 ---

## 4.7 - compute x^y, double type = decent, slow

brute force: x * x ... y-1 times

more efficient: do more per loop
- remember x^(y0 + y1) = x^y0 * x^y1
- x^4 = (x^2)^2
- x ^ y = x^(y/2)^2
- negative: x = 1/x, y = -y

pow(x, y):
    result = 1.0
    Y = y
    if y < 0:
        Y = -y
        x = 1.0 / x
    while Y > 0:
        if Y & 1:
            result *= x
        x = x * x
        Y = Y >> 1

Result: OK

## 4.8 Reverse digits = OK
- given an integer, return integer where digits are reversed.
    - 14 = 41
    - -413 = -314

brute force: int -> string, reverse -> int
better:
    result = 0
    negative = False
    if num < 0:
        negative = True
        num = -num
    
    while num > 0:
        digit = num % 10
        result += digit
        result *= 10
        num = num // 10 # floor
    
    if negative:
        result = -result
    return result

Result: OK

## 4.3 Reverse Bits
reverse a 64-bit unsigned integer

brute force: loop
reversebits(num):
    result = 0
    shift = 64
    while num > 0:
        bit = num & 1
        result = result | bit >> (shift)
        shift = shift - 1
        num = num >> 1
    return result

- faster:
    - using a lookup table with the reverses

reversebits(num):
    precomputed_reverse = []

    count = 0xFFFF
    for i in range(0, 0xFFFF+1):
        precomputed_reverse[i] = count
        count -= 1
    
    masksize = 16
    bitmask = 0xFFFF

    result = (precomputed_reverse[num & bitmask] << (3 * masksize)) | 
            (precomputed_reverse[(num >> masksize) & bitmask] << (2 * masksize)) | 
            (precomputed_reverse[(num >> (2 * masksize)) & bitmask] << (1 * masksize)) | 
            (precomputed_reverse[num >> (3 * masksize) & bitmask])
    return result

Result: OK

## 4.11 Rectangle intersection
given two rectangles A and B, check if they intersect. The rectangles' sides are parallel to X & Y axis.
return the intersection rectangle. 

brute force
- overlap is true if one of A's corners is in B. or the opposite.
- you can also check the min-max X and Y per rectangle.

Returning it is the tricky part.

rect:
    x, y = bottom left corner
    w = # width
    h = # height

def is_intersect(A, B):
    (A.x <= B.x + B.w and B.x <= A.x + A.w) and (A.y <= B.y + B.w and B.y <= A.y + A.height)

def intersectRect(A, B):
    if not is_intersect(A, B):
        return Rectangle(0, 0, -1, -1)
    else:
        x = max(A.x, B.x)
        y = max(A.y, B.y)
        return Rectangle(
            x,
            y,
            min(A.x + A.width, B.x + B.width) - x,
            min(A.y + A.height, B.y + B.height) - y
        )


I don't really get this...

---

https://www.geeksforgeeks.org/find-two-rectangles-overlap/

This makes way more sense! Don't intersect when:
    - one rectangle is above the other
    - one rectangle is left of the other
To calculate the intersection, it's a iteral equation...
https://math.stackexchange.com/questions/99565/simplest-way-to-calculate-the-intersect-area-of-two-rectangles
https://www.geeksforgeeks.org/intersecting-rectangle-when-bottom-left-and-top-right-corners-of-two-rectangles-are-given/


def is_intersect(A, B):
    return not (A.x > B.x+w || B.x > A.x+w || A.y < B.y+w || B.y+w < A.y)

Result: BAD

## 4.9
Check if a decimal integer is a palindrome.

Brute force:
transform into string, do palindrome check (first and last character must match) == O(n)

Better:
n = number of digits = floor(log10(x)) + 1
so least significant bit = x mod 10, most significant bit = x / 10^(n-1)

so given the Ith bit, x mod 10 == x / 10^(n-1) and shift it:

def intPalindrome(x):
    n = math.floor(math.log10(x)) + 1
    msd_mask = 10 ** (n - 1)
    for i in range(n // 2): # you only need to check half the digits; the second half are going to repeat
        msd = x // msd_mask
        lsd = x % 10
        
        if msd != lsd:
            return False
        
        x = x % msd_mask # remove msd from x (think 152 % 100 = 52)
        x //= 10 # remove lsd from x
        msd_mask //= 100 # shift msd position by 2

Result: BAD


# --- 5.1, 5.6 5.12,5.18 5.2,5.17 5.5,5.9 5.3,5.10, 5.15 ---

# 5.1 The Dutch National Flag Problem
Partition step in Quicksort

logic:
- for i = 0 to end of unknown group
    - if A[i] < A[index]:
        add to start
    - if A[i] == A[index]:
        add to index
    - if A[i] > A[index]:
        add to end

partition(A, index):
    # TBDone

Result: OK

# 5.6 Buy and sell a stock once
- given a list of prices for a stock over a period of time, identify when to buy and when to sell to make maximum profit. You can choose not to buy if no profit is possible.

Solution
- greedy solution, but needs to change the data a bit to make comparison better
- for every day, find out: if you sold on that day, what's the max profit you can make?
    - hold onto the min_price you would have bought in the past
- we don't need where the positions were?

def buy_sell_stock_once(prices):
    min_price_so_far = float('inf')
    max_profit = 0

    for price in prices:
        max_profit_today = price - min_price_so_far
        max_profit = max(max_profit, max_profit_today)
        min_price_so_far = min(min_price_so_far, price)
    
    return max_profit

Result: OK

# 5.12 Sample offline data
- given an list of data, create a subset of the data with random entries from th e original list of data.
- Do this efficiently and quickly!
- list A with size n, subset with size k

Solution
- can do swap in place, move it to the front
- return the first k elements == subset list!

def random_subset_sampling(A, k):
    end = len(A) - 1
    for i in range(0, k):
        r = random.randint(i, end)
        temp = A[i]
        A[i] = A[r]
        A[r] = temp
    return A[0:k]

Result: OK

# 5.18 Compute the Spiral ordering of a 2D array
- given a 2D array, start from top left, and return the order in a spiral to the center of the array.

Solution
- given a 2D array of format A[][] = A[[], [], [], ...]
- we want to create a "direction", and for each direction, define an end at `len() - 1`
- this will keep shortening, until start = end

def matrix_in_spiral_order(M):
    startX = 0
    startY = 0
    endX = len(M)-1
    endY = len(M[0])-1
    direction = "R"
    posX = startX
    posY = startY
    result = []

    while startX < endX and startY < endY:
        result.append(M[posX][posY])
        if direction == "R":
            if posX < endX:
                posX += 1
            else:
                direction = "D"
        if direction == "D":
            if posY < endY:
                posY += 1
            else:
                direction = "L"
        if direction == "L":
            if posX > startX:
                posX -= 1
            else:
                direction = "U"
        if direction == "U":
            if posY > startY:
                posY -= 1
            else:
                direction = "R"
                startX += 1
                startY += 1
                endX -= 1
                endY -= 1
                posX = startX
                posY = startY

    return result

Result: OK

# 5.2 Increment an arbitrary-precision integer
- given an array representing an infinite precision integer, +1 to it. 
- example: [1,2,3] + 1 = [1,2,4]

Solution:
- add 1 to a digit, carry over when it is 10.

def increment_infinite_integer(I):
    carry = True
    for i in range(len(I)-1, -1, -1):
        if carry:
            I[i] += 1
            if I[i] >= 10:
                I[i] %= 10
                carry = True
        else:
            break
    if carry:
        I.insert(1, 0)

Result: OK

# 5.17 The sudoku checker problem
- check whether a 9x9 2D array representing a partially completed sudoku is valid

Solution
- check for
    - every row is unique
    - every column is unique
    - every 3x3 subarray is unique
- use a bit array to confirm... what exactly

def is_valid_sudoku(sudoku):
    
    # check rows
    for i in range(0, 9):
        items = {}
        for j in range(0, 9):
            item = sudoku[i][j]
            if item not in items:
                items.add(sudoku[i][j])
            else:
                return False

    # check colums
    for j in range(0, 9):
        items = {}
        for i in range(0, 9):
            item = sudoku[i][j]
            if item not in items:
                items.add(sudoku[i][j])
            else:
                return False
    
    # check 3x3 subgrids
    countX = 0
    countY = 0
    i = 0
    j = 0
    while i <= 2:
        while j <= 2:
            x = i * 3
            y = j * 3
            items = {}
            while x <= 2:
                while y <= 2:
                    item = sudoku[x][y]
                    if item not in items:
                        items.add(sudoku[x][y])
                    else:
                        return False
                    y += 1
                x += 1
            j += 1
        i += 1
    return True

result: OK
- O(e+e+e)

# 5.5 delete duplicates from a sorted array
- given list, remove duplicates. keep the list the same, but zero the duplicates and put them at the end of the list.
- inputs are all numbers
- there is a O(n) time and O(1) space solution (!!)

Solution
- since it's sorted, you can find if there is a duplicate immediate (they're right after the current number)
- swap the duplicates with the next non-duplicate, so you shift the list as you go

def delete_duplicates(A):
    empty_space = -1
    curr = -1
    for i in range(0, len(A)):
        num = A[i]
        if curr == -1:
            curr = num
        elif curr == num: # duplicate
            A[i] = 0
            if empty_space < 0:
                empty_space = i
        elif curr != num:
            found_swap = False
            while empty_space < i:
                if A[empty_space] == 0:
                    A[empty_space] = A[i]
                    found_swap = True
                empty_space += 1
            if found_swap:
                A[i] = 0
            curr = num
    return A

Result: BAD; there's a more elegant solution

# 5.9 Enumerate all primes to n
- find all primes <= integer n.

Solution
- you only need to check up to sqrt(n)
- keep a list of primes so you can do the sieve
- sieve: mark all numbers as primes first. 
    - Then for every prime you encounter, mark prime * 1..n as not primes
    - keep going until sqrt(n)
- you can speed up the sieve by starting with 2 (so all even numbers are ignored)
- speed up more by doing the checks starting form p**2 instead of p, because k*p numbers, where k < p have already been sieved out
- there's a lot of tricks you can do with prime proofs

def primes(n):
    primes = []
    is_prime = [False, False] + [True] * (n-1) # 0 = False, 1 = False
    for p in range(2, n+1):
        if is_prime:
            primes.append(p)
            for i in range(p, n+1, p):
                is_prime[i] = False
    return primes

result: bad? i saw the solution because i couldn't remember the sieve logic, and the math i don't remember.

# 5.3 multiply two arbitrary-precision integers
- given two "list of digits" representing integers, multiply them.

Solution
- same as adding.
- size of the array is going to be n+m at most.
- do one digit at a time:
    - n * m[0] + n * m[1] ...

def multiply(n1, n2):
    result = [0] * (len(n1) + len(n2))
    for i in range(len(n2)-1, -1, -1):
        for j in range(lne(n1)-1, -1, -1):
            result[i + j + 1] += n1[i] * n2[j] # rolling digit tracking
            result[i + j] += result[i + j + 1] // 10 # get the overflow and carry to next digit
            result[i + j + 1] %= 10 # keep only least significant digit; we did the carry over already
    # need to remove leading zeros
    i = 0
    while i < len(result):
        if result[i] == 0:
            i += 1
        else:
            break
    i -= 1

    if i >= 0:
        return result[i:]
    else:
        return result

# 5.10 permutate the elements of an array
given a map of index: element, rearrange the elements of an array given a permutation map.

Solution:
- isn't this ... super easy? you just swap and rotate elements following the map?
- If generating a new array, you can do this in O(n) time and space.
Better solution:
- do swaps (cyclic permutation)
- need to identify chains of cycles and disjoint cycles
- this way, you only need O(1) extra space

a b c d e f g - array
5 4 2 6 1 3 0 - Goal
g e c f b a d - result
-------------
a b c d e f g
+------------   next = 0, perm[next] = 5
f b c d e a g - swap(0, 5)
- 4 2 6 1 3 0   next = 5, perm[next] = 3
d b c f e a g - swap(0, 3)
- 4 2 6 1 - 0   next = 3, perm[next] = 6
g b c f e a d - swap(0, 6)
- 4 2 - 1 - 0   next = 6, perm[next] = 0
g b c f e a d - swap(0, 0)
- 4 2 - 1 - -   -- (no change) already marked, done cycle --
+-+----------   next = 1, perm[next] = 4
g e c f b a d - swap(1, 4)
- - 2 - 1 - -   next = 4, perm[next] = 1
g e c f b a d - swap(1, 1)
- - 2 - - - -   -- (no change) already marked, done cycle --
+-+----------   next = 2, perm[next] = 2
g e c f b a d - swap(2, 2)
- - - - - - -   -- (no change) already marked, done cycle --
...
every i will end immediately, going to end

def permutate_array(perm, A):
    n = len(perm)
    for i in range(0, len(A)):
        next = i
        while perm[next] >= 0:
            A[i], A[perm[next]] = A[perm[next]], A[i] # swap

            temp = perm[next] # hold index
            perm[next] -= n # mark index as invalid
            next = temp # use index



# 5.15 Compute a random subset
- given size n, return a subset of size k with random numbers between 0..n-1.

Solution
- for k: get random.randrange(0, n)
... not really sure what you can do to make this any faster...
- I see a solution using a hash table, but i'm not sure how this is any faster?



<!-- 6.1 6.2,6.4 6.5,6.6 6.7,6.8 6.9,6.1,1 -->
# Strings
# 6.1 String <-> Integer
- Create a to_integer(string) and to_string(integer) function.

Solution
def to_integer(s):
    result = 0
    for i in range(len(s)-1, -1, -1):
        c = s[i]
        result += to_digit(c)
        result *= 10
    return result

def to_string(x):
    result = []
    if x < 0:
        negative = True
         x *= -1
    else:
        negative = False

    whle x > 0:
        d = x % 10
        result.append(to_char(d))
        x /= 10
    if negative:
        result.append('-')
    result.reverse()
    s = ''.join(result)
    return s

result: okay

# 6.2 Base Conversion
- base_conversion(string_in_b1, b1, b2), where 2 <= base <= 16

Solution
- same as before actually, but a bit trickier
- string -> number using b1
    - per character: digit = c_to_base_digit(c)
- result1 = number in base 10
- number -> b2
    - digit = num % b2
    - rest = num / b2

def base_conversion(s, b1, b2):
    number = 0
    # string_b1 -> number
    for i in range(len(s)-1, -1, -1):
        c = s[i]
        d = to_digit(c, b1)
        number += d
        number *= b1
    # number -> string_b2
    arr = []
    while number > 0:
        d = number % b2
        c = to_char(d)
        number /= b2
        arr.append(c)
    arr.reverse()
    result = ''.join(arr)
    return result

result: OK


# 6.4 Replace and Remove
- replace each 'a' by two 'd'.
- delete every entry containing 'b'.

Solution
- trivial if you're inserting into new array; O(n) time, O(n) space
- trivial if you're using insert(index, x) and remove(index) functions; O(n^2) though because insert() and remove() take O(n) time.
- harder if O(n) time and O(1) extra space
    - loop through and get the total new length, delete 'b' as you see them
    - go in reverse order from n-1..0 to populate the new array in place
    - only question is: if you increased the length of the array, isn't that still a new memory allocation?
        - for the sake of the exercise, just assume the array resizing saves time & memory somehow

def repace_remove(arr):
    length = 0
    for i in range(0, len(arr)):
        c = arr[i]
        if c is 'b':
            pass
        elif c is 'a':
            length += 2
        else:
            length += 1
    new_arr = [''] * length
    j = len(new_arr)-1
    for i in range(len(arr)-1, -1, -1):
        c = arr[i]
        if c is 'b':
            pass
        elif c is 'a':
            new_arr[j] = 'd'
            new_arr[j-1] = 'd'
            j -= 2
        else:
            new_arr[j] = c
            j -= 1
    return new_arr

result: okay

# 6.5 Test Palindromicity
- given a string, check if it is a palindrome
- ignore all non-alphanumeric characters

Solution
- look at n-1 and 0 element, skip over non-alphanumeric characters
- end at start > end pointers (pointers went past each other)

def is_palindrome(s):
    j = len(s)-1
    i = 0
    whlie i <= j:
        c = s[i]
        c2 = s[j]
        while c2 !~ /\W/:
            j -= 1
            c2 = s[j]
        if c is not c2:
            return False
        i += 1
        j -= 1
    return True

# 6.6 reverse all the words in a sentence
- reverse the string by word. So "hello this beautiful world" => "world beautiful this hello"

Solution
- you could do string.split(' ') but that uses O(n*w) space (w = number of words)
- instead, just reverse the string and the un-reverse each word. that would be O(n) + O(w*(n/w)) = O(2n) = O(n) time and O(1) space for swapping

def reverse_words(s):
    s.reverse()

    i = 0
    start = i
    end = find_index(s, ' ', start, len(s))
    while start < len(s):
        reverse_str(s, start, end)
        start = end+1
    return s

def find_index(s, c, start, end):
    i = start
    while i < end:
        char = s[i]
        if char is c:
            break
        i += 1
    return i

def reverse_str(s, start, end)
    i = start
    j = end
    while i <= j:
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i += 1
        j -= 1
    return s

result: okay

# 6.7 Compute all mnemonics for a phone number
- turn a phone number into all combination of character sequences generated from a number pad.

Solution
- each number maps to a corresponding range of letters.
- you could recursively go through a nest of these letters.

def mnemonics(phoneNumber):
    return generate(phoneNumber, '')

def get_mapping(n):
    if n == '0' or n == '1':
        return []
    elif n == '1':
        return ['A','B','C']

def generate(result, phoneNumber, prev_result):
    if len(phoneNumber) > 0:
        n = phoneNumber[0]
        for c in get_mapping(n):
            generate(result, phoneNumber[1:], prev_result+c)
    else:
        result.append(prev_result)

- problems?
    - expensive doing it with recursion (thought phone numbers are generally 7-10 digits long, so it's okay)
    - space usage is high
- improvements?
    - use an array to store the partial result; prev_result + c is expensive (it's creating a new string every time)
    - don't cut the phoneNumber; use a digit index to just grab the value you need

result: okay

# 6.8 The Look and Say Problem
- This is a sequence. Get the nth integer in the look-and-say sequence as a string.
- Each pass, for each digit: look (the count) and say (the value).
- You always start with 1.
- For example:
    - 1 = start
    - One 1 = 11
    - Two 1 = 21
    - One 2, One 1 = 1211
    - One 1, One 2, Two 1 = 111221
    - Three 1, Two 2, One 1 = 312211
    - One 3, One 1, Two 2, Two 1 = 13112221
    - One 1, One 3, Two 1, Three 2, One 1 = 1113213211

Solution
- LookAndSay(n) times. For loop will work.
- group digits into groups of same digits.
    - for each group, return count + value.

O(n*(2^n))

def lookAndSay(n):
    result = '1'
    for x in range(1, n): # we start at 1 because the first iteration is 1.
        new_result = []
        prev = ''
        count = 0
        for i in range(0, len(result)):
            c = result[i]
            if prev == '':
                prev = c
                count = 1
            elif prev == c:
                count += 1
            else:
                result.append(count)
                result.append(c)
                prev = c
                count = 1
        result = ''.join(new_result)
    return result

result: okay

# 6.9 Convert From Roman to decimal
- convert a roman numeric string to decimal.
- I = 1
- V = 5
- X = 10
- L = 50
- C = 100
- D = 500
- M = 1000
- I before V or X = -1
- X before L or C = -10
- C before D or M = - 100
- no back to back exceptions: IXC is invalid, CDM is invalid

Solution
- it's easy to add forward, but hard to subtract backwards
- so do it Right to Left instead, so you can easily handle subtraction case
- if number < prev_number, subtract chain started.
- else, add number.

def romanToDecimal(roman):
    result = 0
    prev = -1
    minus_flag = False
    for i in range(len(roman)-1, -1, -1):
        value = to_decimal(roman[i])
        if value > prev:
            minus_flag = True
            prev = value
        
        if minus_flag and prev = value:
            result -= value
        else:
            if minus_flag:
                minus_flag = False
            result += value
            prev = value
    return result

result: okay, but it's tricky because I don't really know roman numerals very well.

# 6.11 Write a string sinusoidally
- turn string into a sin wave and save per row.
- height is 3, starting string at 0 and going up.
- so "Hello_World!" is:
 e   _   l   
H l o W r d  
   l   o   ! 
012345678901

Solution
- you could create a 3xN sized array and populate it with the sin wave rule, but that's expensive.
- you can just get each row as a series:
    - first row = 1,5,9 => 1 + 4i
    - second row= 0,2,4,6,8,10 => 2i
    - third row = 3,7,11 => 3 + 4i

def string_sine(s):
    result = []
    for i in range(1, len(s), 4)
        result.append(s[i])
    for i in range(0, len(s), 2)
        result.append(s[i])
    for i in range(3, len(s), 4)
        result.append(s[i])
    return ''.join(result)

result: okay, still saw solution though.


# Linked Lists: 7.1 7.2,7.3 7.4,7.7 7.10 7.11

# 7.1 Merge two sorted lists

Solution

def merge_linked_lists(l1, l2):
    result = None
    i = result
    i1 = l1
    i2 = l2
    while i1 is not None and i2 is not None:
        if i1 is not None:
            v1 = i1.value
        else:
            v1 = None
        if i2 is not None:
            v2 = i2.value
        else:
            v2 = None
        
        if not v2:
            v = v1
        elif not v1:
            v = v2
        elif v1 and v2 and v1 <= v2:
            v = v1
            i1 = i1.next
        elif v1 and v2 and v1 > v2:
            v = v2
            i2 = i2.next
        
        if result is None:
            result = v
            i = result
        else:
            i.next = v
            i = i.next
    return result

result: I know this one.

# 7.2 reverse a single sublist
- 1..n linked list
- reverse the nodes between x and y, inclusive.

Solution

def reverse_sublist(list, start, finish):
    iter = list
    i = 0
    while i < start-1:
        iter = iter.next
        i += 1
    # stop just before reaching start
    sublist_head = iter

    iter = iter.next # start
    prev_iter = iter
    iter = prev_iter.next
    next_iter = iter.next
    i = 0
    while i < finish-start:
        iter.next = prev_iter
        prev_iter = iter
        iter = next_iter
        next_iter = next_iter.next
        i += 1
    tail = sublist_head.next
    sublist_head.next = iter
    tail.next = next_iter
    return list

result: needs work, prety slow.

# 7.3 test for cyclicity
- check if there are cycles in the linked list.

Solution
- easiest = store nodes in hash table, if you see existing entry, you got a duplicate.
- mid = two loops: outer and inner.
    - outer = traverse through list as normal.
    - inner = traverse <outer loop number of seen nodes so far> nodes past the outer, starting from the outer node.
        - if you see the outer node, you got a loop.
- hard in place = fast and slow
    - start at head
    - slow = 1 node per loop
    - fast = 2 nodes per loop
    - if fast encounters slow, you got a loop.

def has_cycle_hard(list):
    slow = list
    fast = list
    while True:
        slow = slow.next
        if slow is None:
            return False
        
        fast = fast.next
        if fast is slow:
            return True
        elif fast is None:
            return False
        
        fast = fast.next
        if fast is slow:
            return True
        elif fast is None:
            return False

result: okay

# 7.4 test for overlapping lists - lists are cycle free

Solution
- one list points to the other for sure if there is overlap
- you want to count from the end, and check if there are duplicates.
- to do this, get the length of the lists and start from the common sections
    - so if the lists are length 4 and 5, list B skips 1 so both lists starts counting together.
    - if the lists converge, they'll now show up at the same loop.

def is_overlapping(l1, l2):
    length1 = getLength(l1)
    length2 = getLength(l2)
    if length1 > length2:
        iter = l1
        max = length1 - length2
    else:
        iter = l2
        max = length2 - length1
    count = 0
    while count < max:
        iter = iter.next
        count += 1
    
    if length1 > length2:
        iter1 = iter
        iter2 = l2
    else:
        iter1 = l1
        iter2 = iter
    
    while iter1 != None:
        if iter1 is iter2:
            return True
        iter1 = iter1.next
        iter2 = iter2.next
    return False

def getLength(l):
    length = 0
    iter = l
    while iter != None:
        iter = iter.next
        length += 1
    return length

# 7.7 remove the kth last element from a list

Solution

def remove_element(list, k):
    iter = list
    count = 0
    while count < k-1:
        iter = iter.next
    prev = iter
    next = iter.next

    prev.next = next
    del iter

result: i remember this one.

# 7.10 implement even-odd merge
- rearrange the list so that even nodes go first, followed by odd.
- keep the order they came in.
- first node stays unchanged.

Solution
- un-merging a list.
- use two new pointers, one of even and one for odd.
- assign nodes to the two lists as they come.
- merge them together at the end.

def even_odd_merge(list):
    even_start = None
    even = None
    odd_start = None
    odd = None
    iter = list.next
    count = 1
    while iter is not None:
        if count % 2 == 0:
            l = even
        else:
            l = odd
        
        if l is None:
            l = iter
            if count % 2 == 0:
                even_start = iter
            else:
                odd_start = iter
        else:
            l.next = iter
            if count % 2 == 0:
                even = iter
            else:
                odd = iter

        count += 1
        iter = iter.next
    list.next = even_start
    even.next = odd
    return list

- should have used a nicer solution instead of a boolean - use a bit flag, so you can use a two size array to store the even and odd lists.
Result: okay, could be better

# 7.11 test whether a singly linked list is palindromic

Solution
- reverse the second half, compare it to the first half

def is_palindrome(list):
    # find midpoint
    slow = fast = list
    while fast and fast.next:
        slow = slow.next
        fast = fast.next
        fast = fast.next
    first_half = list
    second_half = reverse_linked_list(slow)
    while second_half and first_half:
        if second_half.value != first_half.value:
            return False
        first_half = first_half.next
        second_half = second_half.next
    return True

result: okay, simple knowing there's no secret super solution.

# Stacks & Queues: 8.1 8.6 8.2,8.7 8.3,8.8 8.4

# 8.1 implement a stack with max API
- create a max function for the stack, which returns the max value stored in the stack.

Solution
- I actually remember this one
- store the max-seen-so-far with the value.
- then return max() = stack.peek().max

class max_stack:
    stack = []

    def add(self, value):
        curr_max = value
        if len(stack) > 0:
            curr_max = self.max()
        max_value = max(curr_max, max)
        stack.append([value, max_value])
    
    def pop(self):
        node = stack.pop()
        return node[0]
    
    def max(self):
        return stack.peek()[1]

result: okay? it gets very complex very quickly
    - you can optimize it a bit more by storing the max values and connecting them to the stack somehow


# 8.6 Compute binary tree nodes in order of increasing depth
- return a list of nodes from a binary tree based on depth.
- basically, do breadth first search

Solution
- do breadth first search
- store results in groups

def depth_based_nodelists(tree):
    result = []
    queue = [(tree, 0)]
    while queue:
        v = queue[0]
        node = v[0]
        depth = v[1]
        
        if not result[depth]:
            result[depth] = []
        result[depth].append(node)
            
        if node.right:
            queue.append((node.right, depth+1))
        if node.left:
            queue.append((node.left, depth+1))

        del queue[0]
    return result

result: okay, not really getting the python shortcuts the book suggests in the solution.


# 8.2 evaluate RPN expressions
- reverse polish notation: # # op

solution
- there's no brackets to deal with
- left to right operation order is OKAY
- use a stack to track the partial results

def eval_RPN(e):
    operators = ['+', '-', '*', '/']

    stack = []
    delimiter = ','
    expr = e.split(',') 
    for i in range(0, len(expr)):
        v = expr[i]
        if v in operators:
            v1 = stack.pop()
            v2 = stack.pop()
            vR = operate(v, v1, v2)
            stack.push(vR)
        else:
            stack.push(v)
    return stack[-1]

def operate(v, v1, v2):
    if v == '+':
        return int(v1) + int(v2)
    if v == '-':
        return int(v1) - int(v2)
    if v == '*':
        return int(v1) * int(v2)
    if v == '/':
        return int(v1) / int(v2)

result: okay, though a bit tricky.
    - I want to know how to solve it with prefix, and with brackets.
    - and without delimiters.


# 8.7 create a circular queue

Solution
- track the head and tail
- dequeue from the front = move the head
- queue = fix the array if it reaches max_size
    - otherwise add in a circular fashion

class circular_queue:
    scale_factor = 2

    def __init__(self, capacity):
        self.arr = [None] * capacity
        self.head = self.tail = self.length = 0
    
    def enqueue(self, x):
        if self.length == len(self.arr):
            self.arr = self.arr[self.head:] + self.arr[:self.head]
            self.head = 0
            self.tail = self.length
            self.arr += [None] * (len(self.arr) * scale_factor - len(self.arr))

        self.arr[self.tail] = x
        self.length += 1
        self.tail = (self.tail + 1) % len(self.arr)
        return x
    
    def dequeue(self):
        if self.length == 0:
            return None
        node = self.arr[self.head]
        self.length -= 1
        self.head = (self.head + 1) % len(self.arr)
        return node

result: not good, pretty tricky. saw solution.

# 8.3 Test a string over "{ } ( ) [ ]" for well formedness
- check if string with brackets are in the right order.
- as in, the closing brackets should match the order they came in.

Solution
- use a stack to track what opening brackets are inserted
- pop them with the right match
- if brackets don't match, return False
- use an array lookup to do matching faster

def wellFormedness(str):
    stack = []
    match = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for c in str:
        if c in match:
            if stack[-1] == match[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)
    return True

result: okay, I remember this one.

# 8.8 implement queue using stacks

Solution
- I sort of remember this one
- you use two stacks.
- enqueue: add to s1
- dequeue: move s1 items to s2, reversing their order so you can pop them easily.
- if i remember correctly, you can do the enqueue/dequeue logic in reverse; it just depends which one is called more.
- either way, the amortized operation cost of moving s1 -> s2 or s1 <- s2 is O(1).

class queue:

    def __init__(self):
        self.s1 = []
        self.s2 = []

    def enqueue(self, x):
        self.s1.append(x)
    
    def dequeue(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2.pop()

result: I sort of remember the solution, but the book's answer is pretty nice.


# 8.4 normalize pathnames
- given a filepath, return the shortest equivalent pathname.
- drop all the relative pathing and directory switching.

Solution
- treat filepath as a stack
- return final set as shortest path

def normalizePathname(path):
    folders = path.split('/')
    stack = []
    for folder in folders:
        if folder == '.':
            pass
        elif folder == '..':
            stack.pop()
        else:
            stack.append(folder)
    return '/'.join(stack)

result: okay, some edge special cases like / alone, or starting with // is strange and not treated.
    - missing edge cases.

# Binary Tree - 9.1 9.4 9.2,9.12 9.11 9.13,9.16

# 9.1 Test if a binary tree is height-balanced
- if for each node in the tree, the difference in the height of its left and right subtrees is at most one.

Solution
- tree doesn't have to be perfect or complete for this to be true
- since each node depends on height(left) and height(right), it requires a lot of backtracking.
- best to track the height of each node and bubble back up to the root.
- remember that we need to know left and right subtree heights to calculate the current node, so do a postorder tree traversal.

Recursive:
def isHeightBalanced(tree):
    def check(tree):
        if not tree:
            return (True, -1)
        
        left_result = check(tree)
        if not left_result[0]:
            return (False, 0)
        
        right_result = check(tree)
        if not right_result[0]:
            return (False, 0)

        is_balanced = abs(left_result[1] - right_result[1]) <= 1
        height = max(left_result[0], right_result[0]) + 1
        return (is_balanced, height)
    return check(tree)[0]

Iterative:
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        stack = [(root, True)]
        table = {
            None: {
                "result": True,
                "height": -1
            }
        }
        while stack:
            set = stack.pop()
            node = set[0]
            is_seen = set[1]

            if not node:
                pass
            elif is_seen:
                stack.append((node, False))
                if node.left:
                    stack.append((node.left, True))
                if node.right:
                    stack.append((node.right, True))
            else:
                if node.left:
                    left_height = table[node.left]["height"]
                else:
                    left_height = table[None]["height"]
                
                if node.right:
                    right_height = table[node.right]["height"]
                else:
                    right_height = table[None]["height"]

                is_balanced = abs(left_height - right_height) <= 1
                height = max(left_height, right_height) + 1
                table[node] = {
                    "result": is_balanced,
                    "height": height
                }
        return table[root].result

https://leetcode.com/problems/balanced-binary-tree/discuss/341882/Python-beats-98.66-with-iteration
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        # DFS, postorder
        # Iterative
        height_dict = {None:0}
        stack = [root]
        while stack:
            cur = stack.pop()
            if cur:
                if cur.left in height_dict and cur.right in height_dict:
                    lH = height_dict[cur.left]
                    rH = height_dict[cur.right]
                    if abs(lH - rH) > 1:
                        return False
                    else:
                        height_dict[cur] = max(lH, rH) + 1
                else:
                    stack.append(cur)
                    stack.append(cur.right)
                    stack.append(cur.left)
        return True


result: bad; saw solution

# 9.4 compute the LCA when nodes have parent pointers
- given two nodes in a binary tree, design a function that computes their LCA. assume that each node has a parent pointer.
- LCA = Lowest Common Ancestor == earliest common parent node

Solution
- one node goes up until root, storing each parent node in a hash table.
- second node then goes up until it hits a match. return that match.
- O(height)

def LCA(n1, n2):
    table = []
    iter = n1
    while iter != None:
        table.append(iter)
        iter = iter.parent
    iter = n2
    while iter != None:
        if iter in table:
            return iter
        else:
            iter = iter.parent
    return None # should never be hit if both nodes are part of same binary tree

result: okay # 5

# 9.2 Test if binary tree is symmetric
- draw a vertical line through the root; left and right subtrees should mirror each other
- sort of like a palindrome but with a tree structure

Solution
- a psuedo merge sort or comparison of two linked lists
- left and right iterate one node at a time in the same order (flipped additions though)
- doing a Breadth first search, compare left & right

def isSymmetric(tree):
    if not tree:
        return True
    if not tree.left and not tree.right:
        return True
    if not tree.left or not tree.right:
        return False
    leftStack = [tree.left]
    rightStack = [tree.right]
    while leftStack or rightStack:
        leftNode = leftStack.pop()
        rightNode = rightStack.pop()
        if not leftNode and not rightNode:
            pass
        elif (not leftNode and rightNode) or (leftNode and not rightNode):
            return False
        elif not leftNode.value == rightNode.value:
            return False
        else:
            # make sure order is consistent
            leftStack.append(leftNode.right)
            rightStack.append(rightNode.left)
            leftStack.append(leftNode.left)
            rightStack.append(rightNode.right)
    return True

result: okay 8 min

# 9.12 reconstruct a binary tree from traversal data
- given an inorder traversal & preorder traversal sequence, generate a binary tree from them.
- inorder = left, node, right
- preorder = node, left, right

Solution
- preorder gives you the root first
    - thus, all nodes before root in inorder are left of the root
    - and all nodes after root in inorder are right of the root
- next preorder gives you the left subtree root
    - again, split it to left and right
- really, this is like quick sort
    - pivot order = preorder traversal
    - partition = inorder sequence
- constructing the binary tree is a bit tricky though...

Recursive attempt (easier to think about)
def reconstruct(inorder, preorder):
    root_value = preorder[0]
    
    def createTree(inorder, preorder):
        try:
            root_index = inorder.index(root_value)
        except:
            # it's a leaf
            root_index = -1
            left_subtree = None
            right_subtree = None

        if root_index < 0:
            left_inorder = inorder[:root_index]
            left_root = preorder[1]
            left_root_index = preorder.index(left_root)
            left_preorder = preorder[left_root_index:left_root_index+len(left_inorder)]
            left_subtree = createTree(left_inorder, left_preorder)

            right_inorder = inorder[root_index:]
            right_root = preorder[1+len(left_inorder)] # root+left subtree
            right_root_index = preorder.index(right_root)
            right_preorder = preorder[right_root_index:]
            right_subtree = createTree(right_inorder, right_preorder)

        root_node = Node(root_value)
        root_node.left = left_subtree
        root_node.right = right_subtree
        return root_node
    
    return createTree(inorder, preorder)

result: not done, missing leaf case, 30 min

# 9.11 implement an inorder traversal with O(1) space
- write a nonrecursive inorder traversal of a binary tree.
- still uses O(h) space to compute.
- assume nodes have a parent pointer field.
- non-recursive = use a stack
- inorder traversal == left, node, right
- compute the inorder traversal of a binary tree. Return a list with the inorder node sequenece.

Solution
- we still want O(n) time, but want O(h) or O(1) space usage.
- if we know if the subtree complete was the left subtree, we know to do the node next.
- if we know it's the right subtree, then the node is complete.
- so replace the stack with checking against the parent:
on node:
    skip to left subtree()
    do node()
    skip to right subtree()
    go to parent node()
- so it's a linear path based on checking node context by comparing parent.left and parent.right with current node.

def inorder_inplace(tree):
    prev = None # assume tree.parent = None (because root has no parent)
    result = []
    next = None
    curr = tree
    while curr:
        if prev == curr.parent:
            # we came down to curr from parent
            if curr.left:
                next = curr.left
            else:
                # no left subtree, skip to node & right side or bubble back up immediately
                result.append(curr)
                next = curr.right or curr.parent
        elif curr.left is prev:
            # we returned to curr from left subtree
            # done with left, do node & right side or buble up immediately
            result.append(curr)
            next = curr.right or curr.parent
        else:
            # not from parent or left node
            # so we came from right subtree
            # so we done; return up to parent
            next = curr.parent
        prev = curr
        curr = next
    return result

result: bad; didn't really understand, read solution.

# 9.13 reconstruct a binary tree from preorder traversal with markers
- preorder traversal list but the empty leafs are marked with "null"
- recreate the binary tree given this list.

Solution
- we know the height of the tree: log2(len(list)+1)
- remember preorder: node, left, right
- len = len(list)-1
    - arr[0] = root
    - arr[1:1+len/2] = left subtree
    - arr[1+len/2:] = right subtree
- we could also just initialize a complete binary tree and walk through it...


# 9.16 Compute the right sibling tree
- given a perfect binary tree
- create a new variable for all nodes called "rightSibling"
- rightSibling returns the right sibling of the node.

Solution
- I want to group the same depth nodes together and chain them with the rightSibling variables.
- This would mean breadth first search.
- But modified to be in depth batches.
- Since I know the number of nodes = 2^(depth) (depth is zero based), you could mark when a depth is done in the BFS queue.

def rightSibling(root):
    queue = [root]
    next_queue = []
    depth = 0
    i = 0
    while queue:
        while len(queue) > 0 and i < len(queue):
            node = queue[i]
            if i > 0:
                queue[i-1].rightSibling = queue[i]
            if node.left:
                next_queue.append(node.left)
            if node.right:
                next_queue.append(node.right)
            i += 1
        del queue
        queue = nextQueue
    return root

result: okay
- made a solution that works without being a perfect binary tree.
- O(n) time, O(2*2^depth) extra space
- there is a solution in O(n) time and no extra space...
    - think recursively...


# heaps - 10.1 10.4 10.3 10.5 10.6

# 10.1 merge sorted files
- given S&P500 company stock value files
- each file stores trade info in the format:
    - "L232LLL, AAPL, 30, 456. 12"
    - time_in_ms, stock symbol, number of shares, price
    - trades are sorted by time increasing order
- create a new file combining all the stock files into a big stock file.

Solution
- don't we just do a merge sort?
- we could make it faster by using a heap?
- so insert the first element of all 500 files - so a 500 size heap
- pop the minimum element, noting which file it was from
- insert the second element from the file that the minimum element came from
- repeat for all elements in all files

import heapq
def mergeSortedFiles(files):
    heap = []
    file_index = [0] * len(files)
    for i in range(0, len(files)):
        heap.append((files[i][file_index[i]], i))
        file_number[i] += 1
    
    result = []
    while heap:
        set = heapq.heappop(heap)
        min_trade = set[0]
        file_number = set[1]
        result.append(min_trade)

        if file_number[file_number] < len(files[file_number])-1:
            file_number[file_number] += 1
            heap.append((files[file_number][file_index[file_number]]))
    return result

result: good, I got the book's solution!
    - could use iterators so i don't have to track the file_indexes

# 10.4 compute the K closest stars
- given a coordinate system for the milky way where Earth is at 0,0,0.
- stars are also points, distances are in light years. There are 10^12 stars, stored in a file.
- compute the k stars closest to earth.

Solution
- run all the stars through a heap of size k, return the sorted heap.
    - you could even just do a sorted heap of the entire file.
- use a max-heap because we want to drop stars that are too far
    - if the new star < max star, drop the max star!

import heapq
def closestKStars(stars, k):
    heap = []
    for i in range(0, len(stars)):
        star = stars[i]
        distance = math.sqrt((star.x ** 2) + (star.y ** 2) + (star.z ** 2))
        
        heapq.heappush(heap, (distance, star))
        if(len(heap) > k):
            heapq.heappop(heap)

    return [s[1] for s in heapq.nlargest(k, heap)]

# 10.3 sort almost-sorted array
- data is almost-sorted, we want to finish the sort efficiently.
- input = long sequence of numbers, each number is at most k away from it's correctly sorted position.

Solution
- given k, you know that the number is within k positions from it's ideal position.
- so if you store a min-heap of k+1 elements, every pop will be the min element.

import heapq
def sortAlmostArray(arr, k):
    result = []
    heap = []
    for x in arr:
        heapq.heappush(x)
        if len(heap) > k:
            result.append(heapq.heappop(heap))
    while heap:
        smallest = heapq.heappop(heap)
        result.append(smallest)
    return result

# 10.5 compute the median of online data
- compute the running median of a sequence of numbers.
- so as you read each element, put that into the array and check the median.

Solution
- the median is odd = A[floor(n/2)] or even = (A[n/2] - A[n/2 - 1] )/2
- we don't want to sort it if possible; you just need the nsmallest and get the one/two largest values from that and use it to compute the median.
- use a min-heap!

import heapq
def rollingMedian(arr):
    result = []
    heap = []
    for x in arr:
        heapq.heappush(heap, x)
        median = getMedian(heap)
        result.append(median)
    return result

def getMedian(heap):
    n = len(heap)
    if n % 2 == 0:
        # even
        subset = heapq.nsmallest(n/2 + 1, heap)
        left = subset[-2]
        right = subset[-1]
        return left + (right - left)/2
    else:
        # odd
        return heapq.nsmallest(math.floor(n/2), heap)[-1]
- book suggests using a min and max heap:
    - max heap for smaller half of heap and min-heap for larger half (?)

# 10.6 Compute the k largest elements in a max-heap
- given a heap, which is represented as an array A, design an algorithm that returns the k largest elements.
- don't modify the heap (so no heap push/pop operations.)

Solution
- you could do heappop() k times, but that is O(klogn). And modifies the array.
- heap property: children are always smaller than the parent.
- create another max-heap that you can quickly use to compute the next max value.
- logic:
    1. insert(all children/root) into max-heap
    2. max-heap.pop and insert into result.
    3. repeat 1.
        - end if result.length >= k.

import heapq
def getKLargest(maxA, k):
    result = []
    heap = []
    queue = [0]
    depthCount = 1
    while queue:
        newDepthCount = 0
        while depthCount > 0:
            i = queue.pop()
            node = maxA[i]
            heapq.heappush(heap, node)

            leftI = i*2 + 1
            rightI = i*2 + 2
            if leftI < len(maxA):
                queue.append(leftI)
                newDepthCount += 1
            if rightI < len(maxA):
                queue.append(rightI)
                newDepthCount += 1
            depthCount -= 1
        maxNode = heapq.heappop(heap)
        result.append(maxNode)
        depthCount = newDepthCount
    while len(result) < k:
        maxNode = heapq.heappop(heap)
        result.append(maxNode)
    return result

- looks okay I think, should work
- I'm doing breadth first search and pulling the max out every depth
- and the remaining gets added at the end
- could be faster maybe if you extract more?
    - you could pop every node in the first two layers
    - you can't guarantee node > max only one depth down
    - you can two depths down I think.

# Searching: 11.1 11.4,11.8 11.3,11,.9 11.5,11.10 11.6,11.7
- binary search
    - recursive
    - iterative
        def bsearch(t, A):
            L, U = 0, len(A) - 1
            while L <= U:
                M = L + (U - L)/2 # not that this will return an integer, so floor is not required.
                if A[M] < t:
                    L = M + 1
                elif A[M] == t:
                    return M
                else:
                    U = M - 1
            return -1
    - other kinds of impl based on use case
- use bisect
    - bisect.bisect_left(a, x) = return index i so that a[:i] is all smaller than x
    - bisect.bisect_right(a, x) = right index i so that a[i:] is all larger than x
    - this lets you quickly do binary search on arbitrary arrays.

# 11.1 Search a sorted array for first occurrence of k
Solution
- you can just use bisect_left...
import bisect
def firstOccurrence(A, k):
    return bisect.bisect_left(A, k)

- if you want to get fancy and implement it, you'll need to create a binary search.
- you can do a binary search and return the left most result?

def firstOccurrence(A, k):
    lo = 0
    hi = len(A) - 1
    while lo < hi:
        mid = lo + (hi - lo)/2
        if A[mid] < k:
            hi = mid - 1
        elif A[mid] == k:
            result = mid
            break
        else:
            lo = mid + 1
    r = A[mid]
    while r == k && mid > 0:
        mid -= 1
        r = A[mid]
    mid += 1
    return mid

- can be optimized, so that you search for exactly the result

def firstOccurrence(A, k):
    lo = 0
    hi = len(A) - 1
    result = -1
    while lo < hi:
        mid = lo + (hi - lo)/2
        if A[mid] < k:
            hi = mid - 1
        elif A[mid] == k:
            result = mid
            right = mid - 1
        else:
            lo = mid + 1
    return result

# 11.4 Compute the Integer Square Root
- given +integer x, return largest integer i where i^2 <= x
- x = 16, return 4
- x = 300, return 17 (289)

Solution
- given x, take the square root and floor it. That should be the result.

def intSquareRoot(k):
    return math.floor(math.sqrt(k))

- since we're doing binary search though, we can do it with binary search:

def inSquareRoot(k):
    lo = 0
    hi = k
    while lo < hi:
        mid = lo + (hi - lo)/2
        pow = mid * mid
        if pow <= k:
            lo = mid + 1
        else:
            hi = mid - 1
    return lo + 1

- need to mull over the solution, this is where having a test runner would be very helpful...

# 11.8 Find the kth largest element in a distinct array
Solution
- sort and get is possible , but slow O(nlogn)
- use a pivot and partition by less than / greater than.
- if there are (n = k - 1) elements > pivot, kth element = pivot
- if there are (n > k - 1) elements > pivot, do another pass:
    - drop the small elements
- if there are (n < k - 1) elements > pivot, do another pass:
    - drop the larger elements, k - len(dropped elements)

def partition(A, pivot):
    pass

def kthLargestElement(A, k):
    pivot = random.randint(0, len(A))
    lo = 0
    hi = len(A) - 1
    n = len(A)

    while True:
        pivotPos = partition(A, pivot)
        if (n-pivotPos) > k - 1:
            lo = pivotPos + 1
        elif (n-pivotPos) == k - 1:
            return pivot
        else:
            n -= (n-pivotPos)
            hi = pivotPos - 1
    return -1

# 11.3 Search a cyclically sorted array
- array is cyclically sorted if you can shift it so that it becomes sorted.
- design an O(logn) algorithm to find the position of the small element in the array.

Solution
- we want to find the smallest.
- you can do a binary search for it:
    - get the mid. 

mid = (9+0)//2 = 4

7 8 9 0 1 2 3 4 5 6 
0 1 2 3 4 5 6 7 8 9
        ^          
! 1 > 6 => [0, 4]

7 8 9 0 1
0 1 2 3 4 5 6 7 8 9
    ^

  9 > 1 => [2+1, 5]

      0 1
0 1 2 3 4 5 6 7 8 9
        ^

  1 == 1 => 4

- hard to wrap my head around the solution...

def search_smallest(A):
    lo = 0
    hi = len(A) - 1
    while lo < hi:
        mid = lo + (hi-lo)//2
        if A[mid] > A[right]:
            left = mid + 1
        else:
            right = mid
    return lo

# 11.9 Find the missing IP address


# 11.5
# 11.10
# 11.6
# 11.7





11.1 11.4,11.8 11.3,11,.9 11.5,11.10 11.6,11.7
12.2 12.3,12.5 12.1,12.5 12.4,12.6 12.9
13.1 13.2 13.5 13.7, 13.10 13.8
14.1 14.2, 14.3 14.4 14.5,14.8 14.7
15.1 15.2 15.3 15.4 15.9 15.6 15.10
16.1 15.2 16.3 16.6 16.5 16.7 16.12
17.4 17.6 17.5 17.7 17.8
18.1 18.7 18.2 18.3 18.5
19.3 19.6 19.8 19.9 20.9
20.13 20.15 20.16 20.1 20.2