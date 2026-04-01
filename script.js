const urlInput = document.getElementById('urlInput');
const downloadBtn = document.getElementById('downloadBtn');
const messageDiv = document.getElementById('message');

function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

function showMessage(text, isError = false) {
  messageDiv.textContent = text;
  messageDiv.classList.add('show');
  if (isError) {
    messageDiv.style.color = "#b33";
  } else {
    messageDiv.style.color = "#1f6d3b";
  }
  setTimeout(() => {
    messageDiv.classList.remove('show');
  }, 3500);
}

downloadBtn.addEventListener('click', () => {
  const url = urlInput.value.trim();

  if (!url) {
    showMessage("❌ Colle un lien d'abord", true);
    return;
  }

  if (!isValidUrl(url)) {
    showMessage("🔗 Lien invalide (ex: https://...)", true);
    return;
  }

  // ✅ Simulation : normalement ici on envoie au backend
  showMessage("✅ Lien reçu ! (backend bientôt actif)");

  // Pour tester un vrai téléchargement (exemple avec un fichier test)
  // On peut activer plus tard. Pour l'instant, on simule.
  console.log("Lien prêt à télécharger :", url);

  // Petite simulation d'action (retrait plus tard)
  setTimeout(() => {
    showMessage("🎯 Bientôt : téléchargement réel via backend");
  }, 1200);
});