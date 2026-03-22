## Class Diagram
![Order Book Class Diagram](../resources/Class%20DIagram.png)

## Data Structures & Time Complexity
1. buyList / sellList : map<price,vector>
> Insert order for new price: O(logn) <br>
> Insert order for existing price: O(1) <br>
> Remove an order: O(n) <br>
> Order Matching: O(n)

## How can it be made better
1. By replacing vector<order> to <b>Doubly linked List </b> we can reduce the cancel/remove time to O(1)
2. We definitely need an ordered map. Cannot use unordered map. 