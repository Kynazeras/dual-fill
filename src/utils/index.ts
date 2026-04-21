export const basicLands = ["Swamp", "Mountain", "Island", "Forest", "Plains"];

export const flattenDeck = (deck: string): string[] => {
  const formattedDeck = deck.split("\n").filter((c) => c);
  let flatDeck: string[] = [];
  formattedDeck.forEach((card) => {
    const quantity = parseInt(card.substring(0, card.indexOf(" ")));
    const name = stripCommas(card.substring(card.indexOf(" ") + 1));
    flatDeck.push(...Array(quantity).fill(name));
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
  const nonBasicIntersection = intersectionCards.filter(
    (card) => !basicLands.includes(card),
  );
  const allBasics = getAllBasicLands(deck);
  const alreadyPlaced = [...nonBasicIntersection, ...allBasics];
  const remaining = [...deck];
  alreadyPlaced.forEach((card) => {
    const idx = remaining.indexOf(card);
    if (idx !== -1) remaining.splice(idx, 1);
  });
  return [...alreadyPlaced, ...remaining];
};

export const finalOutput = (front: string, back: string) => {
  let rows: [number, string, string, string, string][] = [];
  const frontDeck = flattenDeck(front);
  const backDeck = flattenDeck(back);
  const intersectionCards: string[] = intersect(backDeck, frontDeck);
  const frontDeckSorted = sortDeck({ deck: frontDeck, intersectionCards });
  const backDeckSorted = sortDeck({ deck: backDeck, intersectionCards });
  frontDeckSorted.forEach(
    (card, index) =>
      (rows = [...rows, [1, card, "\t ", backDeckSorted[index], "\t "]]),
  );
  let csvContent = "data:text/csv;charset=utf-8,";
  // add default headers
  csvContent += `Quantity,Front,Front ID,Back,Back ID\r\n`;
  rows.forEach((arr) => {
    const row = arr.join(",");
    csvContent += row + "\r\n";
  });
  return csvContent;
};

export const stripCommas = (name: string) => {
  return name.replace(/,/g, "");
};

const intersect = (arr1: string[] = [], arr2: string[] = []) => {
  const map: Record<string, number> = {};
  arr1.forEach((a) => {
    map[a] = map[a] ? map[a] + 1 : 1;
  });
  const result: string[] = [];
  for (let key of arr2) {
    if (key in map && map[key] > 0) {
      result.push(key);
      map[key]--;
    }
  }
  return result;
};
