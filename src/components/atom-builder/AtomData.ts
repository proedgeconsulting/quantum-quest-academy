
export interface Element {
  name: string;
  symbol: string;
  protons: number;
  stable: boolean;
}

export const ELEMENTS: Element[] = [
  { name: "Hydrogen", symbol: "H", protons: 1, stable: true },
  { name: "Helium", symbol: "He", protons: 2, stable: true },
  { name: "Lithium", symbol: "Li", protons: 3, stable: true },
  { name: "Beryllium", symbol: "Be", protons: 4, stable: true },
  { name: "Boron", symbol: "B", protons: 5, stable: true },
  { name: "Carbon", symbol: "C", protons: 6, stable: true },
  { name: "Nitrogen", symbol: "N", protons: 7, stable: true },
  { name: "Oxygen", symbol: "O", protons: 8, stable: true }
];

export const getElement = (protons: number): Element => {
  return ELEMENTS.find(el => el.protons === protons) || { 
    name: "Unknown", 
    symbol: "??", 
    protons: protons, 
    stable: false 
  };
};
