$(document).ready(function() {

	let allEvents = [
				// Mon - Wed
				{
					title  : 'Orchard Beach Salsa Monday',
					start  : '2018-09-03T13:00:00',
					end  : '2018-09-03T17:00:00',
					url: 'http://www.salsanewyork.com/events/orchard-beach-salsa-sundays.htm'
				},
				{
					title  : 'Latin Mondays @ Taj' ,
					start  : '2018-09-03T17:00:00',
					end  : '2018-09-04T01:00:00',
					url: 'http://www.salsanewyork.com/public/events/latin-mondays-at-taj.htm'
				},
				{
					title  : 'Latin Mondays @ Taj' ,
					start  : '2018-09-10T17:00:00',
					end  : '2018-09-11T01:00:00',
					url: 'http://www.salsanewyork.com/public/events/latin-mondays-at-taj.htm'
				},
				{
					title  : 'Latin Mondays @ Taj' ,
					start  : '2018-09-17T17:00:00',
					end  : '2018-09-18T01:00:00',
					url: 'http://www.salsanewyork.com/public/events/latin-mondays-at-taj.htm'
				},
				{
					title  : 'Latin Mondays @ Taj' ,
					start  : '2018-09-24T17:00:00',
					end  : '2018-09-25T01:00:00',
					url: 'http://www.salsanewyork.com/public/events/latin-mondays-at-taj.htm'
				},
				{
					title  : 'Salsa on 2\'sdays - Rooftop party @ the Copacabana',
					start  : '2018-09-04T21:00:00',
					end  : '2018-09-05T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-on-2\'sdays-at-copa.htm'
				},
				{
					title  : 'Salsa on 2\'sdays - Rooftop party @ the Copacabana',
					start  : '2018-09-11T21:00:00',
					end  : '2018-09-12T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-on-2\'sdays-at-copa.htm'
				},
				{
					title  : 'Salsa on 2\'sdays - Rooftop party @ the Copacabana',
					start  : '2018-09-18T21:00:00',
					end  : '2018-09-19T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-on-2\'sdays-at-copa.htm'
				},
				{
					title  : 'Salsa on 2\'sdays - Rooftop party @ the Copacabana',
					start  : '2018-09-25T21:00:00',
					end  : '2018-09-26T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-on-2\'sdays-at-copa.htm'
				},
				{
					title  : 'Baila Wednesdays @ Solas',
					start  : '2018-09-05T20:00:00',
					end  : '2018-09-06T01:00:00',
					url: 'http://www.salsanewyork.com/events/baila-wednesdays-at-solas.htm'
				},
				{
					title  : 'Baila Wednesdays @ Solas',
					start  : '2018-09-12T20:00:00',
					end  : '2018-09-13T01:00:00',
					url: 'http://www.salsanewyork.com/events/baila-wednesdays-at-solas.htm'
				},
				{
					title  : 'Baila Wednesdays @ Solas',
					start  : '2018-09-19T20:00:00',
					end  : '2018-09-20T01:00:00',
					url: 'http://www.salsanewyork.com/events/baila-wednesdays-at-solas.htm'
				},
				{
					title  : 'Baila Wednesdays @ Solas',
					start  : '2018-09-26T20:00:00',
					end  : '2018-09-27T01:00:00',
					url: 'http://www.salsanewyork.com/events/baila-wednesdays-at-solas.htm'
				},
				// Thu - Sun
				{
					title  : 'Summer outdoor salsa @ Downtown Brooklyn.',
					start  : '2018-08-30T17:00:00',
					end  : '2018-08-30T19:30:00',
					url: 'https://www.facebook.com/events/213622669463786/'
				},
				{
					title  : 'Summer outdoor salsa @ Downtown Brooklyn.',
					start  : '2018-09-06T17:00:00',
					end  : '2018-09-06T19:30:00',
					url: 'https://www.facebook.com/events/213622669463786/'
				},
				{
					title  : 'Summer outdoor salsa @ Downtown Brooklyn.',
					start  : '2018-09-13T17:00:00',
					end  : '2018-09-13T19:30:00',
					url: 'https://www.facebook.com/events/213622669463786/'
				},
				{
					title  : 'Summer outdoor salsa @ Downtown Brooklyn.',
					start  : '2018-09-20T17:00:00',
					end  : '2018-09-20T19:30:00',
					url: 'https://www.facebook.com/events/213622669463786/'
				},
				{
					title  : 'Summer outdoor salsa @ Downtown Brooklyn.',
					start  : '2018-09-27T17:00:00',
					end  : '2018-09-27T19:30:00',
					url: 'https://www.facebook.com/events/213622669463786/'
				},
				{
					title  : 'Tumbao Thursdays @ Yayo\'s.',
					start  : '2018-08-30T21:00:00',
					end  : '2018-08-31T01:00:00',
					url: 'http://www.salsanewyork.com/events/tumbao-thursdays-at-yayo\'s.htm/'
				},
				{
					title  : 'Tumbao Thursdays @ Yayo\'s.',
					start  : '2018-09-06T21:00:00',
					end  : '2018-09-07T01:00:00',
					url: 'http://www.salsanewyork.com/events/tumbao-thursdays-at-yayo\'s.htm'
				},
				{
					title  : 'Tumbao Thursdays @ Yayo\'s.',
					start  : '2018-09-13T21:00:00',
					end  : '2018-09-14T01:00:00',
					url: 'http://www.salsanewyork.com/events/tumbao-thursdays-at-yayo\'s.htm'
				},
				{
					title  : 'Tumbao Thursdays @ Yayo\'s.',
					start  : '2018-09-20T21:00:00',
					end  : '2018-09-21T01:00:00',
					url: 'http://www.salsanewyork.com/events/tumbao-thursdays-at-yayo\'s.htm'
				},
				{
					title  : 'Tumbao Thursdays @ Yayo\'s.',
					start  : '2018-09-27T21:00:00',
					end  : '2018-09-28T01:00:00',
					url: 'http://www.salsanewyork.com/events/tumbao-thursdays-at-yayo\'s.htm'
				},
				{
					title  : 'New York International Salsa Congress.',
					start  : '2018-08-30T21:00:00',
					end  : '2018-08-31T04:00:00',
					url: 'http://newyorksalsacongress.com/'
				},
				{
					title  : 'New York International Salsa Congress.',
					start  : '2018-08-31T21:00:00',
					end  : '2018-09-01T04:00:00',
					url: 'http://newyorksalsacongress.com/'
				},
				{
					title  : 'New York International Salsa Congress.',
					start  : '2018-09-01T21:00:00',
					end  : '2018-09-02T04:00:00',
					url: 'http://newyorksalsacongress.com/'
				},
				{
					title  : 'New York International Salsa Congress.',
					start  : '2018-09-02T21:00:00',
					end  : '2018-09-03T04:00:00',
					url: 'http://newyorksalsacongress.com/'
				},
				{
					title  : 'Candela Fridays NYC @ Dancesport Studios.',
					start  : '2018-08-31T20:30:00',
					end  : '2018-09-01T04:00:00',
					url: 'http://www.salsanewyork.com/events/candela-fridays-at-dancesport.htm',
					cancelled: true
				},
				{
					title  : 'Candela Fridays NYC @ Dancesport Studios.',
					start  : '2018-09-07T20:30:00',
					end  : '2018-09-08T04:00:00',
					url: 'http://www.salsanewyork.com/events/candela-fridays-at-dancesport.htm',
				},
				{
					title  : 'Candela Fridays NYC @ Dancesport Studios.',
					start  : '2018-09-21T20:30:00',
					end  : '2018-09-22T04:00:00',
					url: 'http://www.salsanewyork.com/events/candela-fridays-at-dancesport.htm',
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-08-31T21:00:00',
					end  : '2018-08-31T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-07T21:00:00',
					end  : '2018-08-07T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-14T21:00:00',
					end  : '2018-09-14T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-21T21:00:00',
					end  : '2018-09-21T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-28T21:00:00',
					end  : '2018-09-28T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-01T21:00:00',
					end  : '2018-09-01T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-08T21:00:00',
					end  : '2018-09-08T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-15T21:00:00',
					end  : '2018-09-15T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-22T21:00:00',
					end  : '2018-09-22T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Lorenz Dance Studio Mambo Social.',
					start  : '2018-09-29T21:00:00',
					end  : '2018-09-29T24:00:00',
					url: 'http://www.salsanewyork.com/events/lorenz-dance-studio-mambo-social.htm'
				},
				{
					title  : 'Club Deportivo Salsa Fridays.',
					start  : '2018-08-31T24:00:00',
					end  : '2018-09-01T04:00:00',
					url: 'http://www.salsanewyork.com/events/club-deportivo.htm'
				},
				{
					title  : 'Club Deportivo Salsa Fridays.',
					start  : '2018-09-07T24:00:00',
					end  : '2018-09-08T04:00:00',
					url: 'http://www.salsanewyork.com/events/club-deportivo.htm'
				},
				{
					title  : 'Club Deportivo Salsa Fridays.',
					start  : '2018-09-14T24:00:00',
					end  : '2018-09-15T04:00:00',
					url: 'http://www.salsanewyork.com/events/club-deportivo.htm'
				},
				{
					title  : 'Club Deportivo Salsa Fridays.',
					start  : '2018-09-21T24:00:00',
					end  : '2018-09-22T04:00:00',
					url: 'http://www.salsanewyork.com/events/club-deportivo.htm'
				},
				{
					title  : 'Club Deportivo Salsa Fridays.',
					start  : '2018-09-28T24:00:00',
					end  : '2018-09-29T04:00:00',
					url: 'http://www.salsanewyork.com/events/club-deportivo.htm'
				},
				{
					title  : 'Salsa Salsa Dance Studio Social @ The Cherry Tree.',
					start  : '2018-08-31T21:00:00',
					end  : '2018-09-01T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-salsa-dance-studio-socials.htm'
				},
				{
					title  : 'Salsa Salsa Dance Studio Social @ The Cherry Tree.',
					start  : '2018-09-07T21:00:00',
					end  : '2018-09-08T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-salsa-dance-studio-socials.htm'
				},
				{
					title  : 'Salsa Salsa Dance Studio Social @ The Cherry Tree.',
					start  : '2018-09-21T21:00:00',
					end  : '2018-09-22T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-salsa-dance-studio-socials.htm'
				},
				{
					title  : 'Nieves Latin Dance Studio Brooklyn Salsa.',
					start  : '2018-08-31T21:00:00',
					end  : '2018-08-31T24:00:00',
					url: 'http://www.salsanewyork.com/events/nieves-social.htm',
					cancelled: true
				},
				{
					title  : 'Nieves Latin Dance Studio Brooklyn Salsa.',
					start  : '2018-09-07T21:00:00',
					end  : '2018-09-07T24:00:00',
					url: 'http://www.salsanewyork.com/events/nieves-social.htm'
				},
				{
					title  : 'Nieves Latin Dance Studio Brooklyn Salsa.',
					start  : '2018-09-14T21:00:00',
					end  : '2018-09-14T24:00:00',
					url: 'http://www.salsanewyork.com/events/nieves-social.htm'
				},
				{
					title  : 'Nieves Latin Dance Studio Brooklyn Salsa.',
					start  : '2018-09-21T21:00:00',
					end  : '2018-09-21T24:00:00',
					url: 'http://www.salsanewyork.com/events/nieves-social.htm'
				},
				{
					title  : 'Nieves Latin Dance Studio Brooklyn Salsa.',
					start  : '2018-09-28T21:00:00',
					end  : '2018-09-28T24:00:00',
					url: 'http://www.salsanewyork.com/events/nieves-social.htm'
				},
				{
					title  : 'Latin Fridays @ Salsa in Queens.',
					start  : '2018-08-31T21:00:00',
					end  : '2018-09-01T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-in-queens-social.htm',
					cancelled: true
				},
				{
					title  : 'Latin Fridays @ Salsa in Queens.',
					start  : '2018-09-28T21:00:00',
					end  : '2018-09-29T02:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-in-queens-social.htm'
				},
				{
					title  : 'Viva Salsa Friday @ Colony 274.',
					start  : '2018-09-14T21:00:00',
					end  : '2018-09-15T02:00:00',
					url: 'https://www.facebook.com/events/2144881735834896/'
				},
				{
					title  : 'Viva Salsa Friday @ Colony 274.',
					start  : '2018-09-28T21:00:00',
					end  : '2018-09-29T02:00:00',
					url: 'https://www.facebook.com/events/2144881735834896/'
				},
				{
					title  : 'Seda On2 Salsa Social @ Seda On 2 Dance Studio.',
					start  : '2018-09-21T21:00:00',
					end  : '2018-09-22T01:00:00',
					url: 'https://www.facebook.com/SedaOn2-Dance-Studio-187434645246535/'
				},
				{
					title  : 'An Evening With Abakua.',
					start  : '2018-09-28T22:00:00',
					end  : '2018-09-29T02:00:00',
					url: 'https://www.facebook.com/SedaOn2-Dance-Studio-187434645246535/'
				},
				{
					title  : 'Salsa Saturdays @ La Placita de la Marqueta - East Harlem Multicultural Festival.',
					start  : '2018-09-01T12:00:00',
					end  : '2018-09-01T18:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-saturdays-at-la-marqueta.htm'
				},
				{
					title  : 'Salsa Saturdays @ La Placita de la Marqueta - East Harlem Multicultural Festival.',
					start  : '2018-09-08T12:00:00',
					end  : '2018-09-08T18:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-saturdays-at-la-marqueta.htm'
				},
				{
					title  : 'Salsa Saturdays @ La Placita de la Marqueta - East Harlem Multicultural Festival.',
					start  : '2018-09-15T12:00:00',
					end  : '2018-09-15T18:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-saturdays-at-la-marqueta.htm'
				},
				{
					title  : 'Salsa Saturdays @ La Placita de la Marqueta - East Harlem Multicultural Festival.',
					start  : '2018-09-22T12:00:00',
					end  : '2018-09-22T18:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-saturdays-at-la-marqueta.htm'
				},
				{
					title  : 'Salsa Saturdays @ La Placita de la Marqueta - East Harlem Multicultural Festival.',
					start  : '2018-09-29T12:00:00',
					end  : '2018-09-29T18:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-saturdays-at-la-marqueta.htm'
				},
				{
					title  : 'Toda La Noche @ Stepping Out Studios.',
					start  : '2018-09-01T21:00:00',
					end  : '2018-09-02T03:00:00',
					url: 'http://www.salsanewyork.com/events/toda-la-noche.htm'
				},
				{
					title  : 'Off The Grid Salsa Social @ Tropical Image Studio.',
					start  : '2018-09-01T21:00:00',
					end  : '2018-09-02T02:00:00',
					url: 'https://brooklynsalsa.com/events/off-the-grid-social',
					cancelled: true
				},
				{
					title  : 'Salsa Mania Saturdays @ Dancesport Studios.',
					start  : '2018-09-08T20:00:00',
					end  : '2018-09-09T04:00:00',
					url: 'http://www.salsanewyork.com/events/salsamania-saturdays.htm'
				},
				{
					title  : 'Salsa Mania Saturdays @ Dancesport Studios.',
					start  : '2018-09-22T20:00:00',
					end  : '2018-09-23T04:00:00',
					url: 'http://www.salsanewyork.com/events/salsamania-saturdays.htm'
				},
				{
					title  : 'Piel Canela Salsa Dance Social.',
					start  : '2018-09-08T19:00:00',
					end  : '2018-09-08T23:00:00',
					url: 'http://www.salsanewyork.com/events/piel-canela-salsa-dance-social.htm'
				},
				{
					title  : 'Piel Canela Salsa Dance Social.',
					start  : '2018-09-22T19:00:00',
					end  : '2018-09-22T23:00:00',
					url: 'http://www.salsanewyork.com/events/piel-canela-salsa-dance-social.htm'
				},
				{
					title  : 'Salsa Union NYC @ Stepping Out Studios.',
					start  : '2018-09-15T21:00:00',
					end  : '2018-09-16T03:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-union-nyc.htm'
				},
				{
					title  : 'Salsa Union NYC @ Stepping Out Studios.',
					start  : '2018-09-15T21:00:00',
					end  : '2018-09-16T03:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-union-nyc.htm'
				},
				{
					title  : 'Salsa Fever On 2 Social @ The Salsa Fever On 2 Dance Academy.',
					start  : '2018-09-22T21:00:00',
					end  : '2018-09-23T02:00:00',
					url: 'http://www.salsanewyork.com/events/mario-b-social.htm'
				},
				{
					title  : 'Orchard Beach Salsa Sundays.',
					start  : '2018-09-02T13:00:00',
					end  : '2018-09-02T17:00:00',
					url: 'http://www.salsanewyork.com/events/orchard-beach-salsa-sundays.htm'
				},
				{
					title  : 'Orchard Beach Concert Series.',
					start  : '2018-09-02T12:00:00',
					end  : '2018-09-02T17:00:00',
					url: 'http://www.salsanewyork.com/events/orchard-beach-concerts.htm'
				},
				{
					title  : 'Salsa Sundays @ The Harlem Meer Performance Festival.',
					start  : '2018-09-02T14:00:00',
					end  : '2018-09-02T16:00:00',
					url: 'http://www.centralparknyc.org/events/individual-events/hmpf-2018-09-02.html'
				},
				{
					title  : 'Salsa Sunset Sundays @ Industry City Courtyard.',
					start  : '2018-09-02T12:00:00',
					end  : '2018-09-02T18:00:00',
					url: 'http://www.salsanewyork.com/events/industry-city-salsa-sunset-sundays.htm'
				},
				{
					title  : 'Salsa Sunset Sundays @ Industry City Courtyard.',
					start  : '2018-09-16T12:00:00',
					end  : '2018-09-16T18:00:00',
					url: 'http://www.salsanewyork.com/events/industry-city-salsa-sunset-sundays.htm'
				},
				{
					title  : 'Latin Sundays Party with Jimmy Anton.',
					start  : '2018-09-02T18:00:00',
					end  : '2018-09-02T22:00:00',
					url: 'http://www.salsanewyork.com/events/latin-sundays-party-with-jimmy-anton.htm'
				},
				{
					title  : 'Latin Sundays Party with Jimmy Anton.',
					start  : '2018-09-16T18:00:00',
					end  : '2018-09-16T22:00:00',
					url: 'http://www.salsanewyork.com/events/latin-sundays-party-with-jimmy-anton.htm'
				},
				{
					title  : 'Latin Sundays Party with Jimmy Anton.',
					start  : '2018-09-30T18:00:00',
					end  : '2018-09-30T22:00:00',
					url: 'http://www.salsanewyork.com/events/latin-sundays-party-with-jimmy-anton.htm'
				},
				{
					title  : 'Las Chicas Locas @ Dancesport.',
					start  : '2018-09-02T21:30:00',
					end  : '2018-09-03T02:00:00',
					url: 'http://www.salsanewyork.com/events/las-chicas-locas.htm'
				},
				{
					title  : 'Las Chicas Locas @ Dancesport.',
					start  : '2018-09-02T21:30:00',
					end  : '2018-09-03T02:00:00',
					url: 'http://www.salsanewyork.com/events/las-chicas-locas.htm'
				},
				{
					title  : 'Las Chicas Locas @ Dancesport.',
					start  : '2018-09-09T21:30:00',
					end  : '2018-09-10T02:00:00',
					url: 'http://www.salsanewyork.com/events/las-chicas-locas.htm'
				},
				{
					title  : 'Las Chicas Locas @ Dancesport.',
					start  : '2018-09-16T21:30:00',
					end  : '2018-09-07T02:00:00',
					url: 'http://www.salsanewyork.com/events/las-chicas-locas.htm'
				},
				{
					title  : 'Las Chicas Locas @ Dancesport.',
					start  : '2018-09-23T21:30:00',
					end  : '2018-09-24T02:00:00',
					url: 'http://www.salsanewyork.com/events/las-chicas-locas.htm'
				},
				{
					title  : 'Las Chicas Locas @ Dancesport.',
					start  : '2018-09-30T21:30:00',
					end  : '2018-10-01T02:00:00',
					url: 'http://www.salsanewyork.com/events/las-chicas-locas.htm'
				},
				{
					title  : 'Celebrating Carlos\' Bday - Mambo Sundays Party With Carlos Konig.',
					start  : '2018-09-09T17:30:00',
					end  : '2018-09-09T21:30:00',
					url: 'http://www.salsanewyork.com/events/carlos-konig-mambo-sundays.htm'
				},
				{
					title  : 'Mambo Sundays Party With Carlos Konig.',
					start  : '2018-09-23T17:30:00',
					end  : '2018-09-23T21:30:00',
					url: 'http://www.salsanewyork.com/events/carlos-konig-mambo-sundays.htm'
				},
				{
					title  : 'LVG - La Vieja Guardia Salsa Social.',
					start  : '2018-09-09T18:00:00',
					end  : '2018-09-09T22:00:00',
					url: 'http://www.salsanewyork.com/events/la-vieja-guardia-salsa-social.htm'
				},
				{
					title  : 'LVG - La Vieja Guardia Salsa Social.',
					start  : '2018-09-23T18:00:00',
					end  : '2018-09-23T22:00:00',
					url: 'http://www.salsanewyork.com/events/la-vieja-guardia-salsa-social.htm'
				},
				{
					title  : 'Sek\'end Sundays Salsa - By Salsa In Queens.',
					start  : '2018-09-09T19:00:00',
					end  : '2018-09-09T23:00:00',
					url: 'https://www.facebook.com/events/1941796649205844/'
				},
				{
					title  : 'Addie-Tude & Josie\'s School of Dance Salsa Social.',
					start  : '2018-09-09T17:00:00',
					end  : '2018-09-09T21:00:00',
					url: 'http://www.salsanewyork.com/public/events/addie-tude.htm'
				},
				{
					title  : 'Salsa on Sunday NYC con Sabor @ Dardo Galleto Studio.',
					start  : '2018-09-23T18:00:00',
					end  : '2018-09-23T22:00:00',
					url: 'http://www.salsanewyork.com/events/salsa-on-sunday-NYC.htm'
				},
			];

	$('#calendar').fullCalendar({
			header: {
				left: 'title',
				center: '',
				right: $(window).width() < 765 ? 'prev next month,listWeek,listDay':'today prev next'
			},
			buttonText: {
				listWeek: 'list week',
				listDay: 'list day'
			},
			events: allEvents,
			eventClick: function(event) {
			    if (event.url) {
			      window.open(event.url);
			      return false;
			    }
			},
			eventRender: function(event, $el) {
				if (event.cancelled) {
					$el.addClass("cancelled");	
				}
		    },
		     eventAfterAllRender: function(){
		        $("#calendar").fadeIn("slow");
		        console.log("done");
		    }
	});
});