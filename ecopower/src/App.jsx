export default function CompanyCard() {
  const whatsappNumber = "5598981547101";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através do card da EcoPower e gostaria de mais informações."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: radial-gradient(circle at top, #f7fff4 0%, #eefbe9 38%, #ffffff 100%);
          color: #263238;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .card {
          width: 100%;
          max-width: 560px;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(69, 190, 59, 0.18);
          border-radius: 42px;
          box-shadow: 0 26px 70px rgba(36, 142, 46, 0.16);
          padding: 46px 34px 38px;
        }

        .curve-top,
        .curve-bottom {
          position: absolute;
          width: 310px;
          height: 310px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(119, 221, 79, 0.42), rgba(255,255,255,0));
          z-index: 0;
        }

        .curve-top {
          top: -170px;
          left: -120px;
        }

        .curve-bottom {
          right: -125px;
          bottom: -160px;
          transform: rotate(180deg);
        }

        .dots-top,
        .dots-bottom {
          position: absolute;
          width: 95px;
          height: 95px;
          background-image: radial-gradient(rgba(65, 190, 58, 0.28) 2px, transparent 2px);
          background-size: 14px 14px;
          z-index: 0;
        }

        .dots-top {
          top: 28px;
          right: 34px;
        }

        .dots-bottom {
          bottom: 28px;
          left: 28px;
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .logo {
          width: 250px;
          max-width: 82%;
          display: block;
          margin: 0 auto 24px;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08));
        }

        .divider {
          width: 100%;
          height: 1px;
          margin: 8px 0 28px;
          background: linear-gradient(90deg, transparent, rgba(76, 195, 65, 0.45), transparent);
          position: relative;
        }

        .divider::after {
          content: "";
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #38bf38;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 18px rgba(56, 191, 56, 0.75);
        }

        .subtitle {
          font-size: 17px;
          line-height: 1.5;
          margin: 0 auto 26px;
          color: #2d3a3f;
        }

        .info-list {
          display: grid;
          gap: 14px;
          margin: 0 auto 30px;
          max-width: 455px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 18px;
          text-align: left;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 18px;
          padding: 16px 18px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 34px rgba(36, 142, 46, 0.14);
        }

        .icon {
          min-width: 58px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 29px;
          background: #e9f8e5;
          color: #2fb536;
        }

        .label {
          margin: 0 0 4px;
          color: #2fb536;
          font-size: 20px;
          font-weight: 700;
        }

        .value,
        .value-link {
          margin: 0;
          color: #1f2933;
          font-size: 16px;
          line-height: 1.35;
          text-decoration: none;
        }

        .value-link:hover {
          color: #2fb536;
          text-decoration: underline;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 270px;
          padding: 17px 26px;
          border-radius: 15px;
          background: linear-gradient(135deg, #29af35, #58cf48);
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: 800;
          box-shadow: 0 16px 28px rgba(47, 181, 54, 0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .button:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 38px rgba(47, 181, 54, 0.38);
        }

        @media (max-width: 520px) {
          .page {
            padding: 18px;
          }

          .card {
            border-radius: 30px;
            padding: 38px 20px 32px;
          }

          .logo {
            width: 220px;
          }

          .subtitle {
            font-size: 15px;
          }

          .info-card {
            gap: 13px;
            padding: 14px;
          }

          .icon {
            min-width: 50px;
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          .label {
            font-size: 18px;
          }

          .value,
          .value-link {
            font-size: 14px;
          }

          .button {
            width: 100%;
            min-width: unset;
            font-size: 16px;
          }
        }
      `}</style>

      <main className="page">
        <section className="card">
          <div className="curve-top" />
          <div className="curve-bottom" />
          <div className="dots-top" />
          <div className="dots-bottom" />

          <div className="content">
            <img className="logo" src="/logo-ecopower.png" alt="EcoPower Energia Solar" />

            <div className="divider" />

            <p className="subtitle">
              Especialistas em Energia Solar, Mobilidades e Soluções.
            </p>

            <div className="info-list">
              <div className="info-card">
                <div className="icon">📍</div>
                <div>
                  <p className="label">Endereço</p>
                  <p className="value">Av. Joaquim Mochel, 20 - Sala 01 e 02, São Luís, 65050-145, MA, BR</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon">🕒</div>
                <div>
                  <p className="label">Horário</p>
                  <p className="value">Segunda a Sexta • 08h às 18h</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon">🟢</div>
                <div>
                  <p className="label">WhatsApp</p>
                  <a className="value-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    (98) 98154-7101
                  </a>
                </div>
              </div>
            </div>

            <a className="button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              💬 Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
