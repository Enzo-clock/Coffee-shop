export class Coffee {
    #id;
    #name;
    #description;
    #reference;
    #price_per_kg;
    #available;

    constructor(id, name, description, reference, price_per_kg, available) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#reference = reference;
        this.#price_per_kg = Number(price_per_kg);
        this.#available = available;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get description() { return this.#description; }
    get reference() { return this.#reference; }
    get price_per_kg() { return this.#price_per_kg; }
    get available() { return this.#available; }

    set price_per_kg(newPrice) {
        if (newPrice < 0) {
            console.error("Le prix ne peut pas être négatif");
            return;
        }
        this.#price_per_kg = newPrice;
    }

    toggleAvailability() {
        this.#available = !this.#available;
    }

    getFormattedPrice() {
        /*
        const priceWithCents = this.#price_per_kg.toFixed(2);
        const priceWithComma = priceWithCents.replace(".", ",");
        const priceWithEuro = `${priceWithComma} €`;
        return priceWithEuro;
        */

        return `${this.#price_per_kg.toFixed(2).replace(".", ",")} €`;
    }

}