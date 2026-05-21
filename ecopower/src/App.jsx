export default function CompanyCard() {
  const whatsappNumber = "5598999711247"; // Coloque seu número com DDI e DDD
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através do card da empresa e gostaria de mais informações."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-200">
        {/* Banner */}
        <div className="h-36 bg-gradient-to-r from-green-500 to-emerald-700"></div>

        {/* Conteúdo */}
        <div className="px-6 pb-6 relative">
          {/* Logo */}
          <div className="w-28 h-28 bg-white rounded-full shadow-lg border-4 border-white absolute -top-14 left-1/2 -translate-x-1/2 flex items-center justify-center text-2xl font-bold text-green-700">
            LOGO
          </div>

          <div className="pt-20 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              EcoPower
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Especialistas em atendimento, qualidade e confiança.
            </p>

            {/* Informações */}
            <div className="mt-6 space-y-3 text-left">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <p className="text-sm text-gray-500">📍 Endereço</p>
                <p className="font-medium text-gray-800">
                  Av. Joaquim Mochel, COHAB ANIL 2 - São Luís/MA
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <p className="text-sm text-gray-500">⏰ Horário</p>
                <p className="font-medium text-gray-800">
                  Segunda a Sexta • 08h às 18h
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <p className="text-sm text-gray-500">📞 WhatsApp</p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-green-600 font-bold hover:text-green-800 transition"
                >
                  (98) 99971-1247
                </a>
              </div>
            </div>

            {/* Botão */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full bg-green-600 hover:bg-green-700 transition text-white font-bold py-4 rounded-2xl shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
