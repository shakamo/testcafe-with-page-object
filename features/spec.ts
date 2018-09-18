import { expect } from 'chai';
import { Selector } from 'testcafe';

import Myportalログイン画面 from '../pages/myportal.login'
import Myportalメイン画面 from '../pages/myportal.main'
import Mypageメニュー画面 from '../pages/mypage.contract.menu'

import Screenshot from '../support/support';

fixture`auth fixtures`.page`https://myportal.yayoi-kk.co.jp/`;
test('authorized at page then is appeared your account name on element of header.', async t => {
  await Screenshot.リサイズ()

  // ログインする
  await Myportalログイン画面.開く();
  await Myportalログイン画面.弥生IDを入力する('xxxxxxxxxxxxxxxxxxxx@gmail.com');
  await Myportalログイン画面.次へを押下();
  await Myportalログイン画面.パスワードを入力する('pass')
  await Myportalログイン画面.ログインを押下();

  await Myportalメイン画面.各種メニューを押下()
  await Myportalメイン画面.オンラインサービス契約管理を押下()
  await Myportalメイン画面.サービスの契約を押下()

  await Mypageメニュー画面.Misocaを押下()

  // スクリーンショット撮る
  await Screenshot.スクリーンショット()
});
