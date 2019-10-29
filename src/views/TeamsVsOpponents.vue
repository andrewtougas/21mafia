<template>
  <div class="uk-container uk-container-expand">
    <section class="uk-section uk-section-small teams-vs-opp">
      <h2>Teams vs. Opponents</h2>
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th></th>
            <th>Brewers</th>
            <th>Doom</th>
            <th>Flush</th>
            <th>Ross</th>
            <th>Raiders</th>
            <th>Steamers</th>
            <th>Bloods</th>
            <th>Strong</th>
            <th>Pipeline</th>
            <th>Shockers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="team-name">Brewers</td>
            <td class="unplayed"></td> <!-- Brewers -->
            <td>(14-12)</td> <!-- Doom -->
            <td>(9-5)</td> <!-- Flush -->
            <td class="unplayed">(15-9)</td> <!-- Ross -->
            <td>(8-6)</td> <!-- Raiders -->
            <td>(7-7)</td> <!-- Steamers -->
            <td>(7-5)</td> <!-- Bloods -->
            <td>(13-10)</td> <!-- Strong -->
            <td>(9-14)</td> <!-- Pipeline -->
            <td class="unplayed">(6-5)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Doom</td>
            <td>(12-14)</td> <!-- Brewers -->
            <td class="unplayed"></td> <!-- Doom -->
            <td>(7-7)</td> <!-- Flush -->
            <td>(16-10)</td> <!-- Ross -->
            <td class="unplayed">(6-7)</td> <!-- Raiders -->
            <td class="unplayed">(8-5)</td> <!-- Steamers -->
            <td>(9-3)</td> <!-- Bloods -->
            <td class="unplayed">(13-9)</td> <!-- Strong -->
            <td>(14-9)</td> <!-- Pipeline -->
            <td>(5-7)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Flush</td>
            <td>(5-9)</td> <!-- Brewers -->
            <td>(7-7)</td> <!-- Doom -->
            <td class="unplayed"></td> <!-- Flush -->
            <td class="unplayed">(5-8)</td> <!-- Ross -->
            <td>(10-15)</td> <!-- Raiders -->
            <td>(14-12)</td> <!-- Steamers -->
            <td>(9-14)</td> <!-- Bloods -->
            <td>(6-6)</td> <!-- Strong -->
            <td class="unplayed">(6-5)</td> <!-- Pipeline -->
            <td>(6-17)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Ross</td>
            <td class="unplayed">(9-15)</td> <!-- Brewers -->
            <td>(10-16)</td> <!-- Doom -->
            <td class="unplayed">(8-5)</td> <!-- Flush -->
            <td class="unplayed"></td> <!-- Ross -->
            <td>(9-5)</td> <!-- Raiders -->
            <td class="unplayed">(6-7)</td> <!-- Steamers -->
            <td class="unplayed">(3-8)</td> <!-- Bloods -->
            <td>(12-12)</td> <!-- Strong -->
            <td>(13-11)</td> <!-- Pipeline -->
            <td>(5-7)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Raiders</td>
            <td>(6-8)</td> <!-- Brewers -->
            <td class="unplayed">(7-6)</td> <!-- Doom -->
            <td>(15-10)</td> <!-- Flush -->
            <td>(5-9)</td> <!-- Ross -->
            <td class="unplayed"></td> <!-- Raiders -->
            <td>(17-8)</td> <!-- Steamers -->
            <td>(10-13)</td> <!-- Bloods -->
            <td class="unplayed">(4-7)</td> <!-- Strong -->
            <td>(7-5)</td> <!-- Pipeline -->
            <td>(12-12)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Steamers</td>
            <td>(7-7)</td> <!-- Brewers -->
            <td class="unplayed">(5-8)</td> <!-- Doom -->
            <td>(12-14)</td> <!-- Flush -->
            <td class="unplayed">(7-6)</td> <!-- Ross -->
            <td>(8-17)</td> <!-- Raiders -->
            <td class="unplayed"></td> <!-- Steamers -->
            <td>(11-12)</td> <!-- Bloods -->
            <td>(10-2)</td> <!-- Strong -->
            <td>(6-6)</td> <!-- Pipeline -->
            <td>(9-14)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Bloods</td>
            <td>(5-7)</td> <!-- Brewers -->
            <td>(3-9)</td> <!-- Doom -->
            <td>(14-9)</td> <!-- Flush -->
            <td class="unplayed">(8-3)</td> <!-- Ross -->
            <td>(13-10)</td> <!-- Raiders -->
            <td>(12-11)</td> <!-- Steamers -->
            <td class="unplayed"></td> <!-- Bloods -->
            <td>(8-4)</td> <!-- Strong -->
            <td class="unplayed">(5-6)</td> <!-- Pipeline -->
            <td>(12-12)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Strong</td>
            <td>(10-13)</td> <!-- Brewers -->
            <td class="unplayed">(9-13)</td> <!-- Doom -->
            <td>(6-6)</td> <!-- Flush -->
            <td>(12-12)</td> <!-- Ross -->
            <td class="unplayed">(7-4)</td> <!-- Raiders -->
            <td>(2-10)</td> <!-- Steamers -->
            <td>(4-8)</td> <!-- Bloods -->
            <td class="unplayed"></td> <!-- Strong -->
            <td>(12-12)</td> <!-- Pipeline -->
            <td class="unplayed">(6-5)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Pipeline</td>
            <td>(14-9)</td> <!-- Brewers -->
            <td>(9-14)</td> <!-- Doom -->
            <td class="unplayed">(5-6)</td> <!-- Flush -->
            <td>(11-13)</td> <!-- Ross -->
            <td>(5-7)</td> <!-- Raiders -->
            <td>(6-6)</td> <!-- Steamers -->
            <td class="unplayed">(6-5)</td> <!-- Bloods -->
            <td>(12-12)</td> <!-- Strong -->
            <td class="unplayed"></td> <!-- Pipeline -->
            <td class="unplayed">(3-8)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Shockers</td>
            <td class="unplayed">(5-6)</td> <!-- Brewers -->
            <td>(7-5)</td> <!-- Doom -->
            <td>(17-6)</td> <!-- Flush -->
            <td>(7-5)</td> <!-- Ross -->
            <td>(12-12)</td> <!-- Raiders -->
            <td>(14-9)</td> <!-- Steamers -->
            <td>(12-12)</td> <!-- Bloods -->
            <td class="unplayed">(5-6)</td> <!-- Strong -->
            <td class="unplayed">(8-3)</td> <!-- Pipeline -->
            <td class="unplayed"></td> <!-- Shockers -->
          </tr>
        </tbody>
      </table>

      <div class="uk-card uk-card-secondary uk-card-body">
        <h3 class="uk-card-title">Info</h3>
        <ul>
          <li>Record depicted for left team versus top team</li>
          <li>Records in <span class="unplayed">green</span> denote teams that have not played each other yet this season</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.teams-vs-opp td:not(.team-name),
.teams-vs-opp th {
  text-align: right;
}
.team-name {
  font-size: .875rem;
  font-weight: 400;
  color: #999;
  text-transform: uppercase;
}
.unplayed {
  color: #32d296;
}
</style>

