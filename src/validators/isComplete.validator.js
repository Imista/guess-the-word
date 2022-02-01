import getValue from "@utils/getValue.utils";

const isComplete = (inputs) => {
    const values = getValue(inputs);

    return values.every(value => value);
}

export default isComplete;