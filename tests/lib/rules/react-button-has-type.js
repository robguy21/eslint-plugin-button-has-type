/**
 * @fileoverview ba
 * @author ba
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var RuleTester = require("eslint").RuleTester;

var rule = require("../../../lib/rules/react-button-has-type");


var parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
};


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions });
ruleTester.run("react-button-has-type", rule, {

    valid: [
        "<button type='button'></button>",
        "<button type={thing}></button>",
        "<button type={thing.that || 'hello'}></button>",
    ],

    invalid: [
      {
            code: "<button></button>",
            errors: [{
                message: "Missing type attribute on button",
                type: "JSXElement"
            }]
        },
        {
            code: "<button type=''></button>",
            errors: [{
                message: "Button type property is empty",
                type: "JSXElement"
            }]
        },
        {
            code: "<button type='' type='exists'>hello world!</button>",
            errors: [{
                message: "Button type property is empty",
                type: "JSXElement"
            }]
        },
        {
            code: "<div><span><button type='' type='exists'>hello world!</button></span></div>",
            errors: [{
                message: "Button type property is empty",
                type: "JSXElement"
            }]
        },
    ]
});
