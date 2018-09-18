import { Selector } from 'testcafe';
import { t } from 'testcafe';

class Myportalメイン画面 {
    private 各種メニュー = Selector('#menu3')
    private オンラインサービス契約管理 = Selector("[title='オンラインサービス契約管理']")
    private サービスの契約 = Selector('#onlineService2')

    async 各種メニューを押下() {
        await t.click(this.各種メニュー)
    }

    async オンラインサービス契約管理を押下() {
        await t.click(this.オンラインサービス契約管理)
    }

    async サービスの契約を押下() {
        await t.click(this.サービスの契約)
    }
}
export default new Myportalメイン画面()
