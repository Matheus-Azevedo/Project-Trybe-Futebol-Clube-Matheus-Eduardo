const mockMatches = [
  {
    "id": 1,
    "homeTeamId": 16,
    "awayTeamId": 8,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamId": 9,
    "awayTeamId": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeamId": 4,
    "awayTeamId": 11,
    "homeTeamGoals": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeamId": 3,
    "awayTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeamId": 7,
    "awayTeamId": 10,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeamId": 5,
    "awayTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeamId": 12,
    "awayTeamId": 6,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeamId": 15,
    "awayTeamId": 1,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeamId": 1,
    "awayTeamId": 12,
    "homeTeamGoals": 0,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeamId": 2,
    "awayTeamId": 9,
    "homeTeamGoals": 0,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 11,
    "homeTeamId": 13,
    "awayTeamId": 3,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 12,
    "homeTeamId": 6,
    "awayTeamId": 4,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 13,
    "homeTeamId": 8,
    "awayTeamId": 5,
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 14,
    "homeTeamId": 14,
    "awayTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 15,
    "homeTeamId": 10,
    "awayTeamId": 15,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 16,
    "homeTeamId": 11,
    "awayTeamId": 7,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 17,
    "homeTeamId": 1,
    "awayTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 18,
    "homeTeamId": 12,
    "awayTeamId": 5,
    "homeTeamGoals": 4,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 19,
    "homeTeamId": 11,
    "awayTeamId": 2,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 20,
    "homeTeamId": 7,
    "awayTeamId": 9,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 21,
    "homeTeamId": 6,
    "awayTeamId": 13,
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 22,
    "homeTeamId": 4,
    "awayTeamId": 3,
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 23,
    "homeTeamId": 15,
    "awayTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 24,
    "homeTeamId": 10,
    "awayTeamId": 14,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 25,
    "homeTeamId": 2,
    "awayTeamId": 6,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 26,
    "homeTeamId": 13,
    "awayTeamId": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 27,
    "homeTeamId": 5,
    "awayTeamId": 15,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 28,
    "homeTeamId": 16,
    "awayTeamId": 7,
    "homeTeamGoals": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 29,
    "homeTeamId": 9,
    "awayTeamId": 4,
    "homeTeamGoals": 0,
    "awayTeamGoals": 4,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 30,
    "homeTeamId": 3,
    "awayTeamId": 12,
    "homeTeamGoals": 0,
    "awayTeamGoals": 4,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 31,
    "homeTeamId": 8,
    "awayTeamId": 10,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 32,
    "homeTeamId": 14,
    "awayTeamId": 11,
    "homeTeamGoals": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 33,
    "homeTeamId": 1,
    "awayTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 34,
    "homeTeamId": 9,
    "awayTeamId": 6,
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 35,
    "homeTeamId": 10,
    "awayTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 36,
    "homeTeamId": 2,
    "awayTeamId": 7,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 37,
    "homeTeamId": 15,
    "awayTeamId": 13,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 38,
    "homeTeamId": 14,
    "awayTeamId": 4,
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 39,
    "homeTeamId": 3,
    "awayTeamId": 11,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 40,
    "homeTeamId": 12,
    "awayTeamId": 8,
    "homeTeamGoals": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 41,
    "homeTeamId": 16,
    "awayTeamId": 9,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeamId": 6,
    "awayTeamId": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeamId": 11,
    "awayTeamId": 10,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeamId": 7,
    "awayTeamId": 15,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeamId": 5,
    "awayTeamId": 3,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeamId": 4,
    "awayTeamId": 12,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeamId": 8,
    "awayTeamId": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeamId": 13,
    "awayTeamId": 2,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }
];

const mockMatchesByTeam = [
  {
    "id": 9,
    "homeTeamId": 1,
    "awayTeamId": 12,
    "homeTeamGoals": 0,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 17,
    "homeTeamId": 1,
    "awayTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 33,
    "homeTeamId": 1,
    "awayTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }
]

const mockMatchesByProgress = [
  {
    "id": 41,
    "homeTeamId": 16,
    "awayTeamId": 9,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": true,
    "home_team_id": 16,
    "away_team_id": 9,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeamId": 6,
    "awayTeamId": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "home_team_id": 6,
    "away_team_id": 1,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeamId": 11,
    "awayTeamId": 10,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": true,
    "home_team_id": 11,
    "away_team_id": 10,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeamId": 7,
    "awayTeamId": 15,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": true,
    "home_team_id": 7,
    "away_team_id": 15,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeamId": 5,
    "awayTeamId": 3,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "home_team_id": 5,
    "away_team_id": 3,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeamId": 4,
    "awayTeamId": 12,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "home_team_id": 4,
    "away_team_id": 12,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeamId": 8,
    "awayTeamId": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": true,
    "home_team_id": 8,
    "away_team_id": 14,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeamId": 13,
    "awayTeamId": 2,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "home_team_id": 13,
    "away_team_id": 2,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }
]

export { mockMatches, mockMatchesByProgress, mockMatchesByTeam };
