import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';
import {  History } from '../proto/pstat_pb';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  player?: string;

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
