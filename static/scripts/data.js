// data taken from https://www.kaggle.com/datasets/jiteshmd/crop-prediction-data?resource=download&select=indiancrop_dataset.csv

const valuesData = {
    "Andaman and Nicobar": {
        "n": 81.47,
        "p": 50.13,
        "k": 40.33,
        "temperature": 23.54,
        "humidity": 81.89,
        "ph": 6.63,
        "rainfall": 240.61
    },
    "Andhra Pradesh": {
        "n": 80.86,
        "p": 39.86,
        "k": 39.14,
        "temperature": 23.08,
        "humidity": 81.55,
        "ph": 6.23,
        "rainfall": 235.25
    },
    "Assam": {
        "n": 80.62,
        "p": 47.62,
        "k": 39.9,
        "temperature": 23.58,
        "humidity": 82.36,
        "ph": 6.47,
        "rainfall": 238.4
    },
    "Chattisgarh": {
        "n": 67.0,
        "p": 51.2,
        "k": 39.8,
        "temperature": 25.85,
        "humidity": 81.98,
        "ph": 5.85,
        "rainfall": 201.7
    },
    "Goa": {
        "n": 77.33,
        "p": 51.0,
        "k": 40.0,
        "temperature": 23.62,
        "humidity": 82.1,
        "ph": 5.8,
        "rainfall": 218.9
    },
    "Gujarat": {
        "n": 77.65,
        "p": 48.42,
        "k": 22.4,
        "temperature": 22.5,
        "humidity": 66.56,
        "ph": 6.28,
        "rainfall": 101.19
    },
    "Haryana": {
        "n": 39.83,
        "p": 68.0,
        "k": 80.02,
        "temperature": 18.76,
        "humidity": 16.96,
        "ph": 7.3,
        "rainfall": 81.03
    },
    "Himachal Pradesh": {
        "n": 27.65,
        "p": 67.54,
        "k": 40.08,
        "temperature": 19.66,
        "humidity": 19.82,
        "ph": 6.3,
        "rainfall": 96.13
    },
    "Jammu and Kashmir": {
        "n": 19.67,
        "p": 65.67,
        "k": 21.67,
        "temperature": 23.58,
        "humidity": 22.08,
        "ph": 5.81,
        "rainfall": 130.95
    },
    "Karnataka": {
        "n": 21.08,
        "p": 67.78,
        "k": 20.08,
        "temperature": 22.21,
        "humidity": 27.94,
        "ph": 5.76,
        "rainfall": 112.71
    },
    "Kerala": {
        "n": 21.01,
        "p": 54.57,
        "k": 20.18,
        "temperature": 28.06,
        "humidity": 60.94,
        "ph": 6.44,
        "rainfall": 83.93
    },
    "Madhya Pradesh": {
        "n": 32.3,
        "p": 56.66,
        "k": 19.41,
        "temperature": 29.21,
        "humidity": 73.7,
        "ph": 6.98,
        "rainfall": 59.52
    },
    "Maharashtra": {
        "n": 28.23,
        "p": 68.26,
        "k": 19.23,
        "temperature": 27.11,
        "humidity": 64.82,
        "ph": 7.01,
        "rainfall": 55.83
    },
    "Manipur": {
        "n": 17.58,
        "p": 31.92,
        "k": 34.9,
        "temperature": 22.32,
        "humidity": 84.36,
        "ph": 6.59,
        "rainfall": 91.75
    },
    "Meghalaya": {
        "n": 23.67,
        "p": 22.0,
        "k": 39.17,
        "temperature": 22.14,
        "humidity": 88.22,
        "ph": 6.5,
        "rainfall": 108.65
    },
    "Nagaland": {
        "n": 15.0,
        "p": 19.67,
        "k": 39.67,
        "temperature": 22.94,
        "humidity": 88.36,
        "ph": 6.47,
        "rainfall": 108.58
    },
    "Odisha": {
        "n": 54.93,
        "p": 45.66,
        "k": 44.44,
        "temperature": 24.19,
        "humidity": 85.83,
        "ph": 6.24,
        "rainfall": 106.08
    },
    "Pondicherry": {
        "n": 99.71,
        "p": 79.71,
        "k": 51.43,
        "temperature": 27.15,
        "humidity": 79.28,
        "ph": 6.1,
        "rainfall": 113.57
    },
    "Punjab": {
        "n": 45.19,
        "p": 58.19,
        "k": 58.88,
        "temperature": 29.19,
        "humidity": 63.93,
        "ph": 5.85,
        "rainfall": 94.09
    },
    "Rajasthan": {
        "n": 21.8,
        "p": 132.9,
        "k": 199.85,
        "temperature": 23.49,
        "humidity": 81.71,
        "ph": 6.06,
        "rainfall": 69.55
    },
    "Tamil Nadu": {
        "n": 85.84,
        "p": 39.5,
        "k": 79.02,
        "temperature": 26.03,
        "humidity": 86.4,
        "ph": 6.36,
        "rainfall": 47.7
    },
    "Telangana": {
        "n": 100.07,
        "p": 15.2,
        "k": 47.73,
        "temperature": 28.56,
        "humidity": 92.04,
        "ph": 6.38,
        "rainfall": 24.86
    },
    "Tripura": {
        "n": 100.5,
        "p": 16.94,
        "k": 50.17,
        "temperature": 28.66,
        "humidity": 92.66,
        "ph": 6.37,
        "rainfall": 23.4
    },
    "Uttar Pradesh": {
        "n": 50.77,
        "p": 52.66,
        "k": 59.56,
        "temperature": 26.06,
        "humidity": 89.35,
        "ph": 6.53,
        "rainfall": 125.93
    },
    "Uttrakhand": {
        "n": 78.14,
        "p": 46.29,
        "k": 39.71,
        "temperature": 25.12,
        "humidity": 80.49,
        "ph": 6.87,
        "rainfall": 172.46
    },
    "West Bengal": {
        "n": 97.04,
        "p": 32.24,
        "k": 31.81,
        "temperature": 25.45,
        "humidity": 62.82,
        "ph": 6.78,
        "rainfall": 161.66
    }
}

function getData(state){
    state = state.toLowerCase();
    for(var i in valuesData){
        if(i.toLowerCase() == state){
            return valuesData[i];
        }
    }
    return null;
}
