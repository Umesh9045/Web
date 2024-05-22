$('#types').ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'horizontal',
        verticalCentered: false,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'easeOutCubic',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        // sectionsColor: ['#333', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});