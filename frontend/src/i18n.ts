// File: src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      nav: { home: "Home", about: "Chi Siamo", products: "Prodotti", services: "Servizi", location: "Dove Siamo", contact: "Contatti" },
      hero: { subtitle: "Specialisti in Frutta Fresca e Prodotti Ortofrutticoli", desc: "Distributori di frutta fresca e prodotti ortofrutticoli di alta qualità. Serviamo ristoranti, hotel e rivenditori in tutta Italia e nel mondo.", cta: "Contattaci" },
      about: {
        badge: "Chi Siamo",
        title: "La Famiglia Natale: una storia lunga un secolo",
        p1: "Michele Natale & Gioele Natale operano nel settore dell’Ortofrutta da oltre 40 anni, ma la tradizione della nostra famiglia risale a più di un secolo fa. Abbiamo scelto di proseguire in questo settore perché siamo professionisti e crediamo di poter dare tanto alla comunità e ai mercati in cui operiamo.",
        p2: "La Famiglia Natale ha fondato AMAFRUITS S.R.L., azienda specializzata nella produzione e distribuzione di Ortofrutta e prodotti Biologici. Proponiamo un'ampia gamma di varietà per accontentare le esigenze di ogni mercato.",
        p3: "Operiamo nel mercato ortofrutticolo di Guidonia Montecelio (RM) e collaboriamo con partner e piattaforme in paesi comunitari ed extra-comunitari, tra cui Tunisia, Marocco, Egitto e Spagna.",
        p4: "Curiamo rigorosamente ogni fase del processo operativo: dalla produzione e approvvigionamento, alla selezione, confezionamento e distribuzione. Tutto viene realizzato nel più breve tempo possibile e conservato immediatamente nei nostri impianti di refrigerazione e abbattimento rapido della temperatura, per garantire freschezza, genuinità e sicurezza alimentare sulle tavole di tutto il mondo.",
        feat1: "Uva da tavola, ciliegie, agrumi, pesche, albicocche",
        feat2: "Fragole, carciofi, cocomeri, castagne, noci, nocciole",
        feat3: "Partner in Tunisia, Marocco, Egitto e Spagna",
        feat4: "Refrigerazione e abbattimento rapido della temperatura",
        company_data: "Dati Aziendali",
        years: "Anni di Esperienza"
      },
      products: {
        badge: "Il nostro catalogo", title: "I Nostri Prodotti", seasonal: "Stagionale", premium: "Premium", import: "Importazione", locale: "Locale", bio: "Biologico",
        items: {
          agrumi: "Agrumi", agrumi_d: "Arance, limoni e mandarini selezionati dai migliori agrumeti.",
          rossi: "Frutti Rossi", rossi_d: "Fragole, mirtilli e lamponi freschi, perfetti per la ristorazione.",
          esotica: "Frutta Esotica", esotica_d: "Ananas, mango e avocado importati via aerea per la massima qualità.",
          stagione: "Ortaggi di Stagione", stagione_d: "Carciofi e verdure fresche a filiera corta.",
          mele: "Mele e Pere", mele_d: "Le migliori varietà croccanti e succose, disponibili tutto l'anno.",
          uva: "Uva da Tavola", uva_d: "Uva bianca e nera, dolce e senza semi, direttamente dai nostri produttori."
        }
      },
      services: {
        badge: "Perché Sceglierci", title: "I nostri servizi",
        s1_title: "Consegna Rapida", s1_desc: "Consegniamo entro 24 ore dall'ordine, ogni giorno feriale, in tutta Italia.",
        s2_title: "Prodotti Bio", s2_desc: "Ampia selezione di prodotti certificati biologici e a filiera corta.",
        s3_title: "Qualità Garantita", s3_desc: "Ogni lotto viene controllato prima della spedizione. Soddisfatti o rimborsati.",
        s4_title: "Supporto Dedicato", s4_desc: "Un agente personale per ogni cliente B2B. Sempre raggiungibile."
      },
      contact: { badge: "Supporto 24/7", title: "Contattaci", name: "Nome e Cognome", email: "Email", phone: "Telefono", message: "Come possiamo aiutarti?", send: "Invia Richiesta", success: "Messaggio Inviato!", response: "Ti risponderemo il prima possibile." },
      footer: { desc: "Distributori di frutta fresca e prodotti ortofrutticoli di alta qualità per il settore B2B.", follow_us: "Seguici su", col_company: "Azienda", col_products: "Prodotti", col_contact: "Contatti" }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", about: "About Us", products: "Products", services: "Services", location: "Location", contact: "Contact" },
      hero: { subtitle: "Specialists in Fresh Fruit and Produce", desc: "Distributors of high-quality fresh fruit and vegetables. We serve restaurants, hotels, and retailers across Italy and worldwide.", cta: "Contact Us" },
      about: {
        badge: "About Us",
        title: "The Natale Family: A Century-Long History",
        p1: "Michele & Gioele Natale have been operating in the fruit and vegetable sector for over 40 years, but our family's tradition dates back more than a century. We chose to continue in this sector because we are professionals and believe we can give a lot to the community and the markets we operate in.",
        p2: "The Natale Family founded AMAFRUITS S.R.L., a company specialized in the production and distribution of fruit, vegetables, and organic products. We offer a wide range of varieties to satisfy the needs of every market.",
        p3: "We operate in the fruit and vegetable market of Guidonia Montecelio (Rome) and collaborate with partners and platforms in EU and non-EU countries, including Tunisia, Morocco, Egypt, and Spain.",
        p4: "We strictly oversee every phase of the operational process: from production and procurement to selection, packaging, and distribution. Everything is done as quickly as possible and immediately stored in our refrigeration and rapid cooling systems to ensure freshness, authenticity, and food safety on tables worldwide.",
        feat1: "Table grapes, cherries, citrus, peaches, apricots",
        feat2: "Strawberries, artichokes, watermelons, chestnuts, walnuts, hazelnuts",
        feat3: "Partners in Tunisia, Morocco, Egypt, and Spain",
        feat4: "Refrigeration and rapid temperature reduction",
        company_data: "Company Data",
        years: "Years of Experience"
      },
      products: {
        badge: "Our Catalog", title: "Our Products", seasonal: "Seasonal", premium: "Premium", import: "Imported", locale: "Local", bio: "Organic",
        items: {
          agrumi: "Citrus Fruits", agrumi_d: "Oranges, lemons, and mandarins selected from the best groves.",
          rossi: "Berries", rossi_d: "Fresh strawberries, blueberries, and raspberries, perfect for catering.",
          esotica: "Exotic Fruits", esotica_d: "Pineapples, mangoes, and avocados air-freighted for maximum quality.",
          stagione: "Seasonal Veg", stagione_d: "Artichokes and fresh short-chain vegetables.",
          mele: "Apples & Pears", mele_d: "The best crisp and juicy varieties, available all year round.",
          uva: "Table Grapes", uva_d: "White and black grapes, sweet and seedless, direct from our growers."
        }
      },
      services: {
        badge: "Why Choose Us", title: "Our Services",
        s1_title: "Fast Delivery", s1_desc: "We deliver within 24 hours of ordering, every weekday, across Italy.",
        s2_title: "Organic Products", s2_desc: "Wide selection of certified organic and short-chain products.",
        s3_title: "Guaranteed Quality", s3_desc: "Every batch is checked before shipping. Satisfaction guaranteed.",
        s4_title: "Dedicated Support", s4_desc: "A personal agent for every B2B client. Always reachable."
      },
      contact: { badge: "24/7 Support", title: "Contact Us", name: "Full Name", email: "Email", phone: "Phone", message: "How can we help you?", send: "Send Request", success: "Message Sent!", response: "We will get back to you as soon as possible." },
      footer: { desc: "Distributors of high-quality fresh fruit and vegetables for the B2B sector.", follow_us: "Follow us on", col_company: "Company", col_products: "Products", col_contact: "Contact" }
    }
  },
  es: {
    translation: {
      nav: { home: "Inicio", about: "Quiénes Somos", products: "Productos", services: "Servicios", location: "Ubicación", contact: "Contacto" },
      hero: { subtitle: "Especialistas en Fruta Fresca y Productos Hortofrutícolas", desc: "Distribuidores de frutas y verduras frescas de alta calidad. Servimos a restaurantes, hoteles y minoristas en toda Italia y en el mundo.", cta: "Contáctanos" },
      about: {
        badge: "Quiénes Somos",
        title: "La Familia Natale: Una historia de un siglo",
        p1: "Michele y Gioele Natale llevan operando en el sector hortofrutícola más de 40 años, pero la tradición de nuestra familia se remonta a más de un siglo. Elegimos continuar en este sector porque somos profesionales y creemos que podemos aportar mucho a la comunidad y a los mercados en los que operamos.",
        p2: "La Familia Natale fundó AMAFRUITS S.R.L., una empresa especializada en la producción y distribución de frutas, verduras y productos orgánicos. Ofrecemos una amplia gama de variedades para satisfacer las necesidades de cada mercado.",
        p3: "Operamos en el mercado hortofrutícola de Guidonia Montecelio (Roma) y colaboramos con socios y plataformas en países de la UE y extracomunitarios, incluyendo Túnez, Marruecos, Egipto y España.",
        p4: "Supervisamos rigurosamente cada fase del proceso operativo: desde la producción y el aprovisionamiento hasta la selección, el envasado y la distribución. Todo se realiza en el menor tiempo posible y se almacena inmediatamente en nuestros sistemas de refrigeración y abatimiento rápido de temperatura para garantizar frescura, autenticidad y seguridad alimentaria en las mesas de todo el mundo.",
        feat1: "Uvas de mesa, cerezas, cítricos, melocotones, albaricoques",
        feat2: "Fresas, alcachofas, sandías, castañas, nueces, avellanas",
        feat3: "Socios en Túnez, Marruecos, Egipto y España",
        feat4: "Refrigeración y reducción rápida de temperatura",
        company_data: "Datos de la Empresa",
        years: "Años de Experiencia"
      },
      products: {
        badge: "Nuestro Catálogo", title: "Nuestros Productos", seasonal: "De Temporada", premium: "Premium", import: "Importación", locale: "Local", bio: "Ecológico",
        items: {
          agrumi: "Cítricos", agrumi_d: "Naranjas, limones y mandarinas seleccionados de los mejores huertos.",
          rossi: "Frutos Rojos", rossi_d: "Fresas, arándanos y frambuesas frescas, perfectas para la restauración.",
          esotica: "Fruta Exótica", esotica_d: "Piñas, mangos y aguacates importados por vía aérea para máxima calidad.",
          stagione: "Verduras de Temporada", stagione_d: "Alcachofas y verduras frescas de cadena corta.",
          mele: "Manzanas y Peras", mele_d: "Las mejores variedades crujientes y jugosas, disponibles todo el año.",
          uva: "Uva de Mesa", uva_d: "Uva blanca y negra, dulce y sin semillas, directa de nuestros productores."
        }
      },
      services: {
        badge: "Por Qué Elegirnos", title: "Nuestros Servicios",
        s1_title: "Entrega Rápida", s1_desc: "Entregamos en 24 horas desde el pedido, todos los días laborables, en toda Italia.",
        s2_title: "Productos Bio", s2_desc: "Amplia selección de productos certificados ecológicos y de cadena corta.",
        s3_title: "Calidad Garantizada", s3_desc: "Cada lote es revisado antes del envío. Satisfacción garantizada.",
        s4_title: "Soporte Dedicado", s4_desc: "Un agente personal para cada cliente B2B. Siempre localizable."
      },
      contact: { badge: "Soporte 24/7", title: "Contáctanos", name: "Nombre y Apellidos", email: "Correo", phone: "Teléfono", message: "¿Cómo podemos ayudarte?", send: "Enviar Solicitud", success: "¡Mensaje Enviado!", response: "Te responderemos lo antes posible." },
      footer: { desc: "Distribuidores de frutas y verduras frescas de alta calidad para el sector B2B.", follow_us: "Síguenos en", col_company: "Empresa", col_products: "Productos", col_contact: "Contacto" }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "it",
    fallbackLng: "it",
    interpolation: { escapeValue: false }
  });

export default i18n;