const fs = require('fs');
const path = require('path');
// Change page theme
const changeTheme = (document, theme) => {
    const themeJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../../" , "config/theme.json")));
    document.body.style.background =  themeJSON[theme].mainBackground
    document.body.style.color = themeJSON[theme].textColor
    document.body.style.fontSize = themeJSON[theme].fontSize
    document.body.style.fontFamily = themeJSON[theme].fontFamily
    document.querySelector(".topbar").style.background = themeJSON[theme].topbarBackground
    document.querySelector(".sidebar").style.background = themeJSON[theme].sidebarBackground
    document.querySelector("#minimize").style.background = themeJSON[theme].minimizebackground
    document.querySelector("#minimize").style.color = themeJSON[theme].minimizeColor
    document.querySelector("#maximize").style.background = themeJSON[theme].maximizebackground
    document.querySelector("#maximize").style.color = themeJSON[theme].maximizeColor
    document.querySelector("#exit").style.background = themeJSON[theme].exitbackground
    document.querySelector("#exit").style.color = themeJSON[theme].exitColor
    document.querySelector(".create-new-tab").style.background = themeJSON[theme].newTabBackground
    document.querySelector(".create-new-tab").style.color = themeJSON[theme].newTabColor
    document.querySelector("#go-back").style.background = themeJSON[theme].navigatorBackground
    document.querySelector("#go-back").style.color = themeJSON[theme].navigatorColor
    document.querySelector("#go-forward").style.background = themeJSON[theme].navigatorBackground
    document.querySelector("#go-forward").style.color = themeJSON[theme].navigatorColor
    document.querySelector("#refresh").style.background = themeJSON[theme].navigatorBackground
    document.querySelector("#refresh").style.color = themeJSON[theme].navigatorColor
    document.querySelector(".path-navigator").style.background = themeJSON[theme].pathNavigatorBackground
    document.querySelector(".path-navigator").style.color = themeJSON[theme].pathNavigatorColor
    document.querySelector(".menu-dropdown").style.background = themeJSON[theme].menuDropdownBackground
    document.querySelector(".menu-dropdown").style.color = themeJSON[theme].menuDropdownColor
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.background = themeJSON[theme].tabBackground
        tab.style.color = themeJSON[theme].tabColor
    })
    document.querySelectorAll(".favorite").forEach(favorite => {
        favorite.style.background = themeJSON[theme].favoriteBackground
        favorite.style.color = themeJSON[theme].favoriteColor
    })
    document.querySelectorAll(".pendrive").forEach(pendrive => {
        pendrive.style.background = themeJSON[theme].pendriveBackground
        pendrive.style.color = themeJSON[theme].pendriveColor
    })
    document.querySelectorAll(".pendrive-total-capacity").forEach(bar => {
        bar.style.background = themeJSON[theme].pendriveTotalCapacityBackground
    })
    document.querySelectorAll(".pendrive-used-capacity").forEach(bar => {
        bar.style.background = themeJSON[theme].pendriveUsedCapacityBackground
    })
    document.querySelectorAll(".file-grid").forEach(grid => {
        grid.style.background = themeJSON[theme].gridBackground
        grid.style.color = themeJSON[theme].gridColor
    })
}

const getThemeJSON = () => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../", "config/theme.json")));
}

module.exports = {changeTheme, getThemeJSON}