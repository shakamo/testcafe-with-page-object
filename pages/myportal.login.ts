import { Selector } from 'testcafe';
import { t } from 'testcafe';

class Myportalメイン画面 {
    private url = 'https://myportal.yayoi-kk.co.jp/'

    private 弥生ID = Selector('#login_id')
    private 次へ = Selector('#next_btn')

    private 入力された弥生ID = Selector('#login_id_inputed')
    private パスワード = Selector('#password')
    private ログイン = Selector('#login_btn')

    async 開く() {
        await t
            .navigateTo(this.url)
    }

    async 弥生IDを入力する(value: string) {
        await t.typeText(this.弥生ID, value);
    }

    async 次へを押下() {
        await t.click(this.次へ)
    }

    async 入力された弥生IDが同じ(value: string) {
        await t.expect(this.入力された弥生ID).eql('value')
    }

    async パスワードを入力する(value: string) {
        await t.typeText(this.パスワード, value)
    }

    async ログインを押下() {
        await t.click(this.ログイン)
    }
}
export default new Myportalメイン画面()
