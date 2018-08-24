$(document).ready(function() {

	let allEvents = [
				{
					title  : 'Sunset salsa with Talia @ pier 45 greenwich village',
					start  : '2018-08-21T18:30:00',
					end  : '2018-08-21T21:00:00'
				},
				{
					title  : 'Salsa on 2\'sdays - Rooftop party @ the Copacabana' ,
					start  : '2018-08-21T21:00:00',
					end  : '2018-08-21T02:00:00'
				},
				{
					title  : 'Midtown salsa @ plaza 33',
					start  : '2018-08-22T14:00:00',
					end  : '2018-08-22T26:00:00'
				},
				{
					title  : 'Baila Wednesdays @ Solas',
					start  : '2018-08-22T18:00:00',
					end  : '2018-08-22T20:00:00'
				},
				{
					title  : 'Summer outdoor salsa @ downtown Brooklyn',
					start  : '2018-08-23T17:00:00',
					end  : '2018-08-23T19:00:00'
				},
				{
					title  : 'An evening with Abakua',
					start  : '2018-08-24T22:00:00',
					end  : '2018-08-24T2:00:00'
				},
				{
					title  : 'Salsamania Saturdays @ dancesport studios.',
					start  : '2018-08-25T17:00:00',
					end  : '2018-08-25T19:00:00'
				},
			];

	let thuFriSatSun = [
				// Thursday
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
					end  : '2018-09-03T19:04:00',
					url: 'http://newyorksalsacongress.com/'
				},
				{
					title  : 'Candela Fridays NYC @ Dancesport Studios.',
					start  : '2018-08-31T20:30:00',
					end  : '2018-09-01T19:04:00',
					url: 'http://www.salsanewyork.com/events/candela-fridays-at-dancesport.htm',
					cancelled: true
				},
			];

	$('#calendar').fullCalendar({
			header: {
				left: 'today prev',
				center: 'title',
				right: $(window).width() < 765 ? 'next month,listWeek,listDay':'next month,agendaWeek,agendaDay'
			},
			buttonText: {
				listWeek: 'list week',
				listDay: 'list day'
			},
			//events: allEvents
			events: thuFriSatSun,
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
		    }
	});
});