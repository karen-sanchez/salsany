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
			]

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
			events: allEvents
	});
});