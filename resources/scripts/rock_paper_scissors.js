class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];

    if (Math.floor(Math.random() *3) === 0) {
      return 'rock';
    }
    
    else if (Math.floor(Math.random() * 3) === 1) {
      return 'paper';
    }

    else if (Math.floor(Math.random() * 3) === 2) {
      return 'scissors'; //acceptedValues[2] was not working 
    }
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection)
    {
      return 'tie';
    }
    //Rock
    else if (userSelection === 'rock')
    {
      if (cpuSelection === 'scissors') {
        return 'win';
      }
      else{
        return 'lose';
      }
    }
    //Paper
    else if(userSelection === 'paper')
    {
      if (cpuSelection === 'rock') {
        return 'win';
      }
      else {
        return 'lose';
      }
    }
    //Scissors
    else if (userSelection === 'scissors')
    {
      if (cpuSelection === 'paper') {
        return 'win';
      }
      else {
        return 'lose';
      }
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){

    this.userSelection = userSelection;
    this.cpuSelection = this.generateCPUResponse();

    const result = this.determineWinner(this.userSelection, this.cpuSelection);

    if(result === 'tie') 
    {
      this.gameHistoryLog.push(this.username + " selected " + this.userSelection + ", CPU selected " + this.cpuSelection + ": " + this.username + " " + result);
    }

    else if (result === 'win')
    {
      this.score.user ++;    
      this.gameHistoryLog.push(this.username + " selected " + this.userSelection + ", CPU selected " + this.cpuSelection + " : " + this.username + " " + result);

    }
    else if(result === 'lose')
    {
      this.score.cpu ++;
      this.gameHistoryLog.push(this.username + " selected " + this.userSelection + ", CPU selected " + this.cpuSelection + " : " + this.username + " " + result);
    }

  }

}