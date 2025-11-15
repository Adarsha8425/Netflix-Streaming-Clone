export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre?: string;
  rating?: number;
}

export const movieCollections = {
  trending: [
    { id: 1, title: "Stranger Things", poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80&auto=format&fit=crop" },
    { id: 2, title: "The Crown", poster: "https://images.unsplash.com/photo-1541554685626-8016b713c293?q=80&w=400&auto=format&fit=crop" },
    { id: 3, title: "Breaking Bad", poster: "https://images.unsplash.com/photo-1599967104345-548003f5a626?q=80&w=400&auto=format&fit=crop" },
    { id: 4, title: "The Witcher", poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80&auto=format&fit=crop" },
    { id: 5, title: "Dark", poster: "https://images.unsplash.com/photo-1656869761487-a72ef2dc3885?q=80&w=400&auto=format&fit=crop" },
    { id: 6, title: "Ozark", poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format&fit=crop" },
    { id: 7, title: "Mindhunter", poster: "https://images.unsplash.com/photo-1604047572648-d196f12cf9c0?w=400&q=80&auto=format&fit=crop" },
    { id: 8, title: "The Mandalorian", poster: "https://images.unsplash.com/photo-1686564762601-74f8b5eeec7c?w=400&q=80&auto=format&fit=crop" },
  ] as Movie[],
  
  topRated: [
    { id: 9, title: "Inception", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80&auto=format&fit=crop" },
    { id: 10, title: "Interstellar", poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&auto=format&fit=crop&q=100" },
    { id: 11, title: "The Matrix", poster: "https://images.unsplash.com/photo-1505343372103-a5df37706406?w=400&auto=format&fit=crop&q=100" },
    { id: 12, title: "Parasite", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80&auto=format&fit=crop" },
    { id: 13, title: "1917", poster: "https://images.unsplash.com/photo-1581320465488-c3c2edaa893d?w=400&auto=format&fit=crop&q=100" },
    { id: 14, title: "Dune", poster: "https://images.unsplash.com/photo-1506773090264-ac0b07293a64?w=400&auto=format&fit=crop&q=100" },
    { id: 15, title: "Avatar", poster: "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?w=400&auto=format&fit=crop&q=100" },
    { id: 16, title: "Tenet", poster: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400&q=100&auto=format&fit=crop" },
  ] as Movie[],
  
  action: [
    { id: 17, title: "John Wick", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80&auto=format&fit=crop" },
    { id: 18, title: "Mad Max", poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&auto=format&fit=crop&q=100" },
    { id: 19, title: "The Fast and the Furious", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&auto=format&fit=crop&q=100" },
    { id: 20, title: "Mission Impossible", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80&auto=format&fit=crop" },
    { id: 21, title: "Blade Runner", poster: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&q=80&auto=format&fit=crop" },
    { id: 22, title: "Atomic Blonde", poster: "https://images.unsplash.com/photo-1738850479610-1bb84fe34613?w=400&auto=format&fit=crop&q=100" },
    { id: 23, title: "The Equalizer", poster: "https://images.unsplash.com/photo-1590377800256-5de17549a63c?w=400&auto=format&fit=crop&q=100" },
    { id: 24, title: "Deadpool", poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop" },
  ] as Movie[],
  
  comedy: [
    { id: 25, title: "The Office", poster: "https://images.unsplash.com/photo-1617484073939-432438d12324?w=400&auto=format&fit=crop&q=100" },
    { id: 26, title: "Friends", poster: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?w=400&auto=format&fit=crop&q=100" },
    { id: 27, title: "The Good Place", poster: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=100&auto=format&fit=crop" },
    { id: 28, title: "Parks and Recreation", poster: "https://images.unsplash.com/photo-1699521491838-9c293c6d0d3e?w=400&auto=format&fit=crop&q=100" },
    { id: 29, title: "Brooklyn Nine-Nine", poster: "https://images.unsplash.com/photo-1635117743327-a9ab9d47b509?w=400&auto=format&fit=crop&q=100" },
    { id: 30, title: "The IT Crowd", poster: "https://images.unsplash.com/photo-1601921202654-f64caf8dc263?w=400&auto=format&fit=crop&q=100" },
    { id: 31, title: "Community", poster: "https://plus.unsplash.com/premium_photo-1663090239307-e0e9be1ae484?w=400&auto=format&fit=crop&q=100" },
    { id: 32, title: "Schitt's Creek", poster: "https://images.unsplash.com/photo-1753596327981-f412307e838d?w=400&auto=format&fit=crop&q=100" },
  ] as Movie[],
  
  documentaries: [
    { id: 33, title: "Planet Earth", poster: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80&auto=format&fit=crop" },
    { id: 34, title: "Our Planet", poster: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80&auto=format&fit=crop" },
    { id: 35, title: "Cosmic", poster: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&auto=format&fit=crop&q=100" },
    { id: 36, title: "Life", poster: "https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?w=400&auto=format&fit=crop&q=100" },
    { id: 37, title: "The Last Chance", poster: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80&auto=format&fit=crop" },
    { id: 38, title: "Fyre", poster: "https://plus.unsplash.com/premium_photo-1679954565327-e7e294e68b1c?w=400&auto=format&fit=crop&q=100" },
    { id: 39, title: "The Social Dilemma", poster: "https://images.unsplash.com/photo-1567448401144-e78297050185?w=400&auto=format&fit=crop&q=100" },
    { id: 40, title: "Tiger King", poster: "https://images.unsplash.com/photo-1640957507202-6e5ad7cd3365?w=400&auto=format&fit=crop&q=100" },
  ] as Movie[],

  romantic: [
    { id: 41, title: "The Notebook", poster: "https://images.unsplash.com/photo-1528938102132-4a9276b8e320?w=400&auto=format&fit=crop&q=100" },
    { id: 42, title: "Pride and Prejudice", poster: "https://images.unsplash.com/photo-1573125716783-d05b57a86488?w=400&auto=format&fit=crop&q=100" },
    { id: 43, title: "Titanic", poster: "https://images.unsplash.com/photo-1580166463495-ab4d21922c22?w=400&auto=format&fit=crop&q=100" },
    { id: 44, title: "The Proposal", poster: "https://images.unsplash.com/photo-1518370265276-f22b706aeac8?w=400&auto=format&fit=crop&q=100" },
    { id: 45, title: "Crazy Rich Asians", poster: "https://images.unsplash.com/photo-1576668919613-ef1fb48e2b62?w=400&auto=format&fit=crop&q=100" },
    { id: 46, title: "La La Land", poster: "https://images.unsplash.com/photo-1667038462951-c27a0ae8c025?w=400&auto=format&fit=crop&q=100" },
    { id: 47, title: "Eternal Sunshine", poster: "https://images.unsplash.com/photo-1697182712064-eb55850bad93?w=4000&auto=format&fit=crop&q=100" },
    { id: 48, title: "A Walk to Remember", poster: "https://images.unsplash.com/photo-1761509441435-225b64507728?w=400&auto=format&fit=crop&q=100" },
  ] as Movie[],
};
