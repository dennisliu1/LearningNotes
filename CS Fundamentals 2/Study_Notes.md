# Arrays
- What is an array?
    - collection of items stored at contiguous memory locations.
    - fixed width.
    - position is counted from the first element of the array.
- Rotations
    - Right Rotation
        - https://www.geeksforgeeks.org/array-rotation/
        - that's the naive method
            - imagine shifting all the elements by 1, then looping back for any elements moved off the array on the right.
            - imagine doing that x times.
            - The end result is the first element is at index x, second element is n+1, etc.
            - so arr[i] => arr[i+x]
            - so arr[i+1] => arr[i+1+x]
            - O(n*x): shifting once takes O(n), need to do it x times 
        - but wait; there's more! (juggling method)
            - arr[i] => arr[i+n], arr[i+n] => arr[i+n+?]
            - ? = GCD of the jump and the length of the array
            - this way, each swap chains in a cycle that leads back to the original element
            - you do groups of these chains and you're done.
            - numChains = GCD(n, x)
            - so starting from index 0..numChains: doChains
            - nextNum = (curr + x) % len(arr)
            - O(n) time, O(1) space (swap temp variable)
        - cheapo way
            - just splice the array:
            - d = d % len(arr) # keep shift within array length bounds
            - left = arr[:-d]
            - right = arr[-d:]
            - arr = right + left
        - Solution
            import math

            def rotateRight(arr, d):
                n = len(arr)
                loops = math.gcd(n, d)
                
                for i in range(0, loops):
                    iter = i
                    next = (iter + d) % n
                    temp = arr[iter]
                    while next != i:
                        temp2 = arr[next]
                        arr[next] = temp
                        temp = temp2

                        iter = next
                        next = (next + d) % n
                    arr[i] = temp
                return arr
    - 
