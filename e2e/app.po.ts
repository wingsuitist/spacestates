import { browser, element, by } from 'protractor';

export class SpacestatesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sps-root h1')).getText();
  }
}
