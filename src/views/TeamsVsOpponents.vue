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
            <td>(15-14)</td> <!-- Doom -->
            <td class="unplayed">(10-5)</td> <!-- Flush -->
            <td>(18-11)</td> <!-- Ross -->
            <td>(8-8)</td> <!-- Raiders -->
            <td class="unplayed">(7-8)</td> <!-- Steamers -->
            <td class="unplayed">(7-6)</td> <!-- Bloods -->
            <td>(15-12)</td> <!-- Strong -->
            <td class="unplayed">(10-16)</td> <!-- Pipeline -->
            <td class="unplayed">(8-5)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Doom</td>
            <td>(14-15)</td> <!-- Brewers -->
            <td class="unplayed"></td> <!-- Doom -->
            <td class="unplayed">(7-8)</td> <!-- Flush -->
            <td class="unplayed">(17-11)</td> <!-- Ross -->
            <td class="unplayed">(8-7)</td> <!-- Raiders -->
            <td class="unplayed">(10-5)</td> <!-- Steamers -->
            <td class="unplayed">(10-3)</td> <!-- Bloods -->
            <td>(14-13)</td> <!-- Strong -->
            <td>(15-12)</td> <!-- Pipeline -->
            <td>(6-8)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Flush</td>
            <td class="unplayed">(5-10)</td> <!-- Brewers -->
            <td class="unplayed">(8-7)</td> <!-- Doom -->
            <td class="unplayed"></td> <!-- Flush -->
            <td>(6-10)</td> <!-- Ross -->
            <td>(13-16)</td> <!-- Raiders -->
            <td>(16-13)</td> <!-- Steamers -->
            <td>(10-17)</td> <!-- Bloods -->
            <td class="unplayed">(7-6)</td> <!-- Strong -->
            <td class="unplayed">(6-7)</td> <!-- Pipeline -->
            <td class="unplayed">(8-18)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Ross</td>
            <td>(11-18)</td> <!-- Brewers -->
            <td class="unplayed">(11-17)</td> <!-- Doom -->
            <td>(10-6)</td> <!-- Flush -->
            <td class="unplayed"></td> <!-- Ross -->
            <td class="unplayed">(10-5)</td> <!-- Raiders -->
            <td class="unplayed">(6-9)</td> <!-- Steamers -->
            <td class="unplayed">(4-9)</td> <!-- Bloods -->
            <td>(13-14)</td> <!-- Strong -->
            <td>(13-14)</td> <!-- Pipeline -->
            <td class="unplayed">(5-8)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Raiders</td>
            <td>(8-8)</td> <!-- Brewers -->
            <td class="unplayed">(7-8)</td> <!-- Doom -->
            <td>(16-13)</td> <!-- Flush -->
            <td class="unplayed">(5-10)</td> <!-- Ross -->
            <td class="unplayed"></td> <!-- Raiders -->
            <td class="unplayed">(18-10)</td> <!-- Steamers -->
            <td>(10-17)</td> <!-- Bloods -->
            <td class="unplayed">(5-8)</td> <!-- Strong -->
            <td class="unplayed">(8-5)</td> <!-- Pipeline -->
            <td>(14-13)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Steamers</td>
            <td class="unplayed">(8-7)</td> <!-- Brewers -->
            <td class="unplayed">(5-10)</td> <!-- Doom -->
            <td>(13-16)</td> <!-- Flush -->
            <td class="unplayed">(9-6)</td> <!-- Ross -->
            <td class="unplayed">(10-18)</td> <!-- Raiders -->
            <td class="unplayed"></td> <!-- Steamers -->
            <td>(13-14)</td> <!-- Bloods -->
            <td class="unplayed">(11-2)</td> <!-- Strong -->
            <td>(7-7)</td> <!-- Pipeline -->
            <td>(9-18)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Bloods</td>
            <td class="unplayed">(6-7)</td> <!-- Brewers -->
            <td class="unplayed">(3-10)</td> <!-- Doom -->
            <td>(17-10)</td> <!-- Flush -->
            <td class="unplayed">(9-4)</td> <!-- Ross -->
            <td>(17-10)</td> <!-- Raiders -->
            <td>(14-13)</td> <!-- Steamers -->
            <td class="unplayed"></td> <!-- Bloods -->
            <td class="unplayed">(9-4)</td> <!-- Strong -->
            <td class="unplayed">(6-7)</td> <!-- Pipeline -->
            <td>(13-14)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Strong</td>
            <td>(12-15)</td> <!-- Brewers -->
            <td>(13-14)</td> <!-- Doom -->
            <td class="unplayed">(6-7)</td> <!-- Flush -->
            <td>(14-13)</td> <!-- Ross -->
            <td class="unplayed">(8-5)</td> <!-- Raiders -->
            <td class="unplayed">(2-11)</td> <!-- Steamers -->
            <td class="unplayed">(4-9)</td> <!-- Bloods -->
            <td class="unplayed"></td> <!-- Strong -->
            <td>(14-13)</td> <!-- Pipeline -->
            <td class="unplayed">(7-6)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Pipeline</td>
            <td class="unplayed">(16-10)</td> <!-- Brewers -->
            <td>(12-15)</td> <!-- Doom -->
            <td class="unplayed">(7-6)</td> <!-- Flush -->
            <td>(14-13)</td> <!-- Ross -->
            <td class="unplayed">(5-8)</td> <!-- Raiders -->
            <td>(7-7)</td> <!-- Steamers -->
            <td class="unplayed">(7-6)</td> <!-- Bloods -->
            <td>(13-14)</td> <!-- Strong -->
            <td class="unplayed"></td> <!-- Pipeline -->
            <td class="unplayed">(3-10)</td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Shockers</td>
            <td class="unplayed">(5-8)</td> <!-- Brewers -->
            <td>(8-6)</td> <!-- Doom -->
            <td class="unplayed">(18-8)</td> <!-- Flush -->
            <td class="unplayed">(8-5)</td> <!-- Ross -->
            <td>(13-14)</td> <!-- Raiders -->
            <td>(18-9)</td> <!-- Steamers -->
            <td>(14-13)</td> <!-- Bloods -->
            <td class="unplayed">(6-7)</td> <!-- Strong -->
            <td class="unplayed">(10-3)</td> <!-- Pipeline -->
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

