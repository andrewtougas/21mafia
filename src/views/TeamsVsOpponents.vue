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
            <td>(14-14)</td> <!-- Doom -->
            <td>(10-5)</td> <!-- Flush -->
            <td class="unplayed">(15-11)</td> <!-- Ross -->
            <td>(8-7)</td> <!-- Raiders -->
            <td>(7-8)</td> <!-- Steamers -->
            <td>(7-6)</td> <!-- Bloods -->
            <td>(13-12)</td> <!-- Strong -->
            <td>(9-16)</td> <!-- Pipeline -->
            <td>(8-5)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Doom</td>
            <td>(14-14)</td> <!-- Brewers -->
            <td class="unplayed"></td> <!-- Doom -->
            <td>(7-8)</td> <!-- Flush -->
            <td>(17-11)</td> <!-- Ross -->
            <td class="unplayed">(7-7)</td> <!-- Raiders -->
            <td class="unplayed">(9-5)</td> <!-- Steamers -->
            <td>(10-3)</td> <!-- Bloods -->
            <td>(13-12)</td> <!-- Strong -->
            <td>(14-11)</td> <!-- Pipeline -->
            <td>(5-8)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Flush</td>
            <td>(5-10)</td> <!-- Brewers -->
            <td>(8-7)</td> <!-- Doom -->
            <td class="unplayed"></td> <!-- Flush -->
            <td class="unplayed">(5-9)</td> <!-- Ross -->
            <td>(11-16)</td> <!-- Raiders -->
            <td>(15-13)</td> <!-- Steamers -->
            <td>(9-16)</td> <!-- Bloods -->
            <td>(7-6)</td> <!-- Strong -->
            <td>(6-7)</td> <!-- Pipeline -->
            <td>(7-18)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Ross</td>
            <td class="unplayed">(11-15)</td> <!-- Brewers -->
            <td>(11-17)</td> <!-- Doom -->
            <td class="unplayed">(9-5)</td> <!-- Flush -->
            <td class="unplayed"></td> <!-- Ross -->
            <td>(10-5)</td> <!-- Raiders -->
            <td class="unplayed">(6-8)</td> <!-- Steamers -->
            <td>(4-9)</td> <!-- Bloods -->
            <td>(12-14)</td> <!-- Strong -->
            <td>(13-13)</td> <!-- Pipeline -->
            <td>(5-8)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Raiders</td>
            <td>(7-8)</td> <!-- Brewers -->
            <td class="unplayed">(7-7)</td> <!-- Doom -->
            <td>(16-11)</td> <!-- Flush -->
            <td>(5-10)</td> <!-- Ross -->
            <td class="unplayed"></td> <!-- Raiders -->
            <td>(18-10)</td> <!-- Steamers -->
            <td>(10-15)</td> <!-- Bloods -->
            <td class="unplayed">(5-7)</td> <!-- Strong -->
            <td>(8-5)</td> <!-- Pipeline -->
            <td>(14-12)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Steamers</td>
            <td>(8-7)</td> <!-- Brewers -->
            <td class="unplayed">(5-9)</td> <!-- Doom -->
            <td>(13-15)</td> <!-- Flush -->
            <td class="unplayed">(8-6)</td> <!-- Ross -->
            <td>(10-18)</td> <!-- Raiders -->
            <td class="unplayed"></td> <!-- Steamers -->
            <td>(12-13)</td> <!-- Bloods -->
            <td>(11-2)</td> <!-- Strong -->
            <td>(7-6)</td> <!-- Pipeline -->
            <td>(9-16)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Bloods</td>
            <td>(6-7)</td> <!-- Brewers -->
            <td>(3-10)</td> <!-- Doom -->
            <td>(16-9)</td> <!-- Flush -->
            <td>(9-4)</td> <!-- Ross -->
            <td>(15-10)</td> <!-- Raiders -->
            <td>(13-12)</td> <!-- Steamers -->
            <td class="unplayed"></td> <!-- Bloods -->
            <td>(9-4)</td> <!-- Strong -->
            <td class="unplayed">(6-6)</td> <!-- Pipeline -->
            <td>(13-13)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Strong</td>
            <td>(12-13)</td> <!-- Brewers -->
            <td>(12-13)</td> <!-- Doom -->
            <td>(6-7)</td> <!-- Flush -->
            <td>(14-12)</td> <!-- Ross -->
            <td class="unplayed">(7-5)</td> <!-- Raiders -->
            <td>(2-11)</td> <!-- Steamers -->
            <td>(4-9)</td> <!-- Bloods -->
            <td class="unplayed"></td> <!-- Strong -->
            <td>(14-12)</td> <!-- Pipeline -->
            <td class="unplayed">(6-6)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Pipeline</td>
            <td>(16-9)</td> <!-- Brewers -->
            <td>(11-14)</td> <!-- Doom -->
            <td>(7-6)</td> <!-- Flush -->
            <td>(13-13)</td> <!-- Ross -->
            <td>(5-8)</td> <!-- Raiders -->
            <td>(6-7)</td> <!-- Steamers -->
            <td class="unplayed">(6-6)</td> <!-- Bloods -->
            <td>(12-14)</td> <!-- Strong -->
            <td class="unplayed"></td> <!-- Pipeline -->
            <td class="unplayed">(3-9)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Shockers</td>
            <td>(5-8)</td> <!-- Brewers -->
            <td>(8-5)</td> <!-- Doom -->
            <td>(18-7)</td> <!-- Flush -->
            <td>(8-5)</td> <!-- Ross -->
            <td>(12-14)</td> <!-- Raiders -->
            <td>(16-9)</td> <!-- Steamers -->
            <td>(13-13)</td> <!-- Bloods -->
            <td class="unplayed">(6-6)</td> <!-- Strong -->
            <td class="unplayed">(9-3)</td> <!-- Pipeline -->
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

