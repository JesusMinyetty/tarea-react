export function numeroALetras(num) {
  num = Number(num);

  if (num < 1 || num > 1000) {
    return "Número fuera de rango";
  }

  if (num === 1000) {
    return "mil";
  }

  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve"
  ];

  const especiales = {
    10: "diez",
    11: "once",
    12: "doce",
    13: "trece",
    14: "catorce",
    15: "quince",
    16: "dieciséis",
    17: "diecisiete",
    18: "dieciocho",
    19: "diecinueve",
    20: "veinte",
    21: "veintiuno",
    22: "veintidós",
    23: "veintitrés",
    24: "veinticuatro",
    25: "veinticinco",
    26: "veintiséis",
    27: "veintisiete",
    28: "veintiocho",
    29: "veintinueve"
  };

  const decenas = [
    "",
    "",
    "",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa"
  ];

  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos"
  ];

  if (num < 10) {
    return unidades[num];
  }

  if (especiales[num]) {
    return especiales[num];
  }

  if (num < 100) {
    const d = Math.floor(num / 10);
    const u = num % 10;

    if (u === 0) {
      return decenas[d];
    }

    return `${decenas[d]} y ${unidades[u]}`;
  }

  if (num === 100) {
    return "cien";
  }

  if (num < 1000) {
    const c = Math.floor(num / 100);
    const resto = num % 100;

    if (resto === 0) {
      return centenas[c];
    }

    return `${centenas[c]} ${numeroALetras(resto)}`;
  }

  return "";
}