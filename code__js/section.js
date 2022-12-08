let tab__code = ''

affichage0('http://192.168.1.79:8000/api/codes')
.then((res) => {
    tab__code = res
})

const cunsum__candidate = `
    <div class="tableau__contenu max-width">
        <table class="tableau__tab">
            <thead class="tableau__entete">
                <th class="tab__code">Code</th>
                <th class="tab__use">Candidat voté</th>
            </thead>

            <tbody class="tableau_body">
                <tr class="tableau__body__contenu">
                    <td>code 1</td>
                    <td>Mensa</td>
                </tr>
            </tbody>
        </table>
    </div>
`

const candidate = `
    <section class="tableau">
        <div class="tableau__contenu max-width">
            <table class="tableau__tab">
                <thead class="tableau__entete">
                    <th class="tab__code">Candidat</th>
                    <th class="tab__use">Nombre de votes</th>
                </thead>

                <tbody class="tableau_body">
                    <tr class="tableau__body__contenu">
                        <td>Mensa</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
`