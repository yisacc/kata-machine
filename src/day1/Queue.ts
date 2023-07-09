type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            console.log(this.head, this.tail);
            return;
        }

        this.tail.next = node;
        this.tail = node;

    }
    deque(): T | undefined {
        if (!this.head) {
            this.tail = undefined;
            return undefined;
        }
        this.length = Math.max(0, this.length - 1);
        const head = this.head;
        this.head = this.head.next;
        

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
