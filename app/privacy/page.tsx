import type { Metadata } from "next";

const siteUrl = "https://ayumi-piano-yokohama.web.app";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜猿渡あゆみ ピアノ教室",
  description:
    "猿渡あゆみ ピアノ教室ウェブサイトにおける、個人情報とアクセス情報の取扱いについてご案内します。",
  alternates: { canonical: `${siteUrl}/privacy/` },
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a href="../" aria-label="猿渡あゆみピアノ教室のホームへ戻る">
          <span aria-hidden="true">♪</span>
          猿渡あゆみ ピアノ教室
        </a>
      </header>

      <article className="privacy-content">
        <p className="section-label">PRIVACY POLICY</p>
        <h1>プライバシーポリシー</h1>
        <p className="privacy-lead">
          猿渡あゆみ ピアノ教室（以下「当教室」）は、本ウェブサイトをご利用になる方の情報を、
          次のとおり取り扱います。
        </p>

        <section>
          <h2>1. 取得する情報</h2>
          <p>
            お電話またはショートメールでお問い合わせいただいた際に、お名前、連絡先、
            ご相談内容など、対応に必要な情報をお伺いすることがあります。
          </p>
          <p>
            また、本ウェブサイトでは利用状況を把握するため、Google Analyticsを使用しています。
            これにより、閲覧したページ、アクセス日時、参照元、端末・ブラウザの種類、
            おおまかな地域などの情報がCookie等を通じて収集される場合があります。
            当教室がGoogle Analyticsを使って氏名や電話番号を収集することはありません。
          </p>
        </section>

        <section>
          <h2>2. 利用目的</h2>
          <ul>
            <li>体験レッスンやお問い合わせへの対応</li>
            <li>ホームページの閲覧状況の把握と改善</li>
            <li>不具合の確認と安全な運営</li>
          </ul>
          <p>
            Google Analyticsで取得した情報は、広告表示、広告のパーソナライズ、
            リマーケティングには使用しません。
          </p>
        </section>

        <section>
          <h2>3. Google Analyticsについて</h2>
          <p>
            Google Analyticsによる情報の収集と処理については、
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
              target="_blank"
              rel="noreferrer"
            >
              Googleの説明
            </a>
            をご確認ください。
          </p>
          <p>
            計測を希望されない場合は、ブラウザのCookieを無効にするか、
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=ja"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics オプトアウト アドオン
            </a>
            を利用できます。
          </p>
        </section>

        <section>
          <h2>4. 情報の第三者提供</h2>
          <p>
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。
            なお、Google Analyticsによるデータ処理はGoogleの規約とプライバシーポリシーに基づきます。
          </p>
        </section>

        <section>
          <h2>5. 情報の管理</h2>
          <p>
            取得した情報は、利用目的に必要な範囲で適切に管理し、不要になった場合は適切な方法で処分します。
          </p>
        </section>

        <section>
          <h2>6. 内容の変更</h2>
          <p>
            法令やサービス内容の変更に応じて、本ポリシーを改定することがあります。
            変更後の内容は本ページに掲載します。
          </p>
        </section>

        <section>
          <h2>7. お問い合わせ</h2>
          <p>
            本ポリシーに関するお問い合わせは、ホームページに掲載している電話または
            ショートメールからご連絡ください。
          </p>
        </section>

        <p className="privacy-updated">制定日：2026年8月26日</p>
        <a className="privacy-back" href="../">ホームページへ戻る</a>
      </article>
    </main>
  );
}
