// =====================================================================
// Configuration de CC2S Kit Triathlon — à compléter (voir README, « Nouvelle installation », étape 3)
// Ces valeurs sont publiques par nature : elles peuvent être sur GitHub.
// Ne mettez JAMAIS ici la clé secrète Supabase ni le « Client Secret » Strava.
// =====================================================================
window.SUIVITRI_CONFIG = {
  // Supabase > Project Settings > Data API : « Project URL »
  supabaseUrl: 'https://dzzjbjepiqbqxybpxmkc.supabase.co',

  // Supabase > Project Settings > API Keys : clé « Publishable » (commence par sb_publishable_)
  supabaseKey: 'sb_publishable_vHJ8iQhEE3orwD9f5SVJ7Q_M1tnxlnF',

  // Strava > Paramètres > Mon application API : « Client ID » (un nombre)
  stravaClientId: '',
  // Bouton « Se connecter avec Strava » sur la page de connexion (masqué tant que ce n'est pas true)
  stravaLogin: false,

  // Adresse du site (laisser vide : détectée automatiquement)
  siteUrl: 'https://cc2spourtous.github.io/kit-triathlon',

  // Paiement en ligne (facultatif) : liens Stripe (https://buy.stripe.com/…)
  // Vides : l'utilisateur est invité à contacter son coach, qui active l'accès dans l'écran Comptes.
  paiementAbonnement: '',   // licence Standard
  paiementCoach: '',        // licence Coach
  // Lien du portail client Stripe, pour que l'abonné gère ou résilie lui-même son abonnement (facultatif)
  portailAbonnement: ''
};
