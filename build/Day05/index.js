import { formatAnswer, getData } from "../utils.js";
const formatSchema = (data) => {
    const formattedData = data
        .replaceAll(" ", "-")
        .replaceAll("---", "+")
        .replaceAll(/[[\]-]/g, "")
        .replaceAll("+++", "++");
    const dataArray = formattedData.split("\n").slice(0, -1);
    const schemaArray = [];
    for (let i = 0; i < dataArray[0].length; i++) {
        for (let j = 0; j < dataArray.length; j++) {
            schemaArray.push(dataArray[j][i]);
        }
    }
    return new Array(dataArray[0].length)
        .fill(null)
        .map(() => schemaArray.splice(0, dataArray[0].length - 1))
        .map((col) => col.filter((item) => item !== "+"));
};
const crateMover9000 = (indication, schema) => {
    const [num, origin, target] = indication.slice(5).split(/\s[a-zA-Z]*\s/).map((val) => parseInt(val));
    schema[target - 1].unshift(...schema[origin - 1].splice(0, num).reverse());
    return schema;
};
const crateMover9001 = (indication, schema) => {
    const [num, origin, target] = indication.slice(5).split(/\s[a-zA-Z]*\s/).map((val) => parseInt(val));
    schema[target - 1].unshift(...schema[origin - 1].splice(0, num));
    return schema;
};
const Day05 = () => {
    const data = getData(5);
    const dataSplitted = data.split("\n\n");
    const schema = formatSchema(dataSplitted[0]);
    const indications = dataSplitted[1].split("\n");
    let newSchema = JSON.parse(JSON.stringify(schema));
    indications.forEach((indication) => {
        newSchema = crateMover9000(indication, newSchema);
    });
    console.log(formatAnswer(1, newSchema.map((col) => col[0])));
    let newSchema2 = JSON.parse(JSON.stringify(schema));
    indications.forEach((indication, id) => {
        if (id === indications.length)
            return;
        newSchema2 = crateMover9001(indication, newSchema2);
    });
    console.log(formatAnswer(2, newSchema2.map((col) => col[0])));
};
export default Day05;