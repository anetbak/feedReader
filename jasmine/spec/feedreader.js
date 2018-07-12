
$(function() {
   "use strict";
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



  // Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
          it('have defined url', function() {
              allFeeds.forEach(function (feed, url) {
              expect(feed.url).toBeTruthy();
              expect(feed.url).toMatch('http://');
                });

            });

// Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
                 it('have defined name', function() {
                    allFeeds.forEach(function (feed, name) {
                        expect(feed.name).toBeDefined();
                        expect(feed.name.length).not.toBe(0);
                      });
                  });
              });

              // Test for menu
        describe('The menu', function() {

           // Test that ensures the menu element is hidden by default.
         let body = $('body');
         it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

  // Test that ensures the menu changes visibility when the menu icon is clicked.
         it('changes visibility when clicked', function() {
           $('.menu-icon-link').click();
           expect(body.hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').click();
           expect(body.hasClass('menu-hidden')).toBe(true);
       });

   });


   // Test for function loadFeed.
    describe('Initial Entries', function() {
// Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
         beforeEach(function(done) {
            loadFeed(0, function(){
              done();
            });
        });

        it('have at least one entry element within the feed container', function(){
          // make sure there is at lease one entry in the feed
              expect($('.feed').find('.entry').length).toBeGreaterThan(0);
          });

        });

// Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
    describe('New Feed Selection', function() {

        let initial;
        let contentAfter;

         beforeEach(function(done) {
            loadFeed(0, function() {
                initial = $('.feed').html();
                done();
            });

        });

        it('changes content', function(done) {
            loadFeed(1, function() {
                contentAfter = $('.feed').html();
                //test if after is not equal to intial and if thats true the test passes
                expect(contentAfter).not.toBe(initial);
            done();
            });

        });

    });

}());

