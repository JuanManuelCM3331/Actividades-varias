//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// esto es simplemente la declaracion de variables y el formato de moneda
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('productForm');
  var nameInput = document.getElementById('name');
  var priceInput = document.getElementById('price');
  var tableBody = document.getElementById('productsTable');
  var totalEl = document.getElementById('total');
  var clearBtn = document.getElementById('clearBtn');
  var msg = document.getElementById('msg');

  var products = JSON.parse(localStorage.getItem('products') || '[]');

  function save() {
    localStorage.setItem('products', JSON.stringify(products));
  }

  function formatMoney(n) {
    return '$' + Number(n).toFixed(2);
  }
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// Este bloque crea los renders de la tabla, que muestra los produtos agregados y el total. A demas de las confirmaciones y mensajes de error.
  function render() {
    tableBody.innerHTML = '';
    var total = 0;
    for (var i = 0; i < products.length; i++) {
      var p = products[i];
      var tr = document.createElement('tr');
      tr.className = 'hover:bg-gray-50';
      tr.innerHTML =
        '<td class="px-4 py-2 text-center border-r-2 border-black">' + (i + 1) + '</td>' +
        '<td class="px-4 py-2 text-center border-r-2 border-black">' + p.name + '</td>' +
        '<td class="px-4 py-2 text-center border-r-2 border-black">' + formatMoney(p.price) + '</td>' +
        '<td class="px-4 py-2 text-center">' +
          '<button class="deleteBtn bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm" data-id="' + p.id + '">Eliminar</button>' +
        '</td>';
      tableBody.appendChild(tr);
      total += Number(p.price);
    }
    totalEl.textContent = formatMoney(total);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = nameInput.value.trim();
    var price = parseFloat(priceInput.value);
    if (!name || isNaN(price) || price < 0) {
      msg.textContent = 'Nombre o precio inválido';
      msg.style.color = 'red';
      return;
    }
    var product = { id: Date.now().toString(), name: name, price: Math.round(price * 100) / 100 };
    products.push(product);
    save();
    render();
    form.reset();
    msg.textContent = 'Producto agregado';
    msg.style.color = 'green';
    setTimeout(function () { msg.textContent = ''; }, 2000);
  });
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// este otro bloque
  tableBody.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('deleteBtn')) {
      var id = e.target.getAttribute('data-id');
      products = products.filter(function (p) { return p.id !== id; });
      save();
      render();
      msg.textContent = 'Producto eliminado';
      msg.style.color = 'green';
      setTimeout(function () { msg.textContent = ''; }, 2000);
    }
  });
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// Este bloque de codigo hace funionar al boton de limpiar lista, que elimina todos los elementos incluidos con el boton de "agregar" 

  clearBtn.addEventListener('click', function () {
    if (!confirm('¿Borrar todos los productos?')) return;
    products = [];
    save();
    render();
    msg.textContent = 'Lista vaciada';
    msg.style.color = 'green';
    setTimeout(function () { msg.textContent = ''; }, 2000);
  });

  render();
});
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}