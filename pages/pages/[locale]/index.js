import { useRouter } from "next/router";

const content = {
  en: {
    title: "Premium Medical Textile Solutions",
    subtitle: "Reliable partner for healthcare textiles",
    productsTitle: "Products",
    products: ["Underpads", "Transfer Mats"],
    contact: "Contact Us",
    why: "Why Choose Us",
    features: [
      "High absorbency materials",
      "Durable and reusable",
      "Fast delivery in Europe"
    ]
  },
  de: {
    title: "Medizinische Textillösungen",
    subtitle: "Ihr zuverlässiger Partner",
    productsTitle: "Produkte",
    products: ["Unterlagen", "Transfermatten"],
    contact: "Kontakt",
    why: "Warum wir",
    features: [
      "Hohe Saugfähigkeit",
      "Langlebig und wiederverwendbar",
      "Schnelle Lieferung in Europa"
    ]
  },
  fr: {
    title: "Solutions textiles médicales",
    subtitle: "Partenaire fiable pour le secteur médical",
    productsTitle: "Produits",
    products: ["Alèses", "Tapis de transfert"],
    contact: "Contact",
    why: "Pourquoi nous",
    features: [
      "Haute absorption",
      "Durable",
      "Livraison rapide en Europe"
    ]
  },
  es: {
    title: "Soluciones textiles médicas",
    subtitle: "Socio confiable para el sector sanitario",
    productsTitle: "Productos",
    products: ["Empapadores", "Sábanas de transferencia"],
    contact: "Contacto",
    why: "Por qué nosotros",
    features: [
      "Alta absorción",
      "Duradero",
      "Entrega rápida en Europa"
    ]
  },
  it: {
    title: "Soluzioni tessili medicali",
    subtitle: "Partner affidabile",
    productsTitle: "Prodotti",
    products: ["Traverse", "Teli di trasferimento"],
    contact: "Contatto",
    why: "Perché noi",
    features: [
      "Alta assorbenza",
      "Resistente",
      "Consegna rapida in Europa"
    ]
  },
  pl: {
    title: "Tekstylia medyczne",
    subtitle: "Niezawodny partner",
    productsTitle: "Produkty",
    products: ["Podkłady", "Maty transferowe"],
    contact: "Kontakt",
    why: "Dlaczego my",
    features: [
      "Wysoka chłonność",
      "Trwałość",
      "Szybka dostawa w Europie"
    ]
  }
};

export default function Page() {
  const { query } = useRouter();
  const t = content[query.locale] || content.en;

  return (
    <div style={{ fontFamily: "Arial", margin: 0 }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #eee"
      }}>
        <strong>Snowhitextiles</strong>
        <div>
          <a href="/en">EN</a> | <a href="/de">DE</a> | 
          <a href="/fr">FR</a> | <a href="/es">ES</a> | 
          <a href="/it">IT</a> | <a href="/pl">PL</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "80px 40px",
        background: "#f5f7fa",
        textAlign: "center"
      }}>
        <h1>{t.title}</h1>
        <p style={{ fontSize: 18 }}>{t.subtitle}</p>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "60px 40px" }}>
        <h2>{t.productsTitle}</h2>
        <div style={{ display: "flex", gap: 20 }}>
          {t.products.map((p, i) => (
            <div key={i} style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 10,
              width: 200
            }}>
              <h3>{p}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* WHY US */}
      <div style={{ padding: "60px 40px", background: "#f9f9f9" }}>
        <h2>{t.why}</h2>
        <ul>
          {t.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </div>

      {/* CONTACT */}
      <div style={{ padding: "60px 40px" }}>
        <h2>{t.contact}</h2>
        <form>
          <input placeholder="Name" style={{ display: "block", marginBottom: 10 }} />
          <input placeholder="Email" style={{ display: "block", marginBottom: 10 }} />
          <textarea placeholder="Message" />
          <br />
          <button style={{ marginTop: 10 }}>Send</button>
        </form>
      </div>

      {/* FOOTER */}
      <div style={{
        padding: 20,
        background: "#111",
        color: "#fff",
        textAlign: "center"
      }}>
        © Snowhitextiles | Impressum | Privacy Policy
      </div>

    </div>
  );
}
