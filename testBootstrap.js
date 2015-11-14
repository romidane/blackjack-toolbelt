var $ = jQuery;

jasmine.getFixtures().fixturesPath = 'base/test/fixtures';


function triggerEvent(elem, event) {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent(event, true, true);
    elem.dispatchEvent(e);
}   
