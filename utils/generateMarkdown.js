const badges = [
  // {
  //   name: 'None',
  //   img: '',
  //   url: '',
  // },
  {
    name: 'Apache',
    img: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    url: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    name: 'GNU GPL v3',
    img: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    url: 'https://opensource.org/licenses/EPL-1.0',
  },
  {
    name: 'MIT',
    img: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    url: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'BSD-2',
    img: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    url: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    name: 'BSD-3',
    img: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    url: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    name: 'Boost',
    img: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    url: 'https://www.boost.org/LICENSE_1_0.txt',
  },
  {
    name: 'Creative Commons Zero',
    img: 'https://licensebuttons.net/l/zero/1.0/80x15.png',
    url: 'http://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    name: 'Eclipse',
    img: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    url: 'https://opensource.org/licenses/EPL-1.0',
  },
  {
    name: 'GNU AGPL v3',
    img: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    url: 'https://www.gnu.org/licenses/agpl-3.0',
  },
  {
    name: 'GNU GPL v2',
    img: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    url: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  },
  {
    name: 'Mozilla',
    img: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    url: 'https://opensource.org/licenses/MPL-2.0',
  },
  {
    name: 'The Unlicense',
    img: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    url: 'http://unlicense.org/',
  },
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  for (const badge of badges) 
  if (data.liscense[0] === badge.name) {
    return `[![License]${badge.img}]`;
  }
  else {
    return '';
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  for (const badge of badges) 
  if (data.liscense[0] === badge.name) {
    return `(${badge.url})`;
  }
  else {
    return '';
  }
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(liscense) {
  for (const badge of badges)
  if (liscense === badge.name) {
    return `This project useds the [${badge.name}](${badge.url}) liscense`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data)}${renderLicenseLink(data)}

  ## Descripton

  ${data.description}

  ## Table Of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributions](#contributions)
   - [Test](#test)
   - [Liscense](#liscense)
   - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

  ${data.test}

  ## Contributions

  ${data.contributions}

  ## Liscense

  ${data.liscense}

  ## Questions
  Email: ${data.email}
  GitHub: ${data.github}
`;
}

module.exports = {
  generateMarkdown,
}