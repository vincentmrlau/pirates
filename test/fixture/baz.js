/* (c) 2015 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */

// This file is never actually loaded, it's just here to be mocked, because node (infuriatingly) uses the internal
// fs binding to check if modules exist, but uses actual fs (and therefore allows mocking) to read the files. So
// this is just here to be mocked.
//
// See https://github.com/nodejs/node/issues/4190