export interface History {
  season: string;
  team: string;
  event: string;
  games: string;
  goals: string;
}


export interface Player {
  id: number;
  name: string;
  history: History[];
}

