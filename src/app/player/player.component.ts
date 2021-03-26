import { Component, OnInit } from '@angular/core'
import { PlayerService } from './player.service'
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js'
import { History } from '../proto/pstat_pb'
import { ParseHistory } from './player'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  name: string = ""
  chartLabels: string[] = []
  chartType: ChartType = 'bar'
  chartOptions: ChartOptions = {
    responsive: true
  }
  chartLegend: boolean = true
  chartData: ChartDataSets[] = []

  constructor(
    private srv: PlayerService
  ) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.srv.getHistory(50770).then((data: History) => {
      const history = ParseHistory(data)
      this.name = history.player.name
      this.chartLabels = history.labels;
      this.chartData = history.dataSets;
    });
  }
}
