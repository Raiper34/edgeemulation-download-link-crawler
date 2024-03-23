# Edgeemulation download link crawler

Simple crawler to get download links from https://edgeemu.net/ .

## Requirements
- node v18.16.0
- npm v9.5.1

## Instalation
Install Crawlee dependencies
```
npm install
```

## Usage
Uncomment platform you want to download in `URLS` constant of *config.ts* file and run
```
npm run start
```
It will create *items.json* in *storage/key_value_stores/default* folder.
The json contains name and url for each game, that was scraped.
If you want to get new line separated file only with urls, you can run
```
npm run extract
```
(`npm run start` needs to be run first).  
This command create *output.txt* in the root of the project with only urls for game downloading, separated by new line.
If you want to change url separator, you can modify `SEPARATOR` constant in *transformer/main.js* file.


## Author 
Filip Raiper34 Gulan

## License
MIT
