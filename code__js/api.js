const url = "http://192.168.1.110:8000/api/"

async function vote(id){

    const _url = url + "voters"
    const _data = {code: document.querySelector(".men").value, candidat_id: id} 
    console.log(JSON.stringify(_data))

    await fetch(_url, {method: 'POST',   headers: {'Content-Type': 'application/json',}, body: JSON.stringify(_data)})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const text = id == 2 ? "Votre voix a bien été accordée au candidat Mensa" : "Votre voix a bien été accordée au candidat Fofana"
        if (data.status == true){
            alert(text)
            window.location.href='../pages__html/index.html'
        }else{
            alert(data.message)
        }

    })
    .catch((error) => {
        console.error(error)
    })
        
}

async function stats(){

    const _url = url + "candidats"

    await fetch(_url, {method: 'GET',   headers: {'Content-Type': 'application/json',}})
    .then((response) => response.json())
    .then((datas) => {
        fof = datas.data[0].voters.length
        men = datas.data[1].voters.length

        var ctx = document.getElementById('stat').getContext('2d')

        const data = {
            labels: [
              'Mensa Luc Germain',
              'Fofana Mohamed',
            ],
            datasets: [{
              label: 'Nombre de voies',
              data: [men, fof],
              backgroundColor: [
                  'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
              ],
              hoverOffset: 4
            }]
          };

        const config = {
            type: 'doughnut',
            data: data,
        };

        var graph = new Chart(ctx, config)
    })
    .catch((error) => {
        console.error(error)
    }) 
}

async function affichage0() {

    const _url = url + 'codes'
    const res = await fetch(_url, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    const data = await res.json()

    const codes = data.data

    let html = `
    <div class="tableau__contenu max-width">
        <table class="tableau__tab">
            <thead class="tableau__entete">
                <th class="tab__code">Code</th>
                <th class="tab__use">Etat</th>
            </thead>
            <tbody class="tableau_body">
    `

    codes.forEach(code => {
    let htmlSegment = `
                <tr class="tableau__body__contenu">
                    <td>${code.value}</td>
                    <td>${code.validity}</td>
                </tr>
            `;

    html += htmlSegment;
    });

    html += `</tbody>
        </table>
    </div>`

    const tab = document.querySelector('.tableau')
    tab.innerHTML = html

}

async function affichage1() {

    const _url = url + 'candidats'
    const res = await fetch(_url, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    const data = await res.json()

    const candidats = data.data

    let html = `<table class="tableau__tab">
    <thead class="tableau__entete">
        <th class="tab__code">Candidat</th>
        <th class="tab__use">Nombre de voix</th>
    </thead>
    <tbody class="tableau_body">
    `

    candidats.forEach(candidat => {
    let htmlSegment = `<div class="tableau__contenu max-width">
                <tr class="tableau__body__contenu">
                    <td>${candidat.name} ${candidat.surname}</td>
                    <td>${candidat.voters.length}</td>
                </tr>
            `;

    html += htmlSegment;
    });

    html += `</tbody>
        </table>
    </div>`

    const tab = document.querySelector('.tableau')
    tab.innerHTML = html

}

if(window.location.href == "http://192.168.1.101:5501/plateforme__vote/pages__html/statistiques.html")
    stats()