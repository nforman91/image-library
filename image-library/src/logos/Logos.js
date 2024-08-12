const logos = [
    {
        id: 1,
        team_name: 'New Jersey Devils',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://assets.nhle.com/logos/nhl/svg/NJD_dark.svg'
    },
    {
        id: 2,
        team_name: 'New York Islanders',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://assets.nhle.com/logos/nhl/svg/NYI_dark.svg'
    },
    {
        id: 3,
        team_name: 'New York Rangers',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/289471614/binary-file/file.svg'
    },
    {
        id: 4,
        team_name: 'Philadelphia Flyers',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://assets.nhle.com/logos/nhl/svg/PHI_dark.svg'
    },
    {
        id: 5,
        team_name: 'Pittsburgh Penguins',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://assets.nhle.com/logos/nhl/svg/PIT_dark.svg'
    },
    {
        id: 6,
        team_name: 'Boston Bruins',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301172494/binary-file/file.svg'
    },
    {
        id: 7,
        team_name: 'Buffalo Sabres',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/318303268/binary-file/file.svg'
    },
    {
        id: 8,
        team_name: 'Montreal Canadiens',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309964716/binary-file/file.svg'
    },
    {
        id: 9,
        team_name: 'Ottowa Senators',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/319086486/binary-file/file.svg'
    },
    {
        id: 10,
        team_name: 'Toronto Maple Leafs',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://en.wikipedia.org/wiki/Toronto_Maple_Leafs#/media/File:Toronto_Maple_Leafs_2016_logo.svg'
    },
    {
        id: 12,
        team_name: 'Carolina Hurricanes',
        conference: 'Easten',
        division: 'Metropolitan',
        url: 'https://assets.nhle.com/logos/nhl/svg/CAR_dark.svg'
    },
    {
        id: 13,
        team_name: 'Florida Panthers',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/291015530/binary-file/file.svg'
    },
    {
        id: 14,
        team_name: 'Tampa Bay Lightning',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Tampa_Bay_Lightning_2011.svg'
    },
    {
        id: 15,
        team_name: 'Washington Capitals',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/298789884/binary-file/file.svg'
    },
    {
        id: 16,
        team_name: 'Chicago Blackhawks',
        conference: 'Western',
        division: 'Central',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301971744/binary-file/file.svg'
    },
    {
        id: 17,
        team_name: 'Detroit Red Wings',
        conference: 'Eastern',
        division: 'Atlantic',
        url: 'https://assets.nhle.com/logos/nhl/svg/DET_dark.svg'
    },
    {
        id: 18,
        team_name: 'Nashville Predators',
        conference: 'Western',
        division: 'Central',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Nashville_Predators_Logo_%282011%29.svg/440px-Nashville_Predators_Logo_%282011%29.svg.png'
    },
    {
        id: 19,
        team_name: 'St. Louis Blues',
        conference: 'Western',
        division: 'Central',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309991890/binary-file/file.svg'
    },
    {
        id: 20,
        team_name: 'Calgary Flames',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/319279210/binary-file/file.svg'
    },
    {
        id: 21,
        team_name: 'Colorado Avalanche',
        conference: 'Western',
        division: 'Central',
        url: 'https://assets.nhle.com/logos/nhl/svg/COL_dark.svg'
    },
    {
        id: 22,
        team_name: 'Edmonton Oilers',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/290013862/binary-file/file.svg'
    },
    {
        id: 23,
        team_name: 'Vancouver Canucks',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309954422/binary-file/file.svg'
    },
    {
        id: 24,
        team_name: 'Anaheim Ducks',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/299423002/binary-file/file.svg'
    },
    {
        id: 25,
        team_name: 'Dallas Stars',
        conference: 'Western',
        division: 'Central',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/325914394/binary-file/file.svg'
    },
    {
        id: 26,
        team_name: 'Los Angeles Kings',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg'
    },
    {
        id: 28,
        team_name: 'San Jose Sharks',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/301041748/binary-file/file.svg'
    },
    {
        id: 29,
        team_name: 'Columbus Blue Jackets',
        conference: 'Eastern',
        division: 'Metropolitan',
        url: 'https://assets.nhle.com/logos/nhl/svg/CBJ_dark.svg'
    },
    {
        id: 30,
        team_name: 'Minnesota Wild',
        conference: 'Western',
        division: 'Central',
        url: 'https://assets.nhle.com/logos/nhl/svg/MIN_dark.svg'
    },
    {
        id: 52,
        team_name: 'Winnipeg Jets',
        conference: 'Western',
        division: 'Central',
        url: 'https://assets.nhle.com/logos/nhl/svg/WPG_dark.svg'
    },
    {
        id: 53,
        team_name: 'Arizona Coyotes',
        conference: 'Western',
        division: 'Central',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/309994320/binary-file/file.svg'
    },
    {
        id: 54,
        team_name: 'Vegas Golden Knights',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/290581542/binary-file/file.svg'
    },
    {
        id: 55,
        team_name: 'Seattle Kraken',
        conference: 'Western',
        division: 'Pacific',
        url: 'https://cms.nhl.bamgrid.com/images/assets/binary/317578370/binary-file/file.svg'
    }
]

export default logos;
