const label_1 = document.formulario.label_1;
const label_2 = document.formulario.label_2;
const select_1 = document.formulario.select_1;
const select_2 = document.formulario.select_2;

function convertir() {
  const firstLabel = parseInt(label_1.value);
  const firstSelect = select_1.value;
  const secondSelect = select_2.value;

  switch (firstSelect) {
    case "Byte":
      if (secondSelect === "Byte") {
        label_2.value = firstLabel;
      }
      if (secondSelect === "Kilobyte") {
        label_2.value = firstLabel / 1000;
      }
      if (secondSelect === "Megabyte") {
        label_2.value = firstLabel / 1_000_000;
      }
      if (secondSelect === "Gigabyte") {
        label_2.value = firstLabel / 1_000_000_000;
      }
      if (secondSelect === "Terabyte") {
        label_2.value = firstLabel / 1_000_000_000_000;
      }
      break;

    case "Kilobyte":
      if (secondSelect === "Byte") {
        label_2.value = firstLabel * 1000;
      }
      if (secondSelect === "Kilobyte") {
        label_2.value = firstLabel;
      }
      if (secondSelect === "Megabyte") {
        label_2.value = firstLabel / 1000;
      }
      if (secondSelect === "Gigabyte") {
        label_2.value = firstLabel / 1_000_000;
      }
      if (secondSelect === "Terabyte") {
        label_2.value = firstLabel / 1_000_000_000;
      }
      break;

    case "Megabyte":
      if (secondSelect === "Byte") {
        label_2.value = firstLabel * 1_000_000;
      }
      if (secondSelect === "Kilobyte") {
        label_2.value = firstLabel * 1000;
      }
      if (secondSelect === "Megabyte") {
        label_2.value = firstLabel;
      }
      if (secondSelect === "Gigabyte") {
        label_2.value = firstLabel / 1000;
      }
      if (secondSelect === "Terabyte") {
        label_2.value = firstLabel / 1_000_000;
      }
      break;

    case "Gigabyte":
      if (secondSelect === "Byte") {
        label_2.value = firstLabel * 1_000_000_000;
      }
      if (secondSelect === "Kilobyte") {
        label_2.value = firstLabel * 1_000_000;
      }
      if (secondSelect === "Megabyte") {
        label_2.value = firstLabel * 1000;
      }
      if (secondSelect === "Gigabyte") {
        label_2.value = firstLabel;
      }
      if (secondSelect === "Terabyte") {
        label_2.value = firstLabel / 1000;
      }
      break;

    case "Terabyte":
      if (secondSelect === "Byte") {
        label_2.value = firstLabel * 1_000_000_000_000;
      }
      if (secondSelect === "Kilobyte") {
        label_2.value = firstLabel * 1_000_000_000;
      }
      if (secondSelect === "Megabyte") {
        label_2.value = firstLabel * 1_000_000;
      }
      if (secondSelect === "Gigabyte") {
        label_2.value = firstLabel * 1000;
      }
      if (secondSelect === "Terabyte") {
        label_2.value = firstLabel;
      }
      break;
  }
  //   console.log(label_1.value);
  //   console.log(select_1.value);
}
