const qc =  require('react-query')

function getPcolor(){
    const themeColor = qc.queryCache.getQueryData("theme")
    const pcolor = {"@primary-color": themeColor}
    console.log("pcolor",pcolor)
    return pcolor["@primary-color"]
}

const mcolor = getPcolor()

module.exports = {
    default: mcolor,
    getPcolor,
}