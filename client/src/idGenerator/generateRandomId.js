export function generateRandomId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// const randomId = generateRandomId();