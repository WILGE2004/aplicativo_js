const valor_compra = document.formulario.v_compra;
const porcentaje_utilidad = document.formulario.p_utilidad;
const porcentaje_impuesto = document.formulario.p_impuestos;
const valor_venta = document.formulario.v_venta;
const ganancia = document.formulario.ganancia;

function calculate() {
  const compra = parseInt(valor_compra.value);
  const utilidad = parseInt(porcentaje_utilidad.value);
  const impuesto = parseInt(porcentaje_impuesto.value);

  const valor_utilidad = (compra * utilidad) / 100;
  const valor_impuestos = (compra * impuesto) / 100;

  const total_venta = valor_utilidad + valor_impuestos + compra;
  const ganancia_venta = total_venta - compra - valor_impuestos;

  valor_venta.value = total_venta;
  ganancia.value = ganancia_venta;
}

function delete_info() {
  valor_compra.value = 0;
  porcentaje_utilidad.value = 0;
  porcentaje_impuesto.value = 0;
  valor_venta.value = 0;
  ganancia.value = 0;
}
