export default class User {
    constructor({id, name, avatar, occupation, impressionsTotal, conversionsTotal, revenue, conversionsPerDay}) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.occupation = occupation;
        this.impressionsTotal = impressionsTotal;
        this.conversionsTotal = conversionsTotal;
        this.revenue = revenue;
        this.conversionsPerDay = conversionsPerDay;
    }
}
