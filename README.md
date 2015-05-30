# Wordpress Starter theme with SASS

This is an instruction and folder structure to setup a boilerplate for developing a website with wordpress and sass. This folder structure is valid only while using [underscores.me](http://underscores.me/) generated theme.

## Steps to install and setup

1. Go the root directory of this repository and give the below command.

```bash
npm install
```

2. Download the underscores theme with sassify option (advanced view) from [underscores.me](http://underscores.me/). 
Extract the downloaded folder to "mytheme" folder.

3. Install wordpress and create a theme directory where you may need to copy your files through a grunt task.

4. Change "mytheme" folder name to whichever name you would prefer. If you do so, please change the destination path in the Gruntfile.js appropriately.

5. Open GruntFile.js and change the wordpress theme staging directory folder to wherever you want it to be.

```bash
wptheme_staging: '<path>'
```
Should be changed to 

```bash
wptheme_staging: '<your wordpress installation theme directory>'
```

5. Open "package.json" file and change the name and description.

6. Open command prompt and run the command "npm install", this will download all the required node modules to the root.

7. Delete the "delete-me.txt" file inside the "mytheme" folder.

8. Go to the repository root folder and run grunt. The grunt tasks should be completed successfully.

9. You can browse through the wordpress admin page and change theme to the one which you have copied to the theme directory.

10. Now you are set to start developing the wordpress theme.


## Pre-requesties

You will need to have the following tools installed in your machine to run NPM as well as GRUNT tasks.

1. [node.js](https://nodejs.org/)
2. [Ruby](http://rubyinstaller.org/)
