export async function getServerSideProps({ req }) {
  const langHeader = req.headers["accept-language"];

  let lang = "en";

  if (langHeader) {
    lang = langHeader.split(",")[0].split("-")[0];
  }

  const supported = ["en", "de", "fr", "es", "it", "pl"];

  const locale = supported.includes(lang) ? lang : "en";

  return {
    redirect: {
      destination: `/${locale}`,
      permanent: false
    }
  };
}

export default function Home() {
  return null;
}
