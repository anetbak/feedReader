# Project Overview

Test suite for a web based application based on Jasmine. It reads RSS feeds.

## What are the tests?

  1. Checking that all RSS Feeds are defined.
  2. Checking that each feed in allFeeds object have a URL defined and that the URL is not empty.
  3. Checking that each feed in allFeeds object have a name defined and that the name is not empty.
  4. Checking that the menu element is hidden by default. This test have two expectations: does the menu display when clicked and does it hide when clicked again.
  5. Checking that if the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
  6. Checking that if when a new feed is loaded by the loadFeed function the content actually changes.
