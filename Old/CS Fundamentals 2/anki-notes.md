
# Python
## Basics

# Arrays
## Summary
- What is an array?
    - A collection of items stored at contiguous memory locations.
    - fixed length, indexed from 0 using an offset.
    - used to store a collection of data.
- Operations of an array? In Python?
    - Python has Vector arrays instead of fixed width arrays.
    - from array
    - arr = array.array(typecode, [initializer])
    - arr.append(x) = add x to end of arr
    - arr.count(x) = get # occurence of x
    - arr.extend(iterable) = concat the iterable at the end of the array.
    - arr.index(x) = get first occurence of x.
    - arr.insert(i, x) = insert x at index i.
    - arr.pop([i]) = remove & return item at index i, or last item.
    - arr.remove(x) = remove first occurence of x.
    - arr.reverse() = reverse the array.
    - arr.tolist() = convert the array into a list.
    - len(arr) = length of array.
    - arr[i:j] = get the subset array (i, j)
    - arr[:j] = subset (0, j)
    - arr[-i] = count from end of array
- Linked List vs Array
- Vector vs Array
## Array Rotations
### Rotate once
- 189 https://leetcode.com/problems/rotate-array/

### Rotate block swap
### Reverse rotate (undo)
### search within sorted, rotated array
- 33.med https://leetcode.com/problems/search-in-rotated-sorted-array/
- 81.med https://leetcode.com/problems/search-in-rotated-sorted-array-ii/ (with duplicates)

### rotation count
### maximum hamming distance
### array operations on rotated array (get, delete, set)
## Arrangement Rearrangement (??)
## Order Statistics
## Range Queries
## Search
## Sort
## Matrix
## Problems