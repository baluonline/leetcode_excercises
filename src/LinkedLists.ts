
//  * Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
    let slow = head
    console.log(head)
    let fast = head?.next?.next
    if (!head?.next) return null
    while (fast?.next) {
        slow = slow?.next
        fast = fast?.next?.next
    }
    slow.next = slow?.next?.next
    return head;
};

function oddEvenList(head: ListNode | null): ListNode | null {
    
    if(!head || !head.next) return head
    let odd=head
    let even= odd.next
    let evenHead= even

    while(even && even.next){
        odd.next= even.next
        odd=odd.next
        even.next = odd.next
        even=even.next
    }
    odd.next=evenHead
    return head
};