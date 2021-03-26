import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';
import {  ChartType } from 'chart.js';
import {  History } from '../proto/pstat_pb';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  player?: string;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  

  constructor(
    private srv: PlayerService
  ) {}

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.srv.getHistory(50770).then((data: History) => {
      this.player = data.toString();
    });
  }
}
