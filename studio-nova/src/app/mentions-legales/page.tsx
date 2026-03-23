export default function MentionsLegales() {
  return (
    <div id="mentions-legales" className="pt-50 pb-50 bg-[#171717] text-white px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Mentions légales
      </h1>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Éditeur du site
          </h2>
          <p>
            Le site <strong>Studio Nova</strong> est édité par :
            <br />
            Nom : 
            <br />
            Statut : 
            <br />
            Adresse : 
            <br />
            Email :
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Hébergement
          </h2>
          <p>
            Le site est hébergé par :
            <br />
            Hébergeur : Vercel Inc.
            <br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            Site : https://vercel.com
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Propriété intellectuelle
          </h2>
          <p>
            L’ensemble du contenu du site (textes, images, graphismes, logo, etc.)
            est la propriété exclusive de Studio Nova, sauf mention contraire.
            Toute reproduction, distribution ou utilisation sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Données personnelles
          </h2>
          <p>
            Les informations collectées via le formulaire de contact sont utilisées
            uniquement pour répondre aux demandes. Aucune donnée n’est cédée à des tiers.
            Conformément à la réglementation en vigueur, vous pouvez demander la suppression
            de vos données en nous contactant par email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Responsabilité
          </h2>
          <p>
            Studio Nova s’efforce de fournir des informations aussi précises que possible.
            Toutefois, des erreurs ou omissions peuvent survenir. L’utilisateur est invité
            à vérifier les informations et à signaler toute erreur.
          </p>
        </section>

      </div>

    </div>
  );
}