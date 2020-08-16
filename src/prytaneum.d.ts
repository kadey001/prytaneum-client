declare namespace Prytaneum {
    interface Townhall {
        _id: string;
        speaker: {
            name: string;
            party: string;
            territory: string;
        };
        moderator: string;
        topic: string;
        picture: string;
        readingMaterials: '';
        date: Date;
    }
    interface User {
        _id: string;
    }
}
