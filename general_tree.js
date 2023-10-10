const randomID = (() => {
    function* randomIDGenerator() {
      let id = Date.now();
      
      while(true) {
        yield id++;
      }
    }
    
    const gen = randomIDGenerator();
    
    return () => gen.next().value;
  })()
  
  class Tree {
    #children = new Map();
    #parent = null;
    #id = randomID();
    #end = false;
    #name;
    
    constructor(name) {
      if(!name || typeof name !== 'string') {
        throw new Error('Name must be a non-empty String');
      }
      
      this.#name = name;
    }
  
    get name() {
      return this.#name;
    }
    
    set name(newName) {
      if(!newName || typeof newName !== 'string') {
        throw new Error('Cannot change name.Name must be a non-empty String');
      }
      
      this.#name = newName;
    }
  
    get end() {
      return this.#end;
    }
    
    setEnd(isEnd) {
      if(!isEnd || typeof isEnd !== 'boolean') {
        throw new Error('Cannot change end node');
      }
      
      this.#end = isEnd;
    }

    isEndNode() {
      return this.#end;
    }

    get identifier() {
      return this.#id;
    }
  
    get children() {
      return Array.from(this.#children.values());
    }


    get parentNode() {
      return this.#parent;
    }
  
    set parentNode(newParent) {
      if(newParent !== this.parentNode && (newParent === null || newParent instanceof Tree)) {
        if(this.#parent) {
           this.#parent.removeChildNode(this);
        }
        
        this.#parent = newParent;
        
        if(newParent) {
          newParent.appendChildNode(this);
        }
      }
    }
  
    get childrenCount() {
      return this.#children.size;
    }
  
    createChildNode(name) {
      const newNode = new Tree(name);
      this.#children.set(newNode.identifier, newNode);
      newNode.parentNode = this;
      
      return newNode;
    }
  
    hasChildNode(needle) {
      if(needle instanceof Tree) {
        return this.#children.has(needle.identifier);
      }
      
      for(let child of this.children) {
        if(child.name === needle || this.identifier === needle) {
          return true
        }
      }
      
      return false;
    }
  
    getChildNode(nameOrId) {
      for(let child of this.children) {
        if(child.name === nameOrId || this.identifier === nameOrId) {
          return child;
        }
      }
      
      return null;
    }
  
    appendChildNode(node) {
      if(!(node instanceof Tree) || this.hasChildNode(node)) return;
      
      if(node === this) throw new Error('Node cannot contain itself');
      
      let parent = this.parentNode;
      while(parent !== null) {
        if(parent === node) throw new Error('Node cannot contain one of its ancestors');
        parent = parent.parentNode;
      }
      
      this.#children.set(node.identifier, node);
      node.parentNode = this;
    }
    findNodeByID(id)  {
      let foundNode = null;
      
      this.traverse(node => {
        if(node.identifier === id) {
          foundNode = node;
          return true;
        }
      })
      return foundNode;
    }

    copy(needle) {
      
      needle.traverse(node => {
        let subnode = this.createChildNode(node.name);
        node.children.forEach((child) => {
          subnode.createChildNode(child.name); })

        })
    }

    removeChildNode(needle) {
      if(!this.hasChildNode(needle)) return;
      
      let removedNode;
      
      if(needle instanceof Tree) {
        this.#children.delete(needle.identifier);
        removedNode = needle;
      } else {
        for(let child of this.children) {
          if(child.name === needle || child.identifier === needle) {
            this.#children.delete(child.identifier);
            removedNode = child;
            break;
          }
        }
      }
      
      if(removedNode) {
        removedNode.parentNode = null;
      }
    }
  

    #getTreeString = (node, spaceCount = 0) => {
      let str = "\n";
    
      node.children.forEach((child) => {
        str += `${" ".repeat(spaceCount)}${child.name}${this.#getTreeString(child, spaceCount + 3 )}`
      })
  
      return str;
    }
  
    print() {
      console.log(`\n${this.name}${this.#getTreeString(this, 2)}`);
    }
    
    traverse(fn) {
      for(let child of this.children) {
        if(fn(child) === true || child.traverse(fn) === true) {
          return true;
        }
      }
    }
  
    findNodeByID(id)  {
      let foundNode = null;
      
      this.traverse(node => {
        if(node.identifier === id) {
          foundNode = node;
          return true;
        }
      })
      return foundNode;
    }

    toArray() {
      let start = [];
      
      start.push(this.name);
      this.traverse(node => {
        if (node.childrenCount !== 0) {
          start.push(node.name);
        }
      })
      return start;
    }

    findNodeByName(name) {
      let foundNode = null;
      
      this.traverse(node => {
        if(node.name === name) {
          foundNode = node;
          return true;
        }
      })
      
      return foundNode;
    }
  
    findAllNodesByName(name) {
      const children = [];
      
      this.traverse(node => {
        if(node.name === name ) {
          children.push(node);
        }
      })
      
      return children;
    }
  }
  