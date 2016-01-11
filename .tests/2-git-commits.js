var
  MultiLineError = require('./test-utils').MultiLineError,
  fs = require('fs'),
  path = require('path'),
  util = require('util'),
  gitCountCommits = require('git-count-commits')
;

var MIN_COMMITS = 2;

/*
  +++++++++++++++++++++++++++++++++++++++++++++++
  TESTS
  +++++++++++++++++++++++++++++++++++++++++++++++
*/

describe('# git commits', function () {

  it('has enough commits', function (done) {
    var repoPath = path.resolve(process.env.REPO || ('./.git'));
    var rev = process.env.REV || 'gh-pages';

    gitCountCommits(repoPath, rev, function(err, commits) {
      if (commits < MIN_COMMITS || err) {
        throw new MultiLineError('Git Commits', ['Not enough commits to the repository']);
      }

      done();
    });
  });

});
