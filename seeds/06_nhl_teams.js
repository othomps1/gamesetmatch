'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nhl_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nhl_teams').insert([
        {
          id: 1,
          official_name: 'Anaheim Ducks',
          name: 'Ducks',
          city: 'Anaheim',
          state: 'California',
          team_colors: {
            "primary": "#F47A38",
            "secondary": "#B09862",
            "alternate": "#C4CED4",
            "fourth": "#010101"
          },
          stadium_name: 'Honda Center',
          logo_url: 'http://content.sportslogos.net/logos/1/1736/full/1651_anaheim_ducks-primary-2014.gif',
          created_at: new Date('2019-01-31 14:55:16 UTC'),
          updated_at: new Date('2019-01-31 14:55:18 UTC')
        },
        {
          id: 2,
          official_name: 'Arizona Coyotes',
          name: 'Coyotes',
          city: 'Glendale',
          state: 'Arizona',
          team_colors: {
            "primary": "#8C2633",
            "secondary": "#E2D6B5",
            "alternate": "#111111"
          },
          stadium_name: 'Gila River Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/5263/full/7807_arizona_coyotes-primary-2015.png',
          created_at: new Date('2019-01-31 14:55:16 UTC'),
          updated_at: new Date('2019-01-31 14:55:18 UTC')
        },
        {
          id: 3,
          official_name: 'Boston Bruins',
          name: 'Bruins',
          city: 'Boston',
          state: 'Massachusetts',
          team_colors: {
            "primary": "#FFB81C",
            "secondary": "#000000"
          },
          stadium_name: 'TD Garden',
          logo_url: 'http://content.sportslogos.net/logos/1/3/full/venf9fmhgnsawnxxvehf.png',
          created_at: new Date('2019-01-31 14:55:16 UTC'),
          updated_at: new Date('2019-01-31 14:55:18 UTC')
        },
        {
          id: 4,
          official_name: 'Buffalo Sabres',
          name: 'Sabres',
          city: 'Buffalo',
          state: 'New York',
          team_colors: {
            "primary": "#002654",
            "secondary": "#FCB514",
            "alternate": "#ADAFAA",
            "fourth": "#C8102E"
          },
          stadium_name: 'KeyBank Center',
          logo_url: 'http://content.sportslogos.net/logos/1/4/full/i40oxcdbo7xtfamqqhqachoyo.png',
          created_at: new Date('2019-01-31 14:55:16 UTC'),
          updated_at: new Date('2019-01-31 14:55:18 UTC')
        },
        {
          id: 5,
          official_name: 'Calgary Flames',
          name: 'Flames',
          city: 'Calgary',
          state: 'Alberta, Canada',
          team_colors: {
            "primary": "#C8102E",
            "secondary": "#F1BE48",
            "alternate": "#111111",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'Scotiabank Saddledome',
          logo_url: 'http://content.sportslogos.net/logos/1/5/full/50.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 6,
          official_name: 'Carolina Hurricanes',
          name: 'Hurricanes',
          city: 'Raleigh',
          state: 'North Carolina',
          team_colors: {
            "primary": "#CC0000",
            "secondary": "#000000",
            "alternate": "#A2AAAD",
            "fourth": "#76232F"
          },
          stadium_name: 'PNC Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/6/full/fotih31tn5r345nufo5xxayh3.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 7,
          official_name: 'Chicago Blackhawks',
          name: 'Blackhawks',
          city: 'Chicago',
          state: 'Illinois',
          team_colors: {
            "primary": "#CF0A2C",
            "secondary": "#FF671B",
            "alternate": "#00833E",
            "fourth": "#FFD100",
            "fifth": "#D18A00",
            "sixth": "#001970",
            "seventh": "#000000",
            "eighth": "#FFFFFF"
          },
          stadium_name: 'United Center',
          logo_url: 'http://content.sportslogos.net/logos/1/7/full/56.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 8,
          official_name: 'Colorado Avalanche',
          name: 'Avalanche',
          city: 'Denver',
          state: 'Colorado',
          team_colors: {
            "primary": "#6F263D",
            "secondary": "#236192",
            "alternate": "#A2AAAD",
            "fourth": "#000000"
          },
          stadium_name: 'Pepsi Center',
          logo_url: 'http://content.sportslogos.net/logos/1/8/full/64.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 9,
          official_name: 'Columbus Blue Jackets',
          name: 'Blue Jackets',
          city: 'Columbus',
          state: 'Ohio',
          team_colors: {
            "primary": "#002654",
            "secondary": "#CE1126",
            "alternate": "#A4A9AD"
          },
          stadium_name: 'Nationwide Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/9/full/jhepegs329pc7ugyypebl28wg.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 10,
          official_name: 'Dallas Stars',
          name: 'Stars',
          city: 'Dallas',
          state: 'Texas',
          team_colors: {
            "primary": "#006847",
            "secondary": "#8F8F8C",
            "alternate": "#111111"
          },
          stadium_name: 'American Airlines Center',
          logo_url: 'http://content.sportslogos.net/logos/1/10/full/7917_dallas_stars-primary-2014.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 11,
          official_name: 'Detroit Red Wings',
          name: 'Red Wings',
          city: 'Detroit',
          state: 'Michigan',
          team_colors: {
            "primary": "#CE1126",
            "secondary": "#FFFFFF"
          },
          stadium_name: 'Little Caesars Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/11/full/yo3wysbjtagzmwj37tb11u0fh.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 12,
          official_name: 'Edmonton Oilers',
          name: 'Oilers',
          city: 'Edmonton',
          state: 'Alberta, Canada',
          team_colors: {
            "primary": "#041E42",
            "secondary": "#FF4C00"
          },
          stadium_name: 'Rogers Place',
          logo_url: 'http://content.sportslogos.net/logos/1/12/full/2728_edmonton_oilers-primary-2018.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 13,
          official_name: 'Florida Panthers',
          name: 'Panthers',
          city: 'Sunrise',
          state: 'Florida',
          team_colors: {
            "primary": "#041E42",
            "secondary": "#C8102E",
            "alternate": "#B9975B"
          },
          stadium_name: 'BB&T Center',
          logo_url: 'http://content.sportslogos.net/logos/1/13/full/8078_florida_panthers-primary-2017.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 14,
          official_name: 'Los Angeles Kings',
          name: 'Kings',
          city: 'Los Angeles',
          state: 'California',
          team_colors: {
            "primary": "#111111",
            "secondary": "#A2AAAD",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Staples Center',
          logo_url: 'http://content.sportslogos.net/logos/1/14/full/71jepx81eqzz1l6q9g1g5j1lh.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 15,
          official_name: 'Minnesota Wild',
          name: 'Wild',
          city: 'Saint Paul',
          state: 'Minnesota',
          team_colors: {
            "primary": "#A6192E",
            "secondary": "#154734",
            "alternate": "#EAAA00",
            "fourth": "#DDCBA4"
          },
          stadium_name: 'Xcel Energy Center',
          logo_url: 'http://content.sportslogos.net/logos/1/15/full/8810_minnesota_wild-primary-2014.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 16,
          official_name: 'Montreal Canadiens',
          name: 'Canadiens',
          city: 'Montreal',
          state: 'Quebec, Canada',
          team_colors: {
            "primary": "#AF1E2D",
            "secondary": "#192168"
          },
          stadium_name: 'Bell Centre',
          logo_url: 'http://content.sportslogos.net/logos/1/16/full/124.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 17,
          official_name: 'Nashville Predators',
          name: 'Predators',
          city: 'Nashville',
          state: 'Tennessee',
          team_colors: {
            "primary": "#FFB81C",
            "secondary": "#041E42",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Bridgestone Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/17/full/lvchw3qfsun2e7oc02kh2zxb6.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 18,
          official_name: 'New Jersey Devils',
          name: 'Devils',
          city: 'Newark',
          state: 'New Jersey',
          team_colors: {
            "primary": "#CE1126",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Prudential Center',
          logo_url: 'http://content.sportslogos.net/logos/1/18/full/32tfs723a3bes0p0hb4hgcy1u.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 19,
          official_name: 'New York Islanders',
          name: 'Islanders',
          city: 'Brooklyn',
          state: 'New York',
          team_colors: {
            "primary": "#00539B",
            "secondary": "#F47D30"
          },
          stadium_name: 'Barclays Center',
          logo_url: 'http://content.sportslogos.net/logos/1/19/full/79520qbne58r9i71zhuggbff0.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 20,
          official_name: 'New York Rangers',
          name: 'Rangers',
          city: 'New York City',
          state: 'New York',
          team_colors: {
            "primary": "#0038A8",
            "secondary": "#CE1126",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Madison Square Garden',
          logo_url: 'http://content.sportslogos.net/logos/1/20/full/144.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 21,
          official_name: 'Ottawa Senators',
          name: 'Senators',
          city: 'Ottawa',
          state: 'Ontario, Canada',
          team_colors: {
            "primary": "#E31837",
            "secondary": "#C69214",
            "alternate": "#000000",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'Canadian Tire Centre',
          logo_url: 'http://content.sportslogos.net/logos/1/21/full/2bkf2l3xyxi5p0cavbj8.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 22,
          official_name: 'Philadelphia Flyers',
          name: 'Flyers',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#F74902",
            "secondary": "#000000",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Wells Fargo Center',
          logo_url: 'http://content.sportslogos.net/logos/1/22/full/161.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 23,
          official_name: 'Pittsburgh Penguins',
          name: 'Penguins',
          city: 'Pittsburgh',
          state: 'Pennsylvania',
          team_colors: {
            "primary": "#000000",
            "secondary": "#CFC493",
            "alternate": "#FCB514",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'PPG Paints Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/24/full/6362_pittsburgh_penguins-primary-2017.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 24,
          official_name: 'San Jose Sharks',
          name: 'Sharks',
          city: 'San Jose',
          state: 'California',
          team_colors: {
            "primary": "#006D75",
            "secondary": "#EA7200",
            "alternate": "#000000",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'SAP Center at San Jose',
          logo_url: 'http://content.sportslogos.net/logos/1/26/full/dmo1xf3z4pph27vmg3gf.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 25,
          official_name: 'St. Louis Blues',
          name: 'Blues',
          city: 'St. Louis',
          state: 'Missouri',
          team_colors: {
            "primary": "#002F87",
            "secondary": "#FCB514",
            "alternate": "#041E42",
            "fourth": "#FFFFFF"
          },
          stadium_name: 'Enterprise Center',
          logo_url: 'http://content.sportslogos.net/logos/1/25/full/187.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 26,
          official_name: 'Tampa Bay Lightning',
          name: 'Lightning',
          city: 'Tampa Bay',
          state: 'Florida',
          team_colors: {
            "primary": "#002868"
          },
          stadium_name: 'Amalie Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/27/full/97hhvk8e5if0riesnex30etgz.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 27,
          official_name: 'Toronto Maple Leafs',
          name: 'Maple Leafs',
          city: 'Toronto',
          state: 'Ontario, Canada',
          team_colors: {
            "primary": "#003E7E",
            "secondary": "#FFFFFF"
          },
          stadium_name: 'Scotiabank Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/28/full/8761_toronto_maple_leafs-primary-2017.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 28,
          official_name: 'Vancouver Canucks',
          name: 'Canucks',
          city: 'Vancouver',
          state: 'British Columbia, Canada',
          team_colors: {
            "primary": "#001F5B",
            "secondary": "#00843D",
            "alternate": "#071C2C",
            "fourth": "#99999A",
            "fifth": "#FFFFFF"
          },
          stadium_name: 'Rogers Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/29/full/tlxz9higxwygaehl0j5h.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 29,
          official_name: 'Vegas Golden Knights',
          name: 'Golden Knights',
          city: 'Las Vegas',
          state: 'Nevada',
          team_colors: {
            "primary": "#B4975A",
            "secondary": "#333F42",
            "alternate": "#C8102E",
            "fourth": "#000000",
            "fifth": "#FFFFFF"
          },
          stadium_name: 'T-Mobile Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/6114/full/2684_vegas_golden_knights-primary-2018.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 30,
          official_name: 'Washington Capitals',
          name: 'Capitals',
          city: 'Washington',
          state: 'D.C.',
          team_colors: {
            "primary": "#041E42",
            "secondary": "#C8102E",
            "alternate": "#FFFFFF"
          },
          stadium_name: 'Capital One Arena',
          logo_url: 'http://content.sportslogos.net/logos/1/30/full/llrs2zxi127vkqgcsvfb.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        },
        {
          id: 31,
          official_name: 'Winnipeg Jets',
          name: 'Jets',
          city: 'Winnipeg',
          state: 'Manitoba, Canada',
          team_colors: {
            "primary": "#041E42",
            "secondary": "#004C97",
            "alternate": "#AC162C",
            "fourth": "#7B303E",
            "fifth": "#55565A",
            "sixth": "#8E9090",
            "seventh": "#FFFFFF"
          },
          stadium_name: 'Bell MTS Place',
          logo_url: 'http://content.sportslogos.net/logos/1/3050/full/z9qyy9xqoxfjn0njxgzoy2rwk.png',
          created_at: new Date('2019-02-01 10:55:22 UTC'),
          updated_at: new Date('2019-02-01 10:55:24 UTC')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('nba_teams_id_seq', (SELECT MAX(id) FROM nba_teams));");
    });
};
