export default class AdminTermekek {
    constructor(termekek, container) {
      this.termekek = termekek;
      this.container = container;
      this.megjelenitAdminTablazat();
    }
  
    megjelenitAdminTablazat() {
      this.container.empty();
      this.termekek.forEach(termek => {
        this.container.append(`
          <tr>
            <td>${termek.name}</td>
            <td>${termek.ár}</td>
            <td><button class="torles-gomb" data-id="${termek.id}">Törlés</button></td>
          </tr>
        `);
      });
    }
  
    onTorles(handler) {
      this.container.on('click', '.torles-gomb', function(event) {
        const id = $(this).data('id');
        handler(id);
      });
    }
  }
  