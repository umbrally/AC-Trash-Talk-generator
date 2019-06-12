# Trash Talk Generator

A web application that generates trash talk randomly.   

# Snapshot
![image](https://github.com/umbrally/AC-Trash-Talk-generator/blob/master/trash%20talk_generator%20snapshot.PNG)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install node.js by nvm
* download nvm-setup.zip from nvm-windows on github and then unzip it
* install LTS version of node.js
```
$ nvm install 10.16.0
```

### Installing

1. Download this project 
```
$ git clone https://github.com/umbrally/AC-Trash-Talk-generator.git
```

2. Install packages used in this project
```
$ npm install
```

3. [http://localhost:3000](http://localhost:3000) on your browser
```
$ npm run dev
```


## Features

* User can choose any target to generate trash talk randomly.
* Trash talk sentence structure is "身為一個 ${target}，${task}，${phrase}!". 
* The title will change after click on any target.
* Checked property of <input type = "radio"> will be still kept after form submitted. 

## Authors

* [Zoey Liu](https://github.com/umbrally) 
