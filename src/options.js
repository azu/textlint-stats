// LICENSE : MIT
'use strict';
const optionator = require('optionator');
module.exports = optionator({
    prepend: 'textstat [options] file.md [file.txt] [dir]',
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true,
    options: [
        {heading: 'Options'},
        {
            option: 'help',
            alias: 'h',
            type: 'Boolean',
            description: 'Show help.'
        },
        {
            option: 'config',
            alias: 'c',
            type: 'path::String',
            description: 'Use configuration from this file or sharable config.',
            example: '--config /path/to/.textstatrc'
        },
        {
            option: 'plugin',
            type: '[String]',
            description: 'Specify plugins',
            example: '--plugin plugin-name'
        },
        {
            option: 'rule',
            type: '[path::String]',
            description: 'Set rule package name and set all default rules to off.'
        },
        {
            option: 'rulesdir',
            type: '[path::String]',
            description: 'Set rules from this directory and set all default rules to off.'
        },
        {
            option: 'format',
            alias: 'f',
            type: 'String',
            description: 'Use a specific output format.'
        },
        {
            option: 'version',
            alias: 'v',
            type: 'Boolean',
            description: 'Outputs the version number.'
        },
        {
            option: 'ext',
            type: '[String]',
            description: 'Specify text file extensions.'
        },
        {
            option: 'output-file',
            alias: 'o',
            type: 'path::String',
            description: 'Enable report to be written to a file.'
        },
        {
            option: 'quiet',
            type: 'Boolean',
            default: 'false',
            description: 'Report errors only.'
        },
        {
            option: 'stdin',
            type: 'Boolean',
            default: 'false',
            description: 'Lint code provided on <STDIN>.'
        }
    ]
});
