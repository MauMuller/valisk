#!/usr/bin/env bash

versionNumber="$(cat package.json | jq -r '.version')";

firstValue=${versionNumber:0:1};
secondValue=${versionNumber:2:1};
thirtyValue=${versionNumber:4:1};

if [[ $firstValue =~ [0] ]]; then npm version major; fi;
if [[ $thirtyValue =~ [0-8] ]] && [ $firstValue  !=  '0' ]; then npm version patch; else npm version minor; fi;
if [[ $secondValue =~ [9] ]]; then npm version major; fi;