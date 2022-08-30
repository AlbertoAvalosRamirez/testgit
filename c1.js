class Product{
  constructor(value,nombre,precio,cantidad){
    this.value  =  value;
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.left  = null;
    this.right =  null;
  }

}
class BST {
   constructor(value){
    this.root =  new Product(value);
    this.count = 0;

   }
   size(){
    return this.count;
   }
   add(value){
      let newNode =  new Product(value);
      const searchTree =  node => {
      //if value < node.value, go left
      if(value<node.value){
        if(!node.left) { 
          node.left =  newNode ;
        }
        //if left child, look left again 
        else{
          searchTree(node.left);
        }
      }else if( value > node.value ){
        //if no right child append new node
        if(!node.right){
          node.right = newNode;
        }else{
          searchTree(node.right)
        }
      }
      //iff value > node.value, go right
        
     }
     searchTree(this.root);
   }
   inOrder(){
   //L,R,R
    let result =  [];
    const traverse =  node =>{
    //if left child exist , go left again
      if(node.left) traverse(node.left)
      //capture root node value
      result.push(node.value);
      if(node.right)traverse (node.right)

   }
   traverse(this.root);
   return result;
  
   }
   preOrder(){//root,left,right
      let result = [];
      const traverse  = node =>{
        //push node value first
        result.push(node.value);
        //if left child exist, then go left again
        if(node.left) traverse(node.left)
        //if right child exist, go right again 
        if(node.right) traverse(node.right)
      }



      traverse(this.root);

      return result;
   }
   postOrder(){
    let result = [];
    const traverse  = node =>{

      //if left child exist, then go left again
      if(node.left) traverse(node.left)
      //if right child exist, go right again 
      if(node.right) traverse(node.right)
      //push node value first
      result.push(node.value);
    }




    traverse(this.root);
    return result;
 }

   }
