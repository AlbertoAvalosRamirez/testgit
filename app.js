const BtnAdd = document.getElementById('add');
        BtnAdd.addEventListener('click', () => {
            let codigo = Number(document.getElementById('code').value);
            let nombre = document.getElementById('name').value;
            let precio = document.getElementById('price').value;
            let cantidad = document.getElementById('cant').value;

            let nuevo = new Producto(codigo, nombre, cantidad, precio);
            arbol.agregar(nuevo);
            console.log(arbol);
            let detalles = document.getElementById('detalles');
            detalles.innerHTML += '<p>Se agrego el producto ' + codigo + '</p>';

            document.getElementById('code').value = '';
            document.getElementById('cant').value = '';
            document.getElementById('price').value = '';
            document.getElementById('nombre').value = '';

        });
        const BtnListInOrder = document.getElementById('inOrder');
        BtnListInOrder.addEventListener('click', () => {
            let detalles = document.getElementById('arbol');
            arbol.inOrder();
            detalles.innerHTML += arbol.inOrder();
        });
        const BtnListPreOrder = document.getElementById('preOrder');
        BtnListPreOrder.addEventListener('click', () => {
            let detalles = document.getElementById('arbol');
            arbol.PreOrder();
            detalles.innerHTML += arbol.PreOrder() + '<br>';
        });
        const BtnListPosOrder = document.getElementById('postOrder');
        BtnListPosOrder.addEventListener('click', () => {
            let detalles = document.getElementById('arbol');
            arbol.PosOrder();
            detalles.innerHTML += arbol.PosOrder() + '<br>';
        });
