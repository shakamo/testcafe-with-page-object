import { Selector } from 'testcafe';
import { t } from 'testcafe';

class Mypage契約メニュー画面 {
    private やよいの給与明細オンライン = Selector("[alt='新規契約・有償契約お申込み']").nth(3)
    private Misoca = Selector("[alt='新規契約・有償契約お申込み']").nth(4)

    async やよいの給与明細オンラインを押下() {
        await this.やよいの給与明細オンライン.scrollTop
        await t.click(this.やよいの給与明細オンライン)
    }

    async Misocaを押下() {
        await this.Misoca.scrollTop
        await t.click(this.Misoca)
    }
}
export default new Mypage契約メニュー画面()
