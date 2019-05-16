Scenario 1 Scenario,2 Scenario 3 Scenario 4
Hackathon Finale cram Tenn proiect Algorithms claee
3 days 7 days I month 4 montlrs 
c0 c1 c2 c3 c4
4.1 4.7 4.8 4.3,4.11 4.9
5.1, 5.6 5.12,5.18 5.2,5.17 5.5,5.9 5.3,5.10, 5.15
6.1 6.2,5.4 6.5,6.6 6.7,6.8 6.9,6.1,1
7 .1 7 .2,7 .3 7 .4,7 .7 7 .10 7 .L1
8.1 8.6 8.2,8.7 8.3,8.8 8.4
9.t 9.4 9.2,9.12 9.11 9.13,9.16
10.1 10.4 10.3 10.5 10.6
11.1 1L.4,1.l.8 11.3,11,.9 11.5,11.10 11.6,71.7
12.2 12.3,72.5 12.1,72.5 12.4,12.6 12.9
13.1 13.2 13.5 13.7, 13.10 13.8
14.1 L4.2, t4.3 1.4.4 1.4.5,14.8 147
15.1 1.5.2 15.3 '1.5.4,15.9 15.6,15.10
1.6.L 15.2 L6.3,16.6 16.5,1.6.7 L6.12
t7.4 17.6 17.5 17.7 77.8
18.1 18.7 1.8.2 18.3 18.5
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
