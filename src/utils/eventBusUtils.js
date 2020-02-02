class EventBus {
    constructor(message) {
        this.message = message;
    }

    getMessage = () => {
        return this.message
    };
}

export default EventBus;
