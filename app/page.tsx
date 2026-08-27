import PrintButton from "./PrintButton";

const lessonFacts = [
  {
    label: "対象",
    value: "園児〜大学生",
    note: "幼稚園・保育園／小・中・高校生／大学生　そのほかもご相談ください",
  },
  { label: "回数", value: "月3〜4回" },
  { label: "月謝", value: "6,000〜8,000円" },
  { label: "入会金", value: "無料" },
];

const faqs = [
  {
    question: "ピアノが初めてでも大丈夫ですか？",
    answer:
      "もちろんです。幼稚園・保育園、小学生、中学生、高校生、大学生まで、一人ひとりの経験やペースに合わせてレッスンします。そのほかの方も、ご希望を伺いながら一緒に考えますので、どうぞ気軽にご相談ください。",
  },
  {
    question: "体験レッスンに費用はかかりますか？",
    answer:
      "体験レッスンは無料です。教室の雰囲気やレッスンの進め方を、実際にお確かめいただけます。",
  },
  {
    question: "レッスンの曜日や時間は選べますか？",
    answer:
      "空き状況によりご案内します。ご希望の曜日・時間を、お電話またはショートメールでお知らせください。",
  },
];

function ProofNotes({ label, pageBreak = true }: { label: string; pageBreak?: boolean }) {
  return (
    <aside className={`proof-notes print-only${pageBreak ? " print-break" : ""}`}>
      <p>{label}</p>
      <div aria-hidden="true" />
    </aside>
  );
}

export default function Home() {
  return (
    <main>
      <section className="print-proof-header print-only">
        <div>
          <p>WEBSITE PROOF</p>
          <h1>猿渡ピアノ教室　校正用プリント</h1>
        </div>
        <dl>
          <div>
            <dt>校正日</dt>
            <dd>　　　　年　　　月　　　日</dd>
          </div>
          <div>
            <dt>校正者</dt>
            <dd>　　　　　　　　　　　　</dd>
          </div>
        </dl>
        <p className="print-url">
          https://ape36soundscape.github.io/saruwatari-pianolessonclass-yokohama/
        </p>
      </section>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="猿渡ピアノ教室 ホーム">
          <span className="brand-mark" aria-hidden="true">♪</span>
          <span>猿渡ピアノ教室</span>
        </a>
        <nav aria-label="メインメニュー">
          <a href="#lesson">レッスン</a>
          <a href="#teacher">講師紹介</a>
          <a href="#access">アクセス</a>
        </nav>
        <a className="header-cta" href="tel:08020274012">無料体験を相談</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">横浜・新吉田東のピアノ教室</p>
          <h1 className="balanced-heading hero-heading">
            <span>音を読むよろこびから、</span>
            <span>奏でるたのしさへ。</span>
          </h1>
          <p className="hero-lead">
            幼稚園・保育園のお子さまから大学生の方まで。
            ピアノと音符ビッツで、一人ひとりの「弾いてみたい」を育てます。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="tel:08020274012">
              <span>無料体験を申し込む</span>
              <span aria-hidden="true">→</span>
            </a>
            <a className="button text-link" href="#lesson">レッスンを見る</a>
          </div>
          <p className="small-note">お電話・ショートメールで受け付けています</p>
        </div>

        <div className="hero-visual" aria-label="ピアノの鍵盤をモチーフにした装飾">
          <div className="music-card">
            <span className="music-card-kicker">FREE TRIAL LESSON</span>
            <strong>無料体験</strong>
            <span>受付中</span>
          </div>
          <div className="note note-one" aria-hidden="true">♪</div>
          <div className="note note-two" aria-hidden="true">♩</div>
          <div className="piano">
            {Array.from({ length: 9 }).map((_, index) => (
              <span className="white-key" key={index} />
            ))}
            {[1, 2, 4, 5, 6, 8].map((position) => (
              <span
                className="black-key"
                style={{ left: `${position * 11.11 - 3.5}%` }}
                key={position}
              />
            ))}
          </div>
        </div>
      </section>
      <ProofNotes label="トップ・見出しの修正メモ" />

      <section className="intro" aria-label="教室の特徴">
        <p className="intro-number">01</p>
        <div>
          <p className="section-label">LESSON</p>
          <h2 className="balanced-heading intro-heading">
            <span>自分のペースで、</span>
            <span>音楽と仲良くなる。</span>
          </h2>
        </div>
        <p className="intro-copy">
          <span className="reading-line">はじめて鍵盤にふれるお子さまも、</span>
          <span className="reading-line">音楽をもっと楽しみたい学生の方も。</span>
          <span className="reading-line">基礎を大切にしながら、毎回の小さな</span>
          <span className="reading-line">「できた」を積み重ねます。</span>
        </p>
      </section>

      <section className="lesson-section" id="lesson">
        <div className="facts-grid">
          {lessonFacts.map((fact) => (
            <article className="fact-card" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
              {fact.note && <small>{fact.note}</small>}
            </article>
          ))}
        </div>

        <div className="method-grid">
          <article className="method-card piano-method">
            <p className="card-number">01</p>
            <div className="method-icon" aria-hidden="true">♬</div>
            <h3>ピアノレッスン</h3>
            <p>
              年齢や経験に合わせて、楽譜の読み方から演奏の基礎まで丁寧に。
              音楽を楽しむ気持ちを大切に進めます。
            </p>
          </article>
          <article className="method-card bits-method">
            <p className="card-number">02</p>
            <div className="method-icon" aria-hidden="true">♪</div>
            <h3>音符ビッツ</h3>
            <p>
              楽しく、音符がすらすら読めるようになるソルフェージュ学習法。
              「読む力」が、演奏する自信につながります。
            </p>
          </article>
        </div>
      </section>
      <ProofNotes label="レッスン内容・料金の修正メモ" />

      <section className="teacher-section" id="teacher">
        <div className="teacher-art">
          <img
            className="teacher-illustration"
            src="grand-piano-illustration.png"
            alt="黒いグランドピアノのイラスト"
          />
        </div>
        <div className="teacher-copy">
          <p className="section-label">TEACHER</p>
          <h2 className="balanced-heading teacher-heading">
            <span>はじめまして。</span>
            <span>講師の猿渡あゆみです。</span>
          </h2>
          <p className="teacher-credential">国立音楽大学 音楽教育学科 卒業</p>
          <p>
            音楽は、できるようになる過程にもたくさんの楽しさがあります。
            一人ひとりの個性とペースを大切に、安心して通えるレッスンを心がけています。
            まずは無料体験で、教室の音にふれてみてください。
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <p className="section-label">FAQ</p>
          <h2>よくあるご質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{faq.question}</span>
                <span className="faq-plus" aria-hidden="true">＋</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ProofNotes label="講師紹介・よくある質問の修正メモ" />

      <section className="contact-section" id="access">
        <div className="contact-copy">
          <p className="section-label light">CONTACT</p>
          <h2>まずは、無料体験から。</h2>
          <p>
            レッスンの空き状況やご質問も、お気軽にお問い合わせください。
            <br />
            ショートメールでも受け付けています。
          </p>
          <div className="contact-actions">
            <a className="button contact-button" href="tel:08020274012">
              080-2027-4012
            </a>
            <a className="sms-link" href="sms:08020274012">ショートメールを送る →</a>
          </div>
        </div>
        <div className="location-card">
          <p className="location-label">PIANO CLASS</p>
          <h3>猿渡ピアノ教室</h3>
          <dl>
            <div>
              <dt>所在地</dt>
              <dd>横浜市港北区 新吉田東4丁目</dd>
            </div>
            <div>
              <dt>対象</dt>
              <dd>
                園児〜大学生
                <small>そのほかの方もご相談ください</small>
              </dd>
            </div>
            <div>
              <dt>体験</dt>
              <dd>無料・随時受付</dd>
            </div>
          </dl>
        </div>
      </section>
      <ProofNotes label="連絡先・所在地・その他の修正メモ" pageBreak={false} />

      <footer>
        <div className="footer-brand">
          <span aria-hidden="true">♪</span>
          <span>猿渡ピアノ教室</span>
        </div>
        <p className="footer-info">
          <span>横浜市港北区 新吉田東4丁目</span>
          <a href="privacy/">プライバシーポリシー</a>
        </p>
        <p>© 2026 Saruwatari Piano Class</p>
      </footer>
      <PrintButton />
    </main>
  );
}
