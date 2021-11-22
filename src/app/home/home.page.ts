import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private buttonsDisabled: boolean = false;

  private teamOneName: string;
  private teamTwoName: string;

  private teamOnePoints: number = 0;
  private teamTwoPoints: number = 0;

  private teamOneVictories: number = 0;
  private teamTwoVictories: number = 0;

  private winMessage: string = '';

  constructor() { }

  updatePointsTeamOne(points: number) {
    let auxPoints = this.teamOnePoints + points;
    if (auxPoints >= 0) {
      this.teamOnePoints += points;
    }

    this.validIfTeamOneWin();
  }

  updatePointsTeamTwo(points: number) {
    let auxPoints = this.teamTwoPoints + points;
    if (auxPoints >= 0) {
      this.teamTwoPoints += points;
    }

    this.validIfTeamTwoWin();
  }

  validIfTeamOneWin() {
    if (this.teamOnePoints >= 12) {
      this.disablePointButtons();
      this.teamOneVictories += 1;
      this.showWinMessage();
      this.winMessage = this.teamOneName ? `${this.teamOneName} ganharam essa rodada.` : 'Equipe 1 ganharam essa rodada.';

      setTimeout(() => {
        this.hideWinMessage();
        this.winMessage = '';
        this.teamOnePoints = 0;
        this.activePointButtons();
      }, 3000);

    }
  }

  validIfTeamTwoWin() {
    if (this.teamTwoPoints >= 12) {
      this.disablePointButtons();
      this.teamTwoVictories += 1;
      this.showWinMessage();
      this.winMessage = this.teamTwoName ? `${this.teamTwoName} ganharam essa rodada.` : 'Equipe 2 ganharam essa rodada.';

      setTimeout(() => {
        this.hideWinMessage();
        this.winMessage = '';
        this.teamTwoPoints = 0;
        this.activePointButtons();
      }, 3000);

    }
  }

  resetTeamOnePoints() {
    this.teamOnePoints = 0;
  }

  resetTeamTwoPoints() {
    this.teamTwoPoints = 0;
  }

  resetTeamOneVictories() {
    this.teamOneVictories = 0;
  }

  resetTeamTwoVictories() {
    this.teamTwoVictories = 0;
  }

  showWinMessage()
  {
    document.getElementById("win-message").style.display = 'block';
  }

  hideWinMessage()
  {
    document.getElementById("win-message").style.display = 'none';
  }

  disablePointButtons()
  {
    this.buttonsDisabled = true;
  }

  activePointButtons()
  {
    this.buttonsDisabled = false;
  }
}
