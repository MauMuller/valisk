$versionNumber = ((Get-Content .\package.json -Raw) | ConvertFrom-Json).version;

$firstValue=$versionNumber[0];
$secondValue=$versionNumber[2];
$thirtyValue=$versionNumber[4];

if($thirtyValue -match '[0-8]' -and $firstValue -ne '0') { 
  npm version patch;
} else {
  npm version minor;
}

if($firstValue -eq '0') { 
  npm version major 
}

if($secondValue -eq '9') { 
  npm version major 
}