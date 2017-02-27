(function(){

	var app = angular.module('app', []);
   
	app.controller('AppController', function(){
		
		this.days = data;
		
	});

	app.controller('TabController', function(){
		this.tab = 1;
		this.setTab = function(selectTab){
			this.tab = selectTab;
		};
		this.getTab = function(checkTab){
			return this.tab;
		};
	});


	var data = [{
			tab: 1,
			name: 'Day 1',
			title:  'Welcome to Seattle!',
			details: [
				'Arrive in Seattle, ‘The Emerald City’, home to tech giants',
				'Activity: Test your planning skills and learn self-reliance by independently purchasing snacks and water for the ‘road ahead’'
			],
			images: [
        			{
						src: 'img/quick_itenary/d1/01.jpg',
						caption: 'Visit Seattle, a West Coast seaport city called \'The Emerald City\' for its greenery'
					}
					
        	]
      	},
      	{
			tab: 2,
			name: 'Day 2',
			title:  'Visit industry giants - Boeing, Microsoft',
			details: [
				'Tour the Boeing factory with an expert',
				'Activity: Design model planes with Boeing engineers in a workshop at the Future of Flight Aviation Center',
				'Get inspired by visiting the global headquarters of Microsoft - Visitor Centre, a Campus walk and Tech Quiz',
				'Proceed to Mt. St. Helens, an active stratovolcano, for a Learning Centre orientation that covers geology and ecology'
			],
			images: [{
						src: 'img/quick_itenary/d2/01.jpg',
						caption: 'The Future of Flight Aviation Center & Boeing Tour'
					},
					{
						src: 'img/quick_itenary/d2/02.jpg',
						caption: 'Education visit to the Microsoft Global Headquarters, Redmond'
					},
					{
						src: 'img/quick_itenary/d2/03.jpg',
						caption: 'The eruption of Mt. St. Helens in 1980'
					}
        		
      		]
      	},
      	{
			tab: 3,
			name: 'Day 3',
			title:  'Power packed - ecology, geology, rocks, adventure and fun!',
			details: [
				'Activity: Using GPS technology, go on a Scavenger Hunt and learn the effects of volcanic eruption',
				'Ecology Field Study: Discover the wonders of plant and animal life',
				'Geology Field Study: Investigate and understand geological hazards',
				'Activity: Learn a basic skill - prepare your own lunch',
				'Study rocks: Study rocks and crystal formations through interactive games',
				'Activity: Prepare a skit on ‘Return of Life’ or the \‘1980 Eruption\’ eruption'
			],
			images: [{
						src: 'img/quick_itenary/d3/01.jpg',
						caption: 'Scavenger Hunt'
					},
					{
						src: 'img/quick_itenary/d3/02.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d3/03.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d3/04.jpg',
						caption: 'Field study: Ecology'
					},
					{
						src: 'img/quick_itenary/d3/05.jpg',
						caption: ''
					}
					

      		]
      	},
      	
      	{
			tab: 4,
			name: 'Day 4',
			title:  'Thrilling adventure!',
			details: [
					'Activity: Work together and cultivate sensible risk-taking in a white water rafting experience',
					'Take a break on a picnic by the river',
					'Night Safari in Winston',
					'Activity: Use navigation skills on a night hike'
				],
			images: [
        		{
						src: 'img/quick_itenary/d4/01.jpg',
						caption: 'Animals in the night safari'
					},
					{
						src: 'img/quick_itenary/d4/02.jpg',
						caption: 'A break and lunch by the river'
					},
					{
						src: 'img/quick_itenary/d4/03.jpg',
						caption: 'A once-in-a-lifetime white water rafting experience'
					}
      		]
      	},
      	{
			tab: 5,
			name: 'Day 5',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        			{
						src: 'img/quick_itenary/d5/01.jpg',
						caption: 'Workshop at Flagship Apple store, Union Square'
					},
					{
						src: 'img/quick_itenary/d5/02.jpg',
						caption: 'Carnivores encountered on the morning safari'
					}
					
      		]
      	},
      	{
			tab: 6,
			name: 'Day 6',
			title:  'Power packed again!',
			details: [
					'Expert-led tour of the Intel Museum',
					'Activity: LEGO workshop with an Intel official',
					'Visit NASA Ames Research Center for a view into Space Science',
					'Expert-led Stanford University campus tour',
					'Golden Gate Bridge and Fisherman\’s Wharf',
					'Activity: Flash Mob for charity at Pier 39'
				],
			images: [
        		{
						src: 'img/quick_itenary/d6/01.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d6/02.jpg',
						caption: 'Flash mob at Pier 39'
					},
					{
						src: 'img/quick_itenary/d6/03.jpg',
						caption: 'Visit San Francisco landmarks'
					}
      		]
      	},
      	{
			tab: 7,
			name: 'Day 7',
			title:  'Stunning drive by the ocean!',
			details: [
				'Top 10 most scenic drives in the world, Pacific Coast Highway',
				'Relax and have lunch at Monterey beach'
			],
			images: [
        		{
						src: 'img/quick_itenary/d7/01.jpg',
						caption: 'Enjoy the Pacific Coast Highway drive'
					},
					{
						src: 'img/quick_itenary/d7/02.jpg',
						caption: 'Spend time at the famous Monterey beach'
					}
      		]
      	},
      	{
			tab: 8,
			name: 'Day 8',
			title:  'Have a blast at Universal Studios!',
			details: [
				'Spend the evening at the Hollywood Boulevard',
				'Activity: Plan and organize a course-wise dinner for the group'
			],
			images: [
        			{
						src: 'img/quick_itenary/d8/01.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d8/02.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d8/03.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d8/01.jpg',
						caption: 'The iconic Universal Studios'
					}
      		]
      	},
      	{
			tab: 9,
			name: 'Day 9',
			title:  'Campus Visit',
			details: [
				'Expert led tour of the University of California, Los Angeles (UCLA)',
				'Interact with a senior faculty member'
			],
			images: [
        		{
						src: 'img/quick_itenary/d9/01.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d9/02.jpg',
						caption: ''
					},
					{
						src: 'img/quick_itenary/d9/03.jpg',
						caption: 'Guided orientation at UCLA'
					}
      		]
      	}
	];


})();