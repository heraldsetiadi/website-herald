function tampilNama() {
    const nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    document.getElementById("hasil").innerHTML =
        "Halo, <b>" + nama + "</b> 👋 (diproses JS)";
}
