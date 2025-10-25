document.getElementById("withdrawBtn").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const destination = document.getElementById("destination").value;
    const messageEl = document.getElementById("message");

    if(!amount || !destination){
        messageEl.textContent = "Veuillez remplir tous les champs.";
        messageEl.style.color = "red";
        return;
    }

    // Simulation simple du retrait
    messageEl.textContent = `Retrait de ${amount} € vers ${type === 'card' ? 'Carte' : 'Mobile Money'} (${destination}) effectué avec succès (simulation).`;
    messageEl.style.color = "green";

    // Optionnel : actualiser le solde simulé
    let balanceEl = document.getElementById("balance");
    // remove non digits to parse
    let currentBalance = parseFloat(balanceEl.textContent.replace(/[^\d.-]/g,'')) || 0;
    let newBalance = currentBalance - parseFloat(amount);
    balanceEl.textContent = `Solde : ${newBalance.toLocaleString()} €`;
});