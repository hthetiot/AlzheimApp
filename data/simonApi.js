import AsyncStorage from '@react-native-async-storage/async-storage'

const Datastore = require('react-native-local-mongodb')

export const db = new Datastore({ filename: 'SimonSchema', storage: AsyncStorage, autoload: true });

export function getBestScore(personId) {
    return db.find({personId: personId}).sort({score: -1}).exec( (err, data) => {
        if (err) console.error(err);
        return (data);
    });
};

export function getScoreDay(personId, date) {
    return db.find({personId: personId, date: date}).sort({score: -1}).exec( (err, data) => {
        if (err) console.error(err);
        return (data);
    });
};

export function getScore(personId) {
    return db.find({personId: personId}).sort({date: -1}).exec( (err, data) => {
        if (err) console.error(err);
        return (data);
    });
};

export function insertScore(personId, score, date) {
    return db.insertAsync({
        personId: personId,
        date: date,
        score: score
    });
};

export function clear(personId) {
    return db.removeAsync({personId: personId}, { multi: true });
};