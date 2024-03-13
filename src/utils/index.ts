export const basicLands = ['Swamp', 'Mountain', 'Island', 'Forest', 'Plains'];

export const flattenDeck = (deck: string): string[] => {
  const formattedDeck = deck.split('\n').filter((c) => c);
  let flatDeck: string[] = [];
  formattedDeck.forEach((card) => {
    const quantity = parseInt(card.substring(0, card.indexOf(' ')));
    const name = stripCommas(card.substring(card.indexOf(' ') + 1));
    if (quantity === 1) return (flatDeck = [...flatDeck, name]);
    const quantityArr = Array(quantity).fill(name);
    return (flatDeck = [...flatDeck, ...quantityArr]);
  });
  return flatDeck;
};

export const getAllBasicLands = (deck: string[]) => {
  return deck.filter((card) => basicLands.includes(card));
};

export const sortDeck = ({
  deck,
  intersectionCards,
}: {
  deck: string[];
  intersectionCards: string[];
}) => {
  const allBasics = getAllBasicLands(deck);
  let sortedDeck: string[] = [...intersectionCards, ...allBasics];
  deck
    .filter((card) => !sortedDeck.includes(card))
    .forEach((card) => (sortedDeck = [...sortedDeck, card]));
  return sortedDeck;
};

export const finalOutput = (front: string, back: string) => {
  let rows: [number, string, string, string, string][] = [];
  const frontDeck = flattenDeck(front);
  const backDeck = flattenDeck(back);
  const intersectionCards: string[] = intersect(backDeck, frontDeck).filter(
    (card: string) => !basicLands.includes(card)
  );
  const frontDeckSorted = sortDeck({ deck: frontDeck, intersectionCards });
  const backDeckSorted = sortDeck({ deck: backDeck, intersectionCards });
  frontDeckSorted.forEach(
    (card, index) =>
      (rows = [...rows, [1, card, '\t ', backDeckSorted[index], '\t ']])
  );
  let csvContent = 'data:text/csv;charset=utf-8,';
  // add default headers
  csvContent += `Quantity,Front,Front ID,Back,Back ID\r\n`;
  rows.forEach((arr) => {
    const row = arr.join(',');
    csvContent += row + '\r\n';
  });
  return csvContent;
};

export const stripCommas = (name: string) => {
  return name.replace(/,/g, '');
};

const intersect = (arr1: any[] = [], arr2: any[] = []) => {
  const map: any = {};
  arr1.forEach((a) => {
    map[a] = map[a] ? map[a] + 1 : 1;
  });
  const result: any = [];
  for (let key of arr2) {
    if (key in map && map[key] > 0) {
      result.push(key);
      map[key]--;
    }
  }
  return result;
};
