export class User {
  #firstname;

  constructor(id, firstname, lastname, email) {
    this.id = id;
    this.#firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  get firstname() {
    return this.#firstname;
  }
}
