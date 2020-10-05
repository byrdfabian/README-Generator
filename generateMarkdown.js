function generateMarkdown(data){
    return `

# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description 
${data.Description}
# Table of Contents
*[Installation](#installation)
*[Usage](#usagge)
*[License](#license)
*[Contributors](#contributing)
*[Test](#tests)
*[Questions](#questions) 
# Installation
The following necessary dependenies must be installed to run the application
# Usage
In order to us this app, ${data.Usage}
# License
This project is lincensed under the ${data.License} licenses.
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributors
Contributors: ${data.Contributing}
# Test 
The following is needed to run the test: ${data.Tests}
# Questions 
If you have any questions about the repo, open an issue or contact ${data.Username}
`
}

module.exports=generateMarkdown;