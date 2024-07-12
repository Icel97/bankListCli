import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL, storageKeys } from '../utils/constants';

export const getBanks = async () => {
    return await ApiService(storageKeys.BANKS, `${API_URL}/banks`);
}

const ApiService = async (storageKey, endpoint) => {
    const data = await AsyncStorage.getItem(storageKey);
    if (!data) {
        console.log(`Fetching ${storageKey} from API`);
        try {
            const response = await axios.get(endpoint);
            await AsyncStorage.setItem(storageKey, JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    } else {
        console.log(`Fetching ${storageKey} from storage`);
        return JSON.parse(data);
    }
}