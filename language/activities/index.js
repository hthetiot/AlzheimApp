import { Text } from 'react-native'

const applyBoldStyle = text => {
    let numberOfItemsAdded = 0;
    const result = text.sentence.split(/\{\d+\}/);
    text.boldText.forEach((boldText, i) => result.splice(++numberOfItemsAdded + i, 0, <Text key={i} style={{fontWeight: 'bold', color: "#3B8EFF"}}>{boldText}</Text>));
    return <Text>{result}</Text>;
};

export const lang = {
    fr: {
        Hello: (username) => {
            return (applyBoldStyle({
                sentence: "Bonjour {0} !",
                boldText: [username]
            }))
        },
        Activities: "Activités",
        Score: "Score",
        Settings: "Paramètres",
    },
    en: {
        Hello: (username) => {
            return (applyBoldStyle({
                sentence: "Hello {0}!",
                boldText: [username]
            }))
        },
        Activities: "Activities",
        Score: "Score",
        Settings: "Settings",
    }
};