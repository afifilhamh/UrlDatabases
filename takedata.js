function fetchData() {
    // Ambil nilai URL dari input teks
    var url = document.getElementById("urlInput").value;

    // Kirim permintaan AJAX untuk mengambil data
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data) {
            // Ubah data JSON menjadi tabel HTML yang terstruktur
            var table = "<table border='1'><tr>";
            for (var key in data[0]) {
                table += "<th>" + key + "</th>";
            }
            table += "</tr>";

            // Loop melalui setiap objek data
            for (var i = 0; i < data.length; i++) {
                table += "<tr>";
                for (var key in data[i]) {
                    table += "<td>" + data[i][key] + "</td>";
                }
                table += "</tr>";
            }

            table += "</table>";

            // Tampilkan tabel di bawah tombol
            document.getElementById("dataTable").innerHTML = table;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", errorThrown);
            alert("Failed to Convert");
        }
    });
}
