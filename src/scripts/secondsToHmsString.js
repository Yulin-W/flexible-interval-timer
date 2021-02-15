const numPadZeroToTwoPlaces = (value) => (value.toString().padStart(2, '0'));

const secondsToHmsString = s => {
    const hr = ((s - s % 3600) / 3600) % 60;
    const min = ((s - s % 60) / 60) % 60;
    const sec = s % 60;
    return [hr, min, sec].map(entry => numPadZeroToTwoPlaces(entry)).join(":");
};

export default secondsToHmsString;