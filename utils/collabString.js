// Called to generate proper string containing all collaborators
function collaboratorList(collabs) {
    console.log(collabs);
    let collabString = "";
    for (let i = 0; i < collabs.length; i++) {
        if ((collabs != "") && (collabs != " "))
            collabString +=`[![GitHub Link](https://img.shields.io/badge/Github-${collabs[i]}-yellowgreen.svg)](https://github.com/${collabs[i]}) `;
    }
    return collabString;
}

module.exports = collaboratorList;