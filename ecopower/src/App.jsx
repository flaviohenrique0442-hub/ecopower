export default function CompanyCard() {
  const whatsappNumber = "5598981547101";

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através do card da EcoPower e gostaria de mais informações."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const instagramLink =
    "https://www.instagram.com/ecopowerenergiasaoluis/";

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(180deg, #eef6ea 0%, #f9fff7 100%);
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
          max-width: 920px;
          background: rgba(255,255,255,0.96);
          border-radius: 38px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(66, 190, 63, 0.12);
          box-shadow: 0 25px 60px rgba(0,0,0,0.08);
          padding: 38px;
        }

        .bg-circle-top {
          position: absolute;
          top: -160px;
          left: -140px;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: rgba(116, 211, 92, 0.12);
        }

        .bg-circle-bottom {
          position: absolute;
          right: -120px;
          bottom: -120px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(116, 211, 92, 0.12);
        }

        .content {
          position: relative;
          z-index: 2;
        }

        .logo {
          width: 250px;
          display: block;
          margin: 0 auto 28px;
        }

        .facade {
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
          margin-bottom: 28px;
        }

        .facade img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }

        .impact {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 28px;
          color: #1e293b;
        }

        .impact span {
          color: #2cab35;
        }

        .divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(68, 190, 59, 0.5),
            transparent
          );
          margin: 26px 0 34px;
          position: relative;
        }

        .divider::after {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2cab35;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .info-grid {
          display: grid;
          gap: 18px;
          margin-bottom: 32px;
        }

        .info-card div {
          display: flex;
          align-items: center;
          gap: 18px;
          width: 100%;
          background: white;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #eef9ea;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          flex-shrink: 0;
        }

        .label {
          font-size: 16px;
          color: #2cab35;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .value {
          font-size: 18px;
          color: #1f2937;
          line-height: 1.5;
        }

        .link {
          color: #1f2937;
          text-decoration: none;
        }

        .link:hover {
          color: #2cab35;
        }

        .buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .button {
          text-decoration: none;
          padding: 18px;
          border-radius: 18px;
          text-align: center;
          color: white;
          font-size: 20px;
          font-weight: 700;
          transition: 0.25s;
          box-shadow: 0 14px 24px rgba(0,0,0,0.12);
        }

        .button:hover {
          transform: translateY(-4px);
        }

        .whatsapp {
          background: linear-gradient(135deg, #1fbf3f, #34d058);
        }

        .instagram {
          background: linear-gradient(
            135deg,
            #ff9a00,
            #ff2d55,
            #8a3ffc
          );
        }

        @media (max-width: 768px) {
          .card {
            padding: 22px;
          }

          .logo {
            width: 200px;
          }

          .facade img {
            height: 260px;
          }

          .impact {
            font-size: 18px;
          }

          .buttons {
            grid-template-columns: 1fr;
          }

          .button {
            font-size: 18px;
          }

          .icon {
            width: 58px;
            height: 58px;
            font-size: 28px;
          }

          .value {
            font-size: 16px;
          }
        }
      `}</style>

      <main className="page">
        <section className="card">
          <div className="bg-circle-top"></div>
          <div className="bg-circle-bottom"></div>

          <div className="content">
            <img
              src="/logo-ecopower.png"
              alt="EcoPower"
              className="logo"
            />

            <div className="facade">
              <img
                src="/fachada-ecopower.jpeg"
                alt="Fachada da EcoPower"
              />
            </div>

            <div className="impact">
              Especialistas em{" "}
              <span>Energia Solar, Mobilidades e Soluções</span>
            </div>

            <div className="divider"></div>

            <div className="info-grid">
              <div className="info-card">
                <div className="icon">📍</div>

                <div>
                  <div className="label">Endereço</div>

                  <div className="value">
                    Av. Joaquim Mochel, 20 - Sala 01 e 02,
                    São Luís, 65050-145, MA, BR
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="icon">🕒</div>

                <div>
                  <div className="label">Horário</div>

                  <div className="value">
                    Segunda a Sexta • 08h às 18h
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="icon">💬</div>

                <div>
                  <div className="label">WhatsApp</div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="value link"
                  >
                    (98) 98154-7101
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="icon">📸</div>

                <div>
                  <div className="label">Instagram</div>

                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="value link"
                  >
                    @ecopowerenergiasaoluis
                  </a>
                </div>
              </div>
            </div>

            <div className="buttons">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button whatsapp"
              >
                💬 Falar no WhatsApp
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button instagram"
              >
                📸 Ver no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}