import { t } from 'testcafe';

class ScreenshotSupport {
    constructor() { }

    async スクリーンショット() {
        await t
            .wait(1000)
            .takeScreenshot()
    }

    async リサイズ() {
        await t.resizeWindow(1020, 700)
    }
}
export default new ScreenshotSupport()
