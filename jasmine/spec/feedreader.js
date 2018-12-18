/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		/* First test:
        /* That loops through each feed
         * in allFeeds object and ensures it has a URL defined
         * and the URL is not empty.
         */

        it('All URLs are defined and NOT empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
		 

        /* Second Test:
         * That loops through each feed
		 * in allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
			it('All Names are defined and NOT empty', function() {
				allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
				});
			});
		});


    /*  Write a new test suite named "The menu" */
	
		describe('The menu', function() {
       
	   /* Third Test:
        /* Ensure the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		         /* If <body> has a class called "menu-hidden"  */
				 
        it('The menue is HIDDEN by DEFAULT', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* Fourth test: 
         /* That ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		     /* If <body> has a class "menu-hidden" that will toggle when menu icon is clicked */
			 
        it('When menu icon is clicked it toggles VISIBILITY', function() {

            /* First click trigger */
            $('.menu-icon-link').trigger('click');

            /*if <body> does not have a class "menu-hidden" */
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            /* First click trigger */
            $('.menu-icon-link').trigger('click');

            /* If <body> have a class "menu-hidden" */
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    /* Write a new test suite named "Initial Entries" */
	
	    describe('Initial Entries', function(done) {

        /* Fifth test:
		 * Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		  
        beforeEach(function(done) {

            /*To load the first feed defined(the index of 0). done is set as callback */
            loadFeed(0, done);
        });
		
        /* Expect that the feed will contain at least one entry */
        it('The function loadFeed is completed and it Contains at least ONE entry', function() {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

    });

    /* Write a new test suite named "New Feed Selection" */
	  describe('New Feed Selection', function(done) {
		  
		          /* Define the variables that will be used in the spec  */
        var nextEntry;
		var prevEntry;

        beforeEach(function(done) {

            /* To load feed with 1 index and save its text to (nextEntry) variable */
                loadFeed(1, function() {
                    nextEntry = $('.feed').html();
			 /* To load feed with 0 index and save its text to (prevEntry) variable */
            loadFeed(0, function() {
                prevEntry = $('.feed').html();		
                    done();
                });
            });
        });
        /* Sixth test:
         * Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 /* If the value in prevEntry and nextEntry are not matched */
        it('A new feed is LOADED and the content actually CHANGES', function(done) {
            console.log(prevEntry);
            console.log(nextEntry);
            expect(prevEntry).not.toEqual(nextEntry);
            done();
        });

    });
}());