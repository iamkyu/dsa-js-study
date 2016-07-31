class Node {
    constructor(data, left, right)  {
        this._data  = data;
        this._left = left;
        this._right = right;
    }

    set data(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    set left(data) {
        this._left = data;
    }

    get left() {
        return this._left;
    }

    set right(data) {
        this._right = data;
    }

    get right() {
        return this._right;
    }

    show(){
        return this.data;
    }
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    get root() {
        return this._root;
    }

    set root(node) {
        this._root = node;
    }

    insert(data) {
        let node = new Node(data, null, null);

        if (this.root == null) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (data < current.data) {
                    if (current.left == null) {
                        current.left = node;
                        break;
                    }

                    current = current.left;
                } else {
                    if (current.right == null) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            } // end of while(true)
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node == null)
            return null;

        if (data == node.data) {
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.left;
            }
            let tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    getSmallest(node) {
        if (node.left == null) {
            return node;
        } else {
            return this.getSmallest(node.left);
        }
    }

    getMin() {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }

        return current.data;
    }

    getMax() {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }

        return current.data;
    }

    inOrder(node){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    getNodeCount(node) {
      if (node == null) 
        return 0;
    
      return this.getNodeCount(node.left) + this.getNodeCount(node.right) + 1;
    }

    getEdgeCount(node) {
        // n 개의 노드는 항상 n-1 개의 간선
        return this.getNodeCount(node)-1;
    }
}