let logos = [
    {
        id: 1,
        team_name: 'New Jersey Devils',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301891622/binary-file/file.svg'
    },
    {
        id: 2,
        team_name: 'New York Islanders',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/316482732/binary-file/file.svg'
    },
    {
        id: 3,
        team_name: 'New York Rangers',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/289471614/binary-file/file.svg'
    },
    {
        id: 4,
        team_name: 'Philadelphia Flyers',
        url: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/4.svg'
    },
    {
        id: 5,
        team_name: 'Pittsburgh Penguins',
        url: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/5.svg'
    },
    {
        id: 6,
        team_name: 'Boston Bruins',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301172494/binary-file/file.svg'
    },
    {
        id: 7,
        team_name: 'Buffalo Sabres',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/318303268/binary-file/file.svg'
    },
    {
        id: 8,
        team_name: 'Montreal Canadiens',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309964716/binary-file/file.svg'
    },
    {
        id: 9,
        team_name: 'Ottowa Senators',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/319086486/binary-file/file.svg'
    },
    {
        id: 10,
        team_name: 'Toronto Maple Leafs',
        url: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/10.svg'
    },
    {
        id: 11,
        team_name: 'Carolina Hurricanes',
        url: 'https://www-league.nhlstatic.com/nhl.com/builds/site-core/1b0537abbccc0707356f2da3f3f794e06472cbf3_1636047209/images/logos/team/current/team-12-dark.svg'
    },
    {
        id: 12,
        team_name: 'Florida Panthers',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/291015530/binary-file/file.svg'
    },
    {
        id: 13,
        team_name: 'Tampa Bay Lightning',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Tampa_Bay_Lightning_Logo_2011.svg/1200px-Tampa_Bay_Lightning_Logo_2011.svg.png'
    },
    {
        id: 14,
        team_name: 'Washington Capitals',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/298789884/binary-file/file.svg'
    },
    {
        id: 15,
        team_name: 'Chicago Blackhawks',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301971744/binary-file/file.svg'
    },
    {
        id: 16,
        team_name: 'Detroit Red Wings',
        url: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/17.svg'
    },
    {
        id: 17,
        team_name: 'Nashville Predators',
        url: 'https://www-league.nhlstatic.com/nhl.com/builds/site-core/1b0537abbccc0707356f2da3f3f794e06472cbf3_1636047209/images/logos/team/current/team-18-dark.svg'
    },
    {
        id: 18,
        team_name: 'St. Louis Blues',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309991890/binary-file/file.svg'
    },
    {
        id: 19,
        team_name: 'Calgary Flames',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/319279210/binary-file/file.svg'
    },
    {
        id: 20,
        team_name: 'Colorado Avalanche',
        url: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/21.svg'
    },
    {
        id: 21,
        team_name: 'Edmonton Oilers',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/290013862/binary-file/file.svg'
    },
    {
        id: 22,
        team_name: 'Vancouver Canucks',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309954422/binary-file/file.svg'
    },
    {
        id: 23,
        team_name: 'Anaheim Ducks',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/318845684/binary-file/file.svg'
    },
    {
        id: 24,
        team_name: 'Dallas Stars',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/325914394/binary-file/file.svg'
    },
    {
        id: 25,
        team_name: 'Los Angeles Kings',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg'
    },
    {
        id: 26,
        team_name: 'San Jose Sharks',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301041748/binary-file/file.svg'
    },
    {
        id: 27,
        team_name: 'Columbus Blue Jackets',
        url: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/29.svg'
    },
    {
        id: 28,
        team_name: 'Minnesota Wild',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/302317224/binary-file/file.svg'
    },
    {
        id: 29,
        team_name: 'Winnipeg Jets',
        url: 'https://www-league.nhlstatic.com/nhl.com/builds/site-core/1b0537abbccc0707356f2da3f3f794e06472cbf3_1636047209/images/logos/team/current/team-52-dark.svg'
    },
    {
        id: 30,
        team_name: 'Arizona Coyotes',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309994320/binary-file/file.svg'
    },
    {
        id: 31,
        team_name: 'Vegas Golden Knights',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/290581542/binary-file/file.svg'
    },
    {
        id: 32,
        team_name: 'Seattle Kraken',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/317578370/binary-file/file.svg'
    }
]

export default logos;
