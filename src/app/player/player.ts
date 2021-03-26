import { History } from '../proto/pstat_pb'
import { ChartDataSets } from 'chart.js'

export interface PlayerInfo {
  id: number;
  name: string;
}

export interface HistoryData {
  goals: number;
  games: number;
}

const goalsChartIndex = 0
const gamesChartIndex = 1

export function ParseHistory(history: History): { player: PlayerInfo, labels: string[], dataSets: ChartDataSets[] } {
  let data = new Map<string, HistoryData>()
  var player: PlayerInfo = {
    id: history.getPlayerid(),
    name: history.getName()
  }

  for (const entry of history.getEntriesList()) {
    const saison = entry.getSeason()
    let history: HistoryData = {
      goals: (data.get(saison)?.goals ?? 0) + entry.getGoals(),
      games: (data.get(saison)?.games ?? 0) + entry.getMatchs(),
    }
    data.set(saison, history)
  }

  let labels: string[] = []
  let dataSets: ChartDataSets[] = [
    { data: [], label: 'goals' },
    { data: [], label: 'games' }
  ];
  for (const [k, v] of data) {
    labels.push(k)
    dataSets[goalsChartIndex]?.data?.push(v.goals)
    dataSets[gamesChartIndex]?.data?.push(v.games)
  }

  return {
    player,
    labels,
    dataSets
  }
}