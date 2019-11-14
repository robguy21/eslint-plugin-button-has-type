/**
 * @fileoverview Checks that all buttons have a set type attribute
 * @author Robert Crous
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.parserOptions = {
    ecmaFeatures: {
        jsx: true
    }
};

module.exports.configs = {
    recommended: {
        rules: {
            'react-button-has-type': 2
        },
    },
};



// import processors
module.exports.processors = {

    // add your processors here
};

