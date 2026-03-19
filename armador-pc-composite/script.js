class Componente {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerPrecio() {
        return this.precio;
    }
}

class PC {
    constructor() {
        this.componentes = [];
    }

    agregar(componente) {
        this.componentes.push(componente);
    }

    obtenerTotal() {
        let total = 0;
        this.componentes.forEach(c => total += c.obtenerPrecio());
        return total;
    }
}

// 🔥 CALCULAR TOTAL
function calcularTotal() {
    let total = 0;

    total += parseInt(document.getElementById("tipo").value);
    total += parseInt(document.getElementById("cpu").value);
    total += parseInt(document.getElementById("gpu").value);
    total += parseInt(document.getElementById("ram").value);
    total += parseInt(document.getElementById("storage").value);

    document.getElementById("total").innerText = total;
}

// 🔥 COMPRAR Y GENERAR TICKET
function comprar() {
    let pc = new PC();
    let detalleHTML = "";

    let selects = ["tipo", "cpu", "gpu", "ram", "storage"];

    selects.forEach(id => {
        let select = document.getElementById(id);

        if (select.value != "0") {
            let nombre = select.options[select.selectedIndex].text;
            let precio = parseInt(select.value);

            pc.agregar(new Componente(nombre, precio));
            detalleHTML += `<p>${nombre} - $${precio}</p>`;
        }
    });

    let total = pc.obtenerTotal();

    document.getElementById("detalle").innerHTML = detalleHTML;
    document.getElementById("totalTicket").innerText = total;
    document.getElementById("fecha").innerText = "Fecha: " + new Date().toLocaleString();

    document.getElementById("ticket").classList.remove("oculto");
}